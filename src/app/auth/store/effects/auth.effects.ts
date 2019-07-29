import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../../../config/app-config';

import {tap} from 'rxjs/operators';

import {AuthActionTypes} from '../actions/auth.actions';

import {AuthService} from '../../services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect({ dispatch: false })
  public ClearStore: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.CLEAR_STORE),
    tap((user) => {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    })
  );

  @Effect({ dispatch: false })
  public Logout: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      window.location.href = AppConfig.settings.apiServer.logoutUrl;
    })
  );

  @Effect({ dispatch: false })
  InvalidAccessTokenError: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.INVALID_ACCESS_TOKEN),
    tap((dest) => {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      if (dest.payload) {
        this.router.navigateByUrl(dest.payload);
      }
    })
  );

  @Effect({ dispatch: false })
  UserNotAuthorizedAction: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.USER_NOT_AUTHORIZED),
    tap(() => {
      this.router.navigateByUrl(AppConfig.settings.apiServer.routes.dest403);
    })
  );

  @Effect({ dispatch: false })
  SystemMaintenanceAction: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SYSTEM_MAINTENANCE),
    tap(() => {
      this.router.navigateByUrl(AppConfig.settings.apiServer.routes.dest400);
    })
  );

  @Effect({ dispatch: false })
  SsoSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SSO_SUCCESS),
    tap((val) => {
      localStorage.setItem('token', val.payload.token);
      // this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  UserIsTeamMember: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.USER_IS_TEAM_MEMBER),
    tap((val) => {
      localStorage.setItem('isTeamMemberAccess', val.payload);
    })
  );

  @Effect({ dispatch: false })
  EnvEstablished: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.ENV_ESTABLISHED),
    tap((val) => {
      localStorage.setItem('env', JSON.stringify(val.payload.env));
    })
  );

  @Effect({ dispatch: false })
  GetUserInfoSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GET_USER_INFO_SUCCESS),
    tap((val) => {
      localStorage.setItem('userInfo', val.payload.userInfo);
    })
  );
}

