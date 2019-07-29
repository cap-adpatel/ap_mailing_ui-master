import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {AppConfig} from '../config/app-config';
import {AuditUpdate} from '../classes/audit-update';
import {MailingOverview} from '../classes/mailing-overview';
import {SystemMaintenance} from '../auth/store/actions/auth.actions';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../auth/store/app.states';

@Injectable({
  providedIn: 'root'
})
export class InsilicoService {

  remoteHost = AppConfig.settings.apiServer.details.remoteHost;
  programUrl = `${this.remoteHost}${AppConfig.settings.apiServer.details.programUrl}`;
  summaryUrl = `${this.remoteHost}${AppConfig.settings.apiServer.details.summaryUrl}`;
  mailingDetailsUrl = `${this.remoteHost}${AppConfig.settings.apiServer.details.mailingDetailsUrl}`;
  kitAuditUrl = `${this.remoteHost}${AppConfig.settings.apiServer.details.auditUpdateUrl}`;

  model = {};

  constructor(
    public http: HttpClient, public store: Store<AppState>
  ) {
  }

  getProgramList(): Observable<MailingOverview[]> {
    return this.http.get<any>(this.programUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .pipe(map(response => {
          return response;
        }),
        catchError(this.handleError<any>('inspections retrieval failed'))
      );
  }

  getSummaryList(mailingId: string): Observable<any> {
    const aUrl = `${this.summaryUrl}/${mailingId}/kits/summary`;
    return this.http.get<any>(aUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .pipe(map(response => {
          return response;
        }),
        catchError(this.handleError<any>('inspections retrieval failed'))
      );
  }

  getCSVPreanalytics(mailingId: string): Observable<any> {
    const aUrl = `${this.summaryUrl}/${mailingId}/kits/preanalyticsvfile`;
    return this.http.get(aUrl, {responseType: 'text',
      observe: 'response'})
      .pipe(
        tap(
          response => {

              const fileName = mailingId + '.csv';
              const csvData = new Blob([response.body], {
                type: 'text/csv'
              });

              if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
                window.navigator.msSaveOrOpenBlob(csvData, fileName);
              } else { // for Non-IE (chrome, firefox etc.)
                const fileURL = URL.createObjectURL(csvData);
                const a = document.createElement('a');
                a.href = fileURL;
                a.target = '_blank';
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }
          },
          catchError(this.handleError<any>('download failed for' + aUrl))
        )
      );
  }

  updateAuditLog(kitId: string, auditUpdate: AuditUpdate): Observable<HttpResponse<any>> {
    const aUrl = `${this.kitAuditUrl}/${kitId}/history`;
    return this.http.post(aUrl, auditUpdate, {
      responseType: 'text',
      observe: 'response'} )
      .pipe(
        tap(response => console.log('response', response)),
        catchError(this.handleError<any>('updateAuditLog failed'))
      );
  }

  public handleError<T>(operation: string) {
    return (error: any): Observable<T> => {
      console.log('error occurred', error);
      this.store.dispatch(new SystemMaintenance());
      return error;
    };
  }

}
