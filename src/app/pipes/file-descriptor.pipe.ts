import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from '../classes/file-item';

@Pipe({
  name: 'fileDescriptor'
})
export class FileDescriptorPipe implements PipeTransform {

  transform(fileItem: FileItem, args?: any): any {
    return `${fileItem.name}`;
  }
}
