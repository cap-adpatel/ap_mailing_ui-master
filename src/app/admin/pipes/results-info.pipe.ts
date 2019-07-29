import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'resultsInfo'
})
export class ResultsInfoPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(kitStatus: any, args?: any): any {
    if (kitStatus.kitStatusIndicator === 'R') {
      const lastSubmissionDate = kitStatus
        .kitHistory.map(h => h.actionDate)
        .sort().reverse()[0];

      return this.sanitized.bypassSecurityTrustHtml(`
          <div style="float:left;text-align:left;width:60%;">Received</div>
          <div style="float:left;text-align:center;width:40%;">${new Date(lastSubmissionDate).toLocaleDateString()}</div>
      `);
    } else {
      return '';
    }
  }

}
