import {KitHistory} from './kit-history';
import {FileItem} from './file-item';

export class KitStatus {
  kitId: string;
  mailingId: string;
  capNumber: string;
  kitStatusIndicator: string;
  labStarterStatus: string;
  preanalyticRequiredCount: number;
  preanalyticSubmittedCount: number;
  kitHistory: [KitHistory];
  mutagenizedFiles: FileItem[];
  starterFiles: FileItem[];
  mailingItemId: string;
  preanalyticInfo: string;
  labFiles: string;
  vendorFiles: string;
  resultsInfo: string;
}
