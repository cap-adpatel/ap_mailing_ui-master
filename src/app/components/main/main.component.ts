import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InsilicoService} from '../../services/insilico.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  programs = null;
  summaryList = null;

  constructor(
    private insilicoService: InsilicoService
  ) {
  }

  ngOnInit() {
  }


}
