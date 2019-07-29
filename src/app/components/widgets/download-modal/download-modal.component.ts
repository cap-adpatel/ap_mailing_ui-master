import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {catchError} from 'rxjs/operators';
import {InsilicoService} from '../../../services/insilico.service';
import {CcsService} from '../../../services/ccs.service';
import {AuditUpdate} from '../../../classes/audit-update';
import {Observable} from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css'],

})
export class DownloadModalComponent implements OnInit {

  showLoading = false;

  starterFiles = [];
  filesToDownload = [];
  downloadInProgress = false;
  downloadErrorOccurred = false;
  isSelected = false;
  @Input() submitted = false;
  enabledForVendor = false;

  constructor(
    private ccsService: CcsService,
    private insilicoService: InsilicoService,
    private dialogRef: MatDialogRef<DownloadModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    if ( this.data.kit ) {
        this.starterFiles = this.data.kit.starterFiles;
    } else {
      this.starterFiles = _.flatMapDeep( this.data.allKits, function(ak) {
        return ak.starterFiles;
      });
    }
    this.isSelected = this.data.defaultChecked;
    this.enabledForVendor = this.data.enabledForVendor;
    this.starterFiles.forEach(f => {
      f.checkedForDownload = this.isSelected;
    });
  }

  getModalHeader() {
    let actionMarker = 'Download';
    if (!this.enabledForVendor) {
      actionMarker = 'Lab';
    }
    if ( this.data.kit ) {
      return `${actionMarker} files for Kit ${this.data.kit.kitId}`;
    } else {
      return `${actionMarker} files for all kits`;
    }
  }

  toggleTheGroup = () => {
    this.isSelected = !this.isSelected;
    this.starterFiles.forEach(f => {
      f.checkedForDownload = this.isSelected;
    });
  };

  onSubmit() {
    this.submitted = true;
    this.dialogRef.close(this.submitted);
  }

  initiateDownload = () => {
    console.log('download initiated');
    const newRequests = this.starterFiles
      .filter(f => f.checkedForDownload)
      .map(fi => {
        return {
          kitId: fi.kitId,
          fileName: fi.name,
          key: fi.key
        };
      });
    console.log('new requests ===> ', newRequests);
    console.log('looking at this.filesToDownload ===> ', this.filesToDownload);
    _.pullAllBy(newRequests, this.filesToDownload, 'key');

    if (newRequests.length > 0) {
      this.showLoading = true;
      this.downloadInProgress = true;
      this.downloadErrorOccurred = false;
      this.filesToDownload = _.union(newRequests, this.filesToDownload);
      this.downloadFiles(newRequests).subscribe( resp => {
        console.log('done downloading with ', resp);
        _.pullAllBy(this.filesToDownload, newRequests, 'key');
        if ( this.filesToDownload.length === 0 ) {
          this.showLoading = false;
          this.downloadInProgress = false;
        }
      });
    } else {
      console.log('already plan to download the requested files');
    }
  };

  downloadFiles = (downloadFiles) => {
      console.log('will download ', downloadFiles);
      const ccsSvc = this.ccsService;
      const ptSvc = this.insilicoService;
      const xThis = this;
      return new Observable( (observer) => {
        downloadFiles.forEach(function (f, idx) {

          setTimeout(() => {
            const kitId = f.kitId;
            ccsSvc.getDownloadUrl(f.key, f.fileName).subscribe(r => {
              console.log( 'download key ', r.url );
              const a = document.createElement('a');
              a.setAttribute('id', 'downloader-' + r.key);
              document.body.appendChild(a);
              a.setAttribute('style', 'display: none');
              a.href = r.url;
              a.download = r.fileName;
              a.click();
              window.URL.revokeObjectURL(r.url);
              const au = new AuditUpdate();
              au.pageStatusCode = '5';
              ptSvc.updateAuditLog(kitId, au).subscribe( resp => {
                console.log('audit download successful', resp);
              });
              if ( (downloadFiles.length - 1) === idx ) {
                observer.next(`downloaded ${downloadFiles.length} files`);
                observer.complete();
              }
              _.pull(xThis.filesToDownload, f);
            }, err => {
              xThis.downloadErrorOccurred = true;
              xThis.showLoading = false;
              xThis.downloadInProgress = false;
              _.pull(xThis.filesToDownload, f);
          });
          }, idx * 8000);
      });
    });
  }
}
