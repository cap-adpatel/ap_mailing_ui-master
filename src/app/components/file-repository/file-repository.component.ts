import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {forkJoin} from 'rxjs';
import * as _ from 'lodash';
import {InsilicoService} from '../../services/insilico.service';
import {CcsService} from '../../services/ccs.service';
import {ContentService} from '../../services/content.service';
import {DownloadModalComponent} from '../widgets/download-modal/download-modal.component';
import {UploadModalComponent} from '../widgets/upload-modal/upload-modal.component';
import {FilesLastUpdatePipe} from '../../pipes/files-last-update.pipe';
import {MutagenizedStatusPipe} from '../../pipes/mutagenized-status.pipe';
import {MailingOverview} from '../../classes/mailing-overview';
import {environment} from '../../../environments/environment';
import moment from 'moment';

@Component({
  selector: 'app-file-repository',
  templateUrl: './file-repository.component.html',
  styleUrls: ['./file-repository.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FileRepositoryComponent implements OnInit, AfterViewInit {

  showLoading = false;
  enabledForVendor = false;

  /* modal elements */
  downloadDialogRef: MatDialogRef<DownloadModalComponent>;
  uploadDialogRef: MatDialogRef<UploadModalComponent>;
  mailingOverview: MailingOverview;

  /* Mat Table elements */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  filterValues = {name: ''};
  displayedColumns: string[] = ['capNumber', 'kitId', 'program', 'filesLastUpdated', 'uploadfiles', 'uploaddate', 'vendorprocess'];

  /* external content elements */
  content: null;
  contentGroupId: null;
 // mailingId: string;       Mailing Id for Validation
  constructor(
    private contentService: ContentService,
    private elementRef: ElementRef,
    private insilicoService: InsilicoService,
    private ccsService: CcsService,
    private dialog: MatDialog,
    private filesLastUpdate: FilesLastUpdatePipe,
    private mutagenizedStatus: MutagenizedStatusPipe
  ) {
    this.contentGroupId = elementRef.nativeElement.tagName.toLowerCase();
    this.dataSource.filterPredicate = this.tableFilter();
  }

  ngOnInit() {
    this.loadContent();
  }

  ngAfterViewInit() {
  }

  tableFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function (data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return data.capNumber.toLowerCase().startsWith(searchTerms.name);
    };
    return filterFunction;
  }

  onDownloadTriggered = (kit, defaultChecked) => {
    console.log('starting the download process');
    const dataElement = {
      defaultChecked: defaultChecked,
      kit: kit,
      allKits: this.dataSource.data,
      enabledForVendor: this.enabledForVendor
    };
    this.downloadDialogRef = this.dialog.open(DownloadModalComponent, {
      width: '1000px',
      height: 'auto',
      disableClose: true,
      data: dataElement
    });

    this.downloadDialogRef.afterClosed().subscribe(result => {
      // this.loadMailingData(this.mailingOverview);
    });
  };

  onUploadTriggered = (kit, mailingId) => {
    this.uploadDialogRef = this.dialog.open(UploadModalComponent, {
      width: '1000px',
      height: 'auto',
      disableClose: true,
      data: {
        kit: kit,
        allKits: this.dataSource.data,
        mailingId: this.mailingOverview.mailingId,
        enabledForVendor: this.enabledForVendor
      }
    });

    this.uploadDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadMailingData(this.mailingOverview);
      }
    });
  };

  onDownloadAllTriggered = () => {
    const mailingId = this.mailingOverview.mailingId;
    this.insilicoService.getCSVPreanalytics(mailingId).subscribe( (rsp) => {

    });
  }

  onKitFilterChange(name: string) {
    this.filterValues.name = name;
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  determineIfEanbledForVendor = (mailingOverview: MailingOverview) => {
    const isStaff = environment.isStaff;
    if (isStaff) {
      return false;
    } else {
      const adder = mailingOverview.dueDaysInterval + 30;
      const switchDate = moment(mailingOverview.actualMailingDate, 'YYYY-MM-DD').add(adder, 'day');
      const today = moment();
      console.log('-----');
      console.log('switchDate', switchDate);
      console.log('today', today);
      console.log('isbefore', today.isBefore(switchDate));
      console.log('-----');
      return today.isBefore(switchDate);
    }
  }

  loadMailingData = (mailingOverview: MailingOverview) => {
    this.dataSource.data = [];
    this.showLoading = true;
    this.mailingOverview = mailingOverview;
    const mailingId = mailingOverview.mailingId;

    this.enabledForVendor = this.determineIfEanbledForVendor(mailingOverview);
    // uncomment to enable upload and download while testing locally
    // this.enabledForVendor = true;

    const summaryListObservable = this.insilicoService.getSummaryList(mailingId);
    const fileListObservable = this.ccsService.getFileList(mailingId);
    const mergedObservable = forkJoin(
      summaryListObservable,
      fileListObservable
    );
    const someData = [];
    mergedObservable
      .subscribe(
        (resp) => {
          this.showLoading = false;
          const fileList = resp[1];
          resp[0].forEach(ii => {
            ii.starterFiles = fileList.filter( f => {
              return (f.kitId === ii.kitId && f.uploadType.startsWith('starter'));
            });
            ii.mutagenizedFiles = fileList.filter( f => {
              return (f.kitId === ii.kitId && f.uploadType.startsWith('vendor'));
            });
            ii.filesLastUpdated = this.filesLastUpdate.transform(ii.starterFiles);

            ii.starterFiles = _.sortBy(ii.starterFiles, ['name']);
            ii.mutagenizedFiles = _.sortBy(ii.mutagenizedFiles, ['name']);

            ii.mutagenizedLastUpdated = this.filesLastUpdate.transform(ii.mutagenizedFiles);
            ii.mailingItemId = this.mailingOverview.mailingItemId;
            someData.push(ii);
          });
          this.dataSource.data = someData;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  };

  private loadContent = () => {
      this.contentService.loadContentFile()
        .subscribe(
          (resp) => {
            this.content = resp['app-file-repository'];
          });
  }
}
