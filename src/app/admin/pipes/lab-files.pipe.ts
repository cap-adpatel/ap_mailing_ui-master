import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from '../../classes/file-item';
import {DomSanitizer} from '@angular/platform-browser';
import moment from 'moment';

@Pipe({
  name: 'labFiles'
})
export class LabFilesPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(files: FileItem[], args?: any): any {
    if (files && files.length > 0) {
      const fileCount = files.length;
      const lastUploadDate = files.map(function (e) {
        return e.received;
      }).sort().reverse()[0];
      const formattedDate = moment(lastUploadDate, 'YYYY-MM-DD').format('M/D/YYYY');
      const bedCount = files.filter( f => f.name.toLowerCase().endsWith('.bed') ).length;
      const hasBed = bedCount > 0;
      const hasStarterFiles = (files.length - bedCount) > 0;

      let uploadVerdict = '<div style="float:left;text-align:left;width:43%;">Received</div>';
      if ( !hasBed ) {
        uploadVerdict = '<div style="float:left;text-align:left;width:43%;color:red">Incomplete<br/><i>* No .bed</i></div>';
      } else if ( !hasStarterFiles ) {
        uploadVerdict = '<div style="float:left;text-align:left;width:43%;color:red">Incomplete</div>';
      }
      return this.sanitized.bypassSecurityTrustHtml(`
          ${uploadVerdict}
          <div style="float:left;text-align:center;width:47%;">${formattedDate}</div>
          <div style="float:right;text-align:center;width:10%;">${fileCount}</div>
      `);
    } else {
      return '';
    }
  }
}
