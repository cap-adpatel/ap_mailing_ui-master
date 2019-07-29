import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from '../classes/file-item';

@Pipe({
  name: 'filesLastVersion'
})
export class FilesLastVersionPipe implements PipeTransform {

  transform(files: FileItem[], args?: any): any {
    if (files && files.length > 0) {
      const vNumber = files.map(function (e) {
        return e.version;
      }).sort().reverse()[0];
      return `Ver ${vNumber}, `;
    } else {
      return '';
    }
  }
}
