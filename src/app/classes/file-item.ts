import {Subscription} from 'rxjs';

export class FileItem {
  key: string;
  name: string;
  data: File;
  received: Date;
  size: number;
  validForUpload = false;
  version = 1;
  uploadType: string;
  canCancel: boolean;
  progress: number;
  speed: any;
  isValid: boolean;
  fileMessage: string;
  sub?: Subscription;
  labId: string;
  kitId: string;
  mailingId: string;
  mailingItemId: string;
  uploadStartTime: number;
  removeLink: string;
  checkedForDownload = false;
  eTag: string;
  checksum: any;
  capSize: number;
  capEtag: string;
  capReceived: Date;
  verdict: string;
}
