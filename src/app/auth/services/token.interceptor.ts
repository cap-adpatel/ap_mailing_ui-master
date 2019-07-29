import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import 'rxjs/add/operator/do';

import {Router} from '@angular/router';

import * as uuidv4 from 'uuid/v4';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.states';
import {InvalidAccessTokenError, SystemMaintenance, UserNotAuthorizedAction} from '../store/actions/auth.actions';
import {AppConfig} from '../../config/app-config';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('.json') === -1) {
      const token: string = localStorage.getItem('token');
      const clientId = AppConfig.settings.apiServer.clientId;
      const ccsClientId = AppConfig.settings.apiServer.ccs.appContext;
      const auditHeaderInfo = {
        application_source: AppConfig.settings.apiServer.applicationSource
      };

      const ccsActionType = request.headers.get('Action');
      const isCcsRequest = (ccsActionType &&  (
          ccsActionType === 'search' ||
          ccsActionType === 'download' ||
          ccsActionType === 'upload' ||
          ccsActionType === 'delete'
        )
      );

      if ( request.url.indexOf('userInfo') > 0 ) {
        request = request.clone({
          headers: request.headers
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
        });
      } else if ( isCcsRequest ) {
          request = request.clone({
            headers: request.headers
              .set('Content-Type', 'application/json')
              .set('Authorization', `Bearer ${token}`)
              .set('AppContext', ccsClientId)
          });
      } else {
        request = request.clone({
          headers: request.headers
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .set('caporg-correlation-id', uuidv4())
            .set('caporg-client-id', clientId.id)
            .set('caporg-client-secret', clientId.secret)
            .set('caporg-audit', JSON.stringify(auditHeaderInfo))
            .set('app-context', ccsClientId)
        });
      }
    }
    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private store: Store<AppState>) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .catch((response: any) => {
        if (response.status === 0 ) {
          console.log('Received status ' + response.status + ', letting component handle');
        } else if ( !(response.status === 404 && (response._body)) ) {
          if (response.status === 401) {
            console.log('Received status ' + response.status + ', forcing the user to log back in');
            const token: string = localStorage.getItem('token');
            this.store.dispatch(new InvalidAccessTokenError(this.cleanUrl(this.router.url, token)));
          } else if (response.status === 403) {
            console.log('Received status ' + response.status + ', forcing redirect to unauthorized page');
            this.store.dispatch(new UserNotAuthorizedAction());
          } else {
            console.log('Received status ' + response.status + ', letting component handle');
          }
        }
        return throwError(response);
      });
  }
  cleanUrl(currentUrl: string, currentToken: string) {
    const aNewUrl = currentUrl.replace(new RegExp('.access_token=' + currentToken), '');
    return aNewUrl;
  }
}
