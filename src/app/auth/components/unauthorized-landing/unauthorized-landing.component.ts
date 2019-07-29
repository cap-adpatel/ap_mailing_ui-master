import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState, selectAuthState} from '../../store/app.states';
import {Observable} from 'rxjs';
import {ContentService} from '../../../services/content.service';


@Component({
  selector: 'app-unauthorized-landing',
  templateUrl: './unauthorized-landing.component.html',
  styleUrls: ['./unauthorized-landing.component.css']
})
export class UnauthorizedLandingComponent implements OnInit {

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
          this.content = resp['app-unauthorized-landing'];
        });
  };

  returnHome = () => {
    this.router.navigateByUrl('/', {skipLocationChange: false});
  }
}
