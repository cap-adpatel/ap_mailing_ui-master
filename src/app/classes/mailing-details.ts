import {KitStatus} from './kit-status';
import {MailingPage} from './mailing-page';

export class MailingDetails {
  mailingId: string;
  mailingItemId: string;
  mailingEffectiveDate: Date;
  mailingDate: Date;
  actualMailingDate: Date;
  mailingShortDescription: string;
  mailingDescription: string;
  resultFormAvailabilityCode: string;
  fulfillmentGroupItemId: string;
  fulfillmentGroupName: string;
  dueDaysInterval: number;
  interimDueDaysInterval: number;
  kitStatuses: [KitStatus];
  pages: [MailingPage];
}




