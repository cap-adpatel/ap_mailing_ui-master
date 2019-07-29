import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from '../classes/file-item';
import moment from 'moment';

@Pipe({
  name: 'filesLastUpdate'
})
export class FilesLastUpdatePipe implements PipeTransform {

  transform(files: FileItem[], args?: any): any {
    const updateDate = files.map(function (e) {
      return e.received;
    }).sort().reverse()[0];

    if ( updateDate ) {
      return moment(updateDate, 'YYYY-MM-DD').format('M/D/YYYY');
    } else {
      return '';
    }

  }
}
