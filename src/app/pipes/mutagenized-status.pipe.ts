import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'mutagenizedStatus'
})
export class MutagenizedStatusPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(kit: any, args?: any): any {
    if ( kit.mutagenizedFiles && kit.mutagenizedFiles.length > 0 ) {
      let processedDiv = `<span>${kit.mutagenizedFiles.length} File(s), </span> `;
      if ( kit.mutagenizedFiles.length > 0 && (kit.mutagenizedFiles.length < (kit.starterFiles.length - 1)) ) {
        processedDiv = `<span style="color:red">${kit.mutagenizedFiles.length} File(s), </span>`;
      }
      return this.sanitized.bypassSecurityTrustHtml(`${processedDiv}`);
    } else {
      return '';
    }
  }
}
