import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ContentService} from '../../../services/content.service';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../store/app.states';
import {Router} from '@angular/router';

@Component({
  selector: 'app-system-maintenance',
  templateUrl: './system-maintenance.component.html',
  styleUrls: ['./system-maintenance.component.css']
})
export class SystemMaintenanceComponent implements OnInit {

  content: null;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private contentService: ContentService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.loadContent();
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  private loadContent = () => {
    this.contentService.loadContentFile()
      .subscribe(
        (resp) => {
          this.content = resp['app-system-maintenance'];
        });
  };

  returnHome = () => {
    this.router.navigateByUrl('/', {skipLocationChange: false});
  }
}
