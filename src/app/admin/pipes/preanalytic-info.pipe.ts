import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import moment from 'moment';
import * as _ from 'lodash';

@Pipe({
  name: 'preanalyticInfo'
})
export class PreanalyticInfoPipe implements PipeTransform {

  PREANALYTIC_UNSTARTED = 'X';
  PREANALYTIC_INCOMPLETE = '0';
  PREANALYTIC_COMPLETE = '1';

  preanalyticStatus = null;

  constructor(private sanitized: DomSanitizer) {}

  transform(kitStatus: any, args?: any): any {
    // get only the preanlaytic insilico related audit records
    let lastUpdateDate = '';
    let auditOccurrences = kitStatus.kitHistory
      .filter(h => h.relativePageNumber === '0' && (h.pageStatusCode === '0' || h.pageStatusCode === '1'))
      .map(h => {
        return {
          pageStatusCode: h.pageStatusCode,
          actionDate: h.actionDate
        };
      });

    if (auditOccurrences === null || auditOccurrences.length === 0) {
      this.preanalyticStatus = this.PREANALYTIC_UNSTARTED;
    } else {
      // sort so first insilico-related
      auditOccurrences = _.sortBy( auditOccurrences, ['actionDate']);
      const lastStatusCode = auditOccurrences[auditOccurrences.length - 1].pageStatusCode;
      if (lastStatusCode === this.PREANALYTIC_INCOMPLETE) {
        this.preanalyticStatus = this.PREANALYTIC_INCOMPLETE;
        lastUpdateDate = auditOccurrences[auditOccurrences.length - 1].actionDate;
      } else if (lastStatusCode === this.PREANALYTIC_COMPLETE) {
        this.preanalyticStatus = this.PREANALYTIC_COMPLETE;
        lastUpdateDate = auditOccurrences[auditOccurrences.length - 1].actionDate;
      } else {
        this.preanalyticStatus = this.PREANALYTIC_UNSTARTED;
      }
    }


    if (this.preanalyticStatus === this.PREANALYTIC_COMPLETE) {
      const formattedDate = moment(lastUpdateDate, 'YYYY-MM-DD').format('M/D/YYYY');
      return this.sanitized.bypassSecurityTrustHtml(`
          <div style="float:left;text-align:left;width:60%;">Complete</div>
          <div style="float:left;text-align:center;width:40%;">${formattedDate}</div>
      `);
    } else if (this.preanalyticStatus === this.PREANALYTIC_INCOMPLETE) {
      const formattedDate = moment(lastUpdateDate, 'YYYY-MM-DD').format('M/D/YYYY');
      return this.sanitized.bypassSecurityTrustHtml(`
              <div style="float:left;text-align:left;width:60%;color:red;">Incomplete</div>
              <div style="float:left;text-align:center;width:40%;">${formattedDate}</div>
          `);
    } else {
      return this.sanitized.bypassSecurityTrustHtml(
        '<div style="color:red;"></div>'
      );
    }
  }
}
