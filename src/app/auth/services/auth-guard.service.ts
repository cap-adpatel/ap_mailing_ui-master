import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GetUserInfoSuccess, SsoSuccess} from '../store/actions/auth.actions';
import {AppState, selectAuthState} from '../store/app.states';
import {AuthService} from './auth.service';
import {AppConfig} from '../../config/app-config';

@Injectable()
export class AuthGuardService implements CanActivate {

  getState: Observable<any>;

  constructor(
    private store: Store<AppState>,
    public router: Router,
    private authService: AuthService
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const actualUrl = window.location.href;
    if (actualUrl.indexOf('access_token') > -1) {
      const token = actualUrl.substring(actualUrl.indexOf('access_token') + 13);
      this.store.dispatch(new SsoSuccess({token: token}));
    }
    return this.getState.map(st => {
        const isAuthenticated = st.isAuthenticated;
        const userInfo = st.userInfo;
        const token = st.token;
        const errorMessage = st.errorMessage;
        if (isAuthenticated) {
          if ( !userInfo ) {
            this.authService.getUserInfo(localStorage.getItem('token'))
              .subscribe(
                (resp) => {
                  this.store.dispatch(new GetUserInfoSuccess({userInfo: resp}));
                });
          }
          return true;
        } else {
          console.log('User is not authenticated. Redirect to CAP login. Before redirect, we would like to query for token from saml.');
          /* Need to add some logic here to try to get token from saml to avoid the unnecessary redirect */
          // this.authService.getTokenFromSaml()
          //   .subscribe(
          //     (resp) => {
          //         console.log('resp', resp);
          //     });
          this.redirectToSsoLogin(window.location.origin + actualUrl);
          return false;
        }
      }
    );
  }

  redirectToSsoLogin = (targetUrl: string) => {
    const testUrl = window.location.href;
    console.log('targetUrl: ' + targetUrl);
    console.log('testUrl:   ' + testUrl);
    const env = AppConfig.settings.apiServer.authGuard;
    const ssoUrl = env.loginUrl + encodeURIComponent(testUrl);
    window.location.href = ssoUrl;
    return 'redirect';
  }
}
