import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from '../classes/file-item';

@Pipe({
  name: 'filesSizeSum'
})
export class FilesSizeSum implements PipeTransform {

  transform(files: FileItem[], args?: any): any {
    let totalSize = 0;
    files.forEach(f => totalSize += f.size);
    return totalSize;
  }
}
