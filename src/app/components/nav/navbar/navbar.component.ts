import {Component, OnInit} from '@angular/core';
import {AppState, selectAuthState} from '../../../auth/store/app.states';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {AppConfig} from '../../../config/app-config';
import {Logout} from '../../../auth/store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  env = AppConfig.settings.env;

  isAuthenticated = false;
  userInfo = null;
  getState: Observable<any>;
  imagePath = null;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.userInfo = state.userInfo;
    });
    this.imagePath = environment.assetsPath + this.env.logoFile;
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
