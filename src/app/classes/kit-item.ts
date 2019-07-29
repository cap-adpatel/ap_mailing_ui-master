import {FileItem} from './file-item';

export class KitItem {
  kitId: string;
  starterFiles: [FileItem];
  mutagenizedFiles: [FileItem];
  filesLastUpdated: Date;
  mutagenizedLastUpdated: Date;
}
