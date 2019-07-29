import {Component, OnInit, ViewChild} from '@angular/core';
import {MailingOverview} from '../../classes/mailing-overview';
import {InsilicoService} from '../../services/insilico.service';
import {CcsService} from '../../services/ccs.service';
import {FileItem} from '../../classes/file-item';
import {forkJoin, Observable} from 'rxjs';
import * as SparkMD5 from 'spark-md5';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-file-check',
  templateUrl: './file-check.component.html',
  styleUrls: ['./file-check.component.css']
})
export class FileCheckComponent implements OnInit {

  @ViewChild('file') file;
  content = true;
  analyzing = false;
  analysisList = [];
  showTable = false;
  mailingId = null;
  showLoading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'size', 'received', 'checksum', 'verdict' ];
  dataSource = new MatTableDataSource();

  capFileDetails = [];

  constructor(
    private insilicoService: InsilicoService,
    private ccsService: CcsService,
  ) { }

  ngOnInit() {
  }

  addFiles = () => {
    this.file.nativeElement.click();
  }

  onFilesAdded = () => {
    const fjElements = [];
    for (let index = 0; index < this.file.nativeElement.files.length; index++) {
      const file = this.file.nativeElement.files[index];
      const fileItem = new FileItem();
      fileItem.key = null;
      fileItem.name = file.name;
      const filteredList = this.capFileDetails.filter(f => f.name === fileItem.name);
      const associatedItem = (filteredList && filteredList.length > 0) ? filteredList[0] : null;

      fileItem.capSize = associatedItem ? associatedItem.size : 'n/a';
      fileItem.capEtag = associatedItem ? associatedItem.eTag : 'n/a';
      fileItem.capReceived =  associatedItem ? associatedItem.received : null;

      fileItem.size = file.size;
      fileItem.received = new Date(file.lastModified);
      fileItem.data = file;
      fjElements.push( this.fileMD5(fileItem) );
      this.analyzing = true;
      this.analysisList.push(fileItem);
    }
    this.dataSource.data = this.analysisList;
    this.showTable = true;
    const mergedObservable = forkJoin(fjElements);
    mergedObservable.subscribe( rsp => {
      rsp.forEach( val => console.log( '----------------> checksum ' + val.checksum ));
      this.analyzing = false;
    });
  }

  fileMD5 = (fileItem) => {
    fileItem.verdict = 'PENDING';
    const file = fileItem.data;
    return new Observable( (observer) => {
      const blobSlice = File.prototype.slice;
      const chunkSize = 10 * 1024 * 1024;
      const chunks = Math.ceil(file.size / chunkSize);
      let currentChunk = 0;
      const sparks = [];
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        console.log('read chunk nr', currentChunk + 1, 'of', chunks);
        if (chunks === 1) {
          console.log('one chunk only');
          sparks.push(SparkMD5.ArrayBuffer.hash(fileReader.result, false));
        } else {
          sparks.push(SparkMD5.ArrayBuffer.hash(fileReader.result, true));
        }
        currentChunk++;
        if (currentChunk < chunks) {
          loadNext();
        } else {
          if (sparks.length === 1) {
            console.log('calculated ----> first ', sparks[0]);
            fileItem.checksum = sparks[0];
          } else {
            console.log('calculating multi');
            let preValue = '';
            sparks.forEach( spark => preValue += spark );
            fileItem.checksum = SparkMD5.hashBinary(preValue) + '-' + chunks;
          }
          const verdict = (fileItem.size === fileItem.capSize) && (fileItem.checksum === fileItem.capEtag);
          fileItem.verdict = verdict ? 'OK' : 'MISMATCHED';
          console.log('finished loading ' + fileItem.checksum);
          observer.next(fileItem);
          observer.complete();
        }
      };
      fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
      };
      function loadNext() {
        const start = currentChunk * chunkSize;
        const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      }
      loadNext();
    });
  }

  onReset = (name: string) => {
    this.analysisList = [];
    this.showTable = false;
    this.dataSource.data = [];
  }

  onKitFilterChange = (name: string) => {
  }

  loadMailingData = (mailingOverview: MailingOverview) => {
    console.log('validating checksum for ', mailingOverview.mailingId);
    this.showLoading = true;
    this.ccsService.getFileList(mailingOverview.mailingId).subscribe( results => {

      console.log('x');
      console.log('x');
      console.log('x', results);
      console.log('x');
      console.log('x');

      this.showLoading = false;
      this.mailingId = mailingOverview.mailingId;
      this.capFileDetails = results;
    });
  }
}
