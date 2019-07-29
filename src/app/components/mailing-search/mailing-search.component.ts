import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {InsilicoService} from '../../services/insilico.service';
import {ContentService} from '../../services/content.service';
import {MailingOverview} from '../../classes/mailing-overview';

@Component({
  selector: 'app-mailing-search',
  templateUrl: './mailing-search.component.html',
  styleUrls: ['./mailing-search.component.css']
})
export class MailingSearchComponent implements OnInit {

  @Output() mailingSelected = new EventEmitter<MailingOverview>();
  @Output() kitEntered = new EventEmitter<string>();

  content: null;
  contentGroupId: null;
  programs = null;

  capNumberFilter = new FormControl('');

  constructor(
    private contentService: ContentService,
    private insilicoService: InsilicoService,
    private elementRef: ElementRef,
  ) {
    this.contentGroupId = elementRef.nativeElement.tagName.toLowerCase();
  }

  ngOnInit() {
    this.loadContent();
    this.loadPrograms();
    this.capNumberFilter.valueChanges
      .subscribe(
        name => {
          this.kitEntered.emit(name);
        }
      );
  }

  selectMailing = (event) => {
    const selectedMailing = this.programs.filter( p => p.mailingId === event.value );
    this.mailingSelected.emit(selectedMailing[0]);
  };

  // selectMailing = (event) => {
  //   this.mailingSelected.emit(event.value.target);
  // };

  private loadPrograms = () => {
    this.insilicoService.getProgramList()
      .subscribe(
        (resp) => {
          this.programs = resp;
        });
  };

  private loadContent = () => {
    this.contentService.loadContentFile()
      .subscribe(
        (resp) => {
          this.content = resp['app-mailing-search'];
        });
  }

}
