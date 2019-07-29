import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from '../classes/file-item';

@Pipe({
  name: 'filesCount'
})
export class FilesCountPipe implements PipeTransform {

  transform(files: FileItem[], args?: any): any {
    return files.length;
  }
}
