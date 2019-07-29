import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from '../../classes/file-item';
import {DomSanitizer} from '@angular/platform-browser';
import moment from 'moment';

@Pipe({
  name: 'vendorFiles'
})
export class VendorFilesPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(files: FileItem[], starterCount): any {
    if (files && files.length > 0) {
      const fileCount = files.length;
      const lastUploadDate = files.map(function (e) {
        return e.received;
      }).sort().reverse()[0];
      const formattedDate = moment(lastUploadDate, 'YYYY-MM-DD').format('M/D/YYYY');

      const processedDiv =  files.length < (starterCount - 1) ?
        '<div style="float:left;text-align:left;width:43%;color:red">Incomplete</div>'
        : '<div style="float:left;text-align:left;width:43%;">Processed</div>';

      return this.sanitized.bypassSecurityTrustHtml(`
          ${processedDiv}
          <div style="float:left;text-align:center;width:47%;">${formattedDate}</div>
          <div style="float:right;text-align:center;width:10%;">${fileCount}</div>
      `);



    } else {
      return '';
    }
  }

}
