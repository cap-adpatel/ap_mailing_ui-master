import {Injectable} from '@angular/core';
import {InsilicoService} from '../../services/insilico.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MailingDetails} from '../../classes/mailing-details';
import {catchError, map, tap} from 'rxjs/operators';
import {AuditUpdate} from '../../classes/audit-update';
import {Store} from '@ngrx/store';
import {AppState} from '../../auth/store/app.states';

@Injectable({
  providedIn: 'root'
})
export class PtAdminService extends InsilicoService {

  constructor(
    public http: HttpClient, public store: Store<AppState>
  ) {
    super(http, store);
  }

  getMailingDetails(mailingId: string): Observable<MailingDetails> {
    const aUrl = `${this.mailingDetailsUrl}/${mailingId}`;
    return this.http.get<MailingDetails>(aUrl, {
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

  provideMailingApproval(mailingId: string, auditUpdate: AuditUpdate): Observable<HttpResponse<any>> {
    const aUrl = `${this.mailingDetailsUrl}/${mailingId}/history`;
    return this.http.post(aUrl, auditUpdate, {
      responseType: 'text',
      observe: 'response'} )
      .pipe(
        tap(response => console.log('response', response))
      );
  }
}
