import {Component, Inject, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FileItem} from '../../../classes/file-item';
import {CcsService} from '../../../services/ccs.service';
import {AppConfig} from '../../../config/app-config';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import * as SparkMD5 from 'spark-md5';
import {InsilicoService} from '../../../services/insilico.service';
import {AuditUpdate} from '../../../classes/audit-update';
import {FileKeys} from '../../../classes/file-keys';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UploadModalComponent implements OnInit {

  @ViewChild('file') file;
  showLoading = false;
  uploadErrorOccurred = false;
  changed = false;
  starterFiles = [];
  allElements = [];
  rogueItems = [];
  analyzing = false;
  uploading = false;
  uploadSuccessful = false;
  formIsSubmitted = false;
  enabledForVendor = false;

  constructor(
    private ccsService: CcsService,
    private insilicoService: InsilicoService,
    private dialogRef: MatDialogRef<UploadModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  @Input() submitted = false;
  errorContent = '';

  ngOnInit() {
    if ( this.data.kit ) {
      this.starterFiles = this.data.kit.starterFiles;
    } else {
      this.starterFiles = _.flatMapDeep( this.data.allKits, function(ak) {
        return ak.starterFiles;
      });
    }
    this.enabledForVendor = this.data.enabledForVendor;
    this.refreshAllElements();
    this.allElements.forEach( f => {
      f.removeLink = f.key ? 'Delete' : 'Remove';
    });
  }

  getModalHeader() {
    let actionMarker = 'Upload';
    if (!this.enabledForVendor) {
      actionMarker = 'Mutagenized';
    }
    if ( this.data.kit ) {
      return `${actionMarker} files for Kit ${this.data.kit.kitId}`;
    } else {
      return `${actionMarker} files for all kits`;
    }
  }

  onSubmit() {
    this.starterFiles = [];
    this.allElements = [];
    this.rogueItems = [];
    this.dialogRef.close(this.changed);
  }

  closeDialog = () => {
    if ( this.data.kit ) {
    this.data.kit.mutagenizedFiles = this.data.kit.mutagenizedFiles.filter( f => (f.key !== null) );
    }
    this.starterFiles = [];
    this.allElements = [];
    this.rogueItems = [];
    this.dialogRef.close(this.changed);
  }

  addFiles = () => {
    this.file.nativeElement.click();
  }

  onFilesAdded = () => {
    const fjElements = [];
    for (let index = 0; index < this.file.nativeElement.files.length; index++) {
      this.changed = true;
      const file = this.file.nativeElement.files[index];
      const fileItem = new FileItem();
      fileItem.key = null;
      fileItem.name = file.name;
      fileItem.size = file.size;
      fileItem.received = new Date(file.lastModified);
      fileItem.data = file;
      fileItem.validForUpload = this.isFileValidForUpload(file.name);
      const keys = this.getFileKeysFromFileName(file.name);
      fileItem.mailingId = keys ? keys.mailingId : null;
      fileItem.kitId = keys ? keys.kitId : null;
      fileItem.labId = keys ? keys.labId : null;
      fileItem.removeLink = 'Remove';
      fileItem.version = this.getUpdateVersion( fileItem.name );
      this.pullElementFromKit(fileItem.name);
      // if ( fileItem.validForUpload ) {
      //   fjElements.push( this.fileMD5(fileItem) );
      //   this.analyzing = true;
      // }
      this.pushElementToKit(fileItem);
    }
    // const mergedObservable = forkJoin(fjElements);
    // mergedObservable.subscribe( rsp => {
    //   rsp.forEach( val => console.log( '----------------> checksum ' + val.checksum ));
    //   this.analyzing = false;
    // });
  }

  fileMD5 = (fileItem) => {
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
        sparks.push(SparkMD5.ArrayBuffer.hash(fileReader.result, true));
        currentChunk++;
        if (currentChunk < chunks) {
          loadNext();
        } else {
          if (sparks.length === 1) {
            console.log('calculating first ', sparks[0]);
            fileItem.checksum = SparkMD5.hash(sparks[0]);
          } else {
            console.log('calculating multi');
            let preValue = '';
            sparks.forEach( spark => preValue += spark );
            fileItem.checksum = SparkMD5.hashBinary(preValue) + '-' + chunks;
          }
          console.log('finished loading ' + fileItem.checksum);
          observer.next(fileItem);
          observer.complete();
        }
      };
      fileReader.onerror = function () {
        console.warn('something went wrong');
      };
      function loadNext() {
        const start = currentChunk * chunkSize;
        const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      }
      loadNext();
    });
  }

  pullElementFromKit = ( fileName: string ) => {
    const keys = this.getFileKeysFromFileName(fileName);
    if ( this.data.kit ) {
      this.data.kit.mutagenizedFiles = this.data.kit.mutagenizedFiles.filter( f => f.name !== fileName );
    } else if ( this.data.allKits.filter(k => k.kitId === keys.kitId).length > 0 ) {
      this.data.allKits.filter(k => k.kitId === keys.kitId)[0].mutagenizedFiles =
        this.data.allKits.filter(k => k.kitId === keys.kitId)[0].mutagenizedFiles.filter( f => f.name !== fileName );
    } else {
      this.rogueItems = this.rogueItems.filter( f => f.name !== fileName );
    }
    this.refreshAllElements();
  }

  pushElementToKit = ( fileItem ) => {
    const keys = this.getFileKeysFromFileName(fileItem.name);
    if ( this.data.kit ) {
      this.data.kit.mutagenizedFiles.push(fileItem);
    } else if ( this.data.allKits.filter(k => k.kitId === keys.kitId).length > 0 ) {
      this.data.allKits.filter(k => k.kitId === keys.kitId)[0].mutagenizedFiles.push(fileItem);
    } else {
      this.rogueItems.push(fileItem);
    }
    this.refreshAllElements();
  }

  // noinspection SpellCheckingInspection
  getMutagenizedGroup = (fileName: string): FileItem[] => {
    if ( this.data.kit ) {
      return this.data.kit.mutagenizedFiles;
    } else {
      const keys = this.getFileKeysFromFileName(fileName);
      if ( keys ) {
        const relevantKit = this.data.allKits.filter(k => k.kitId === keys.kitId);
        if ( relevantKit && relevantKit.length > 0 ) {
          return relevantKit[0].mutagenizedFiles;
        } else {
          return null;
        }
      } else {
       return null;
      }
    }
  }

  getUpdateVersion = (fileName) => {
    const relevantMutagenizedFiles = this.getMutagenizedGroup(fileName);
    if ( relevantMutagenizedFiles ) {
      if ( relevantMutagenizedFiles.filter( f => f.name === fileName ).length === 0 ) {
        return 1; // adding for the first time
      } else if ( relevantMutagenizedFiles.filter( f => f.name === fileName )[0].data !== null ) {
        const relevantSubset = relevantMutagenizedFiles.filter( f =>  f.name === fileName);
        let newVersion = relevantSubset[0].version;
        newVersion++;
        return newVersion;
      } else {
        return relevantMutagenizedFiles.filter( f => f.name === fileName)[0].version;
      }
    }
  }

  async commenceUpload() {
    if ( !this.formIsSubmitted ) {
      this.formIsSubmitted = true;
      const filesArray =  this.allElements.filter( f => f.key === null );
      if ( filesArray && filesArray.length > 0 ) {
        this.asyncForEach(filesArray, async (file) => {
          await this.uploadOneFile(file);
        });
      }
    }
  }

  async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
    this.formIsSubmitted = false;
  }

  uploadOneFile = (f: FileItem) => {
    const keys = this.getFileKeysFromFileName(f.name);
    const key = `${keys.labId}/${keys.mailingId}/${keys.kitId}/${f.name}`;
    this.showLoading = true;
    this.uploadErrorOccurred = false;
    return new Observable<string>( (observer) => {
      this.ccsService.getSessionToken().subscribe( details => {
        const s3 = this.ccsService.getS3Client(details);
        f.canCancel = true;
        f.fileMessage = null;
        const file = f.data;
        const params = {
          Key: key,
          ContentType: file.type,
          Body: file,
          Bucket: AppConfig.settings.apiServer.ccs.bucketName,
          Metadata: {
            'mailingId': f.mailingId,
            'labId': f.labId,
            'kitId': f.kitId,
            // 'size': f.checksum,
            'uploadType': 'vendor',
            'uploadedBy': f.labId,
            'version': f.version.toString()
          }
        };
        const options = {partSize: 10 * 1024 * 1024, queueSize: 10};
        f.uploadStartTime = new Date().getTime();
        f.removeLink = 'Cancel';
        const temp = this;
        f.sub = s3.upload(params, options).
        on('httpUploadProgress', function(evt) {
          temp.showLoading = false;
          f.progress = (evt.loaded / f.data.size);
          const thisTime = new Date().getTime();
          f.speed = parseFloat( ((evt.loaded / 1000000) / ((thisTime - f.uploadStartTime) / 1000)).toString() ).toFixed(3) + ' mbps';
        }).
        send( (err, data) => {
          f.canCancel = false;
          if (err) {
            // console.log('upload err', err);
            f.fileMessage = 'FAILED';
            observer.next('done but something went wrong');
            observer.complete();
          } else {
            console.log('upload data', data);
            f.fileMessage = null;
            setTimeout(() => {
              this.ccsService.getFile(f.name).subscribe( updatedFile => {
                updatedFile.removeLink = updatedFile.key ? 'Delete' : 'Remove';
                this.pullElementFromKit(f.name);
                this.pushElementToKit(updatedFile);
                const au = new AuditUpdate();
                au.pageStatusCode = '6';
                this.insilicoService.updateAuditLog(keys.kitId, au).subscribe( rsp => {
                  console.log('audit upload successful');
                });
              });
            }, 10000);
            observer.next('done successfully');
            observer.complete();
          }
        });
      }, err => {
        this.uploadErrorOccurred = true;
        this.showLoading = false;
      });
    }).toPromise();
  }

  allFilesValidForUpload = () => {
    const newFiles = this.allElements.filter(f => f.key === null);
    const canCommence = (newFiles.length > 0) && newFiles.every( nf => nf.validForUpload );
    return canCommence;
  }

  whatWeSeeIfFine = () => {
    const newFiles = this.allElements.filter(f => f.key === null);
    const allIsFine = (newFiles.length === 0) || newFiles.every( nf => nf.validForUpload );
    return allIsFine;
  }

  removeFile = (uploadFile: FileItem ) => {
    if ( uploadFile.key === null ) {
      this.pullElementFromKit(uploadFile.name);
      this.ccsService.getFile(uploadFile.name).subscribe( originalFile => {
        this.changed = true;
        if ( originalFile && originalFile.name.toLowerCase().indexOf('modified') > -1 ) {
          originalFile.removeLink = originalFile.key ? 'Delete' : 'Remove';
          this.pushElementToKit(originalFile);
        }
       });
    } else {
      this.changed = true;
      const keys = this.getFileKeysFromFileName(uploadFile.name);
      this.ccsService.deleteFile(keys.labId, uploadFile.key).subscribe( rsp => {
        this.pullElementFromKit(uploadFile.name);
      }, error => {
        console.log('error', error);
      });
    }
  }

  isNewFile = (aFile: FileItem) => {
    return (aFile.key === null);
  }

  getFileKeysFromFileNameOldFormat(fileName: string): FileKeys {
    const pieces = fileName.split('_');
    if ( pieces.length < 3 ) {
      return null;
    } else {
      const keys = new FileKeys();
      keys.labId = pieces[0];
      keys.mailingId = pieces[1];
      keys.kitId = pieces[2];
      keys.fileIdentifier = pieces[3];
      return keys;
    }
  }

  getFileKeysFromFileName(fileName: string): FileKeys {
    const pieces = fileName.split('-');
    if ( pieces.length < 2 ) {
      return this.getFileKeysFromFileNameOldFormat(fileName);
    } else {
      const keys = new FileKeys();
      keys.kitId = pieces[0];
      keys.fileIdentifier = pieces[1];
      keys.labId = this.getLabIdFromAllKits(keys.kitId);
      keys.mailingId = this.getMailingIdFromAllKits(keys.kitId);
      return keys;
    }
  }

  isFileValidForUpload(fileName: string): boolean {
    if ( fileName.toLowerCase().indexOf('-modified') === -1 ) {
      return false;
    } else if ( !(
          fileName.toLowerCase().endsWith('.bam') || fileName.toLowerCase().endsWith('.bam.gz') ||
          fileName.toLowerCase().endsWith('.fq') || fileName.toLowerCase().endsWith('.fq.gz') ||
          fileName.toLowerCase().endsWith('.fastq') || fileName.toLowerCase().endsWith('.fastq.gz')
    )) {
      return false;
    } else {
      const keys = this.getFileKeysFromFileName(fileName);
      console.log('keys', keys);
      const expectedString = `${keys.kitId}-${keys.fileIdentifier}`;
      const indexOfModified = fileName.indexOf('-modified');
      const fileNameWithoutModified = fileName.substring(0, indexOfModified) + fileName.substring(indexOfModified + 9);
      console.log('cleaned fileName', fileNameWithoutModified);
      const returnValue = this.starterFiles.some( f =>  {
        return f.name.toLowerCase().indexOf(expectedString.toLowerCase()) === 0;
      });
      return returnValue;
    }
  }

  checksumMatched = ( fileItem ) => {
    return fileItem.checksum === fileItem.eTag;
  }

  refreshAllElements = () => {
    this.allElements = [];
    if ( this.data.kit ) {
      const aMap = this.data.kit.mutagenizedFiles;
      this.allElements = _.union(aMap, this.rogueItems);
    } else {
      const fullMap = _.flatMapDeep( this.data.allKits, function(ak) {
        return ak.mutagenizedFiles;
      });
      this.allElements = _.union(fullMap, this.rogueItems);
    }
    this.allElements = _.sortBy(this.allElements, ['name']);
    // this.allElements.forEach( f => { console.log( `${f.eTag} <<>> ${f.checksum}`); });
  }

  getLabIdFromAllKits = (kitId: String) => {
    if ( this.data.kit && this.data.kit.kitId === kitId ) {
      return this.data.kit.capNumber;
    } else if ( this.data.allKits.filter(k => k.kitId === kitId).length > 0 ) {
      return this.data.allKits.filter(k => k.kitId === kitId)[0].capNumber;
    } else {
      return null;
    }
  }

  getMailingIdFromAllKits = (kitId: String) => {
    if ( this.data.kit && this.data.kit.kitId === kitId ) {
      return this.data.mailingId;
    } else if ( this.data.allKits.filter(k => k.kitId === kitId).length > 0 ) {
      return this.data.mailingId;
    } else {
      return null;
    }
  }
}
