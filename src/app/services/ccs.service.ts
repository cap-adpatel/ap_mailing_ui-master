import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AppConfig} from '../config/app-config';
import {FileItem} from '../classes/file-item';
import * as AWS from 'aws-sdk';
import * as _ from 'lodash';
import {SystemMaintenance} from '../auth/store/actions/auth.actions';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../auth/store/app.states';

@Injectable({
  providedIn: 'root'
})
export class CcsService {

  ccs = AppConfig.settings.apiServer.ccs;

  ccsSearchUrl = `${this.ccs.ccsHost}${this.ccs.searchUrl}`;
  fileUrl = `${this.ccs.ccsHost}${this.ccs.fileUrl}`;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  getFileList(mailingId: string): Observable<FileItem[]> {
    const queryArray = [];
    const mObj = {
      field_name: 'insilico.mailingId',
      field_value: mailingId
    };
    queryArray.push(mObj);
    const searchQuery = {
      queryFields: queryArray,
      queryOperation: 'AND',
      subQueries: [],
      queryType: 'SIMPLE'
    };

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('AppContext', this.ccs.appContext)
      .set('Action', 'search')
    ;
    return this.http.post<any>(this.ccsSearchUrl, searchQuery, {headers})
      .map( payload => {
      let fileList = [];
      const results = payload.response.hits ? payload.response.hits.hits : null;
      const idx = 0;
      if ( results ) {
        results.forEach(src => {
          const d = src._source;
          const key = src._source.key;
          const fi = new FileItem();
          fi.name = d.fileName;
          fi.key = key;
          fi.size = parseInt(d.size, 10);
          fi.received = d.lastModified;
          fi.uploadType = d.insilico.uploadType;
          fi.eTag = d.eTag;
          fi.checksum = d.insilico.size;
          fi.labId = d.insilico.labId;
          fi.kitId = d.insilico.kitId;
          fi.mailingId = d.insilico.mailingId;
          fi.version = d.insilico.version ? parseInt(d.insilico.version, 10) : 1;
          fileList.push(fi);
        });
      }
      fileList = _.sortBy(fileList, ['name']);
      return fileList;
    });
  }

  getFile(fileName: string): Observable<FileItem> {

    const queryArray = [];
    const mObj = {
      field_name: 'fileName',
      field_value: fileName
    };
    queryArray.push(mObj);
    const searchQuery = {
      queryFields: queryArray,
      queryOperation: 'AND',
      subQueries: [],
      queryType: 'SIMPLE'
    };
    const headers = new HttpHeaders()
      .set('AppContext', this.ccs.appContext)
      .set('Action', 'search')
    ;
    return this.http.post<any>(this.ccsSearchUrl, searchQuery, { headers })
      .map( payload => {
      const fileList = [];
      const results = payload.response.hits ? payload.response.hits.hits : null;
      if ( results ) {
        results.forEach(src => {
          const d = src._source;
          const key = src._source.key;
          const fi = new FileItem();
          fi.name = d.fileName;
          fi.key = key;
          fi.size = parseInt(d.size, 10);
          fi.received = d.lastModified;
          fi.eTag = d.eTag;
          fi.checksum = d.insilico.size;
          fi.uploadType = d.insilico.uploadType;
          fi.labId = d.insilico.labId;
          fi.kitId = d.insilico.kitId;
          fi.mailingId = d.insilico.mailingId;
          fi.version = d.insilico.version ? parseInt(d.insilico.version, 10) : 1;
          fileList.push(fi);
        });
      }
      return fileList[0];
    });
  }

  deleteFile( labId: string, key: string ): Observable<any> {
    const headers = new HttpHeaders()
      .set('AppContext', this.ccs.appContext)
      .set('LabContext', labId)
      .set('ContentKey', key)
      .set('Action', 'delete')
    ;
    return this.http.delete(this.fileUrl, { headers })
      .pipe(
        tap(rsp => console.log('delete completed')),
        catchError(this.handleError<any>('delete failed'))
      );
  }

  getDownloadUrl( key: string, fileName: string ): Observable<any> {
    const headers = new HttpHeaders()
      .set('AppContext', this.ccs.appContext)
      .set('ContentKey', key)
      // .set('ContentDisposition', `attachment; ${fileName}`)
      .set('Action', 'download')
    ;
    return this.http.get(this.fileUrl, { headers });
  }

  getS3Client(details) {
      const region = 'us-east-1';
      const creds = new AWS.Credentials(details.body);
      AWS.config.httpOptions = { timeout: 4800000 };
      AWS.config.update({
        credentials: creds,
        region: region
      });
      return new AWS.S3();
  }

  getSessionToken(): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders()
      .set('AppContext', this.ccs.appContext)
      .set('Action', 'upload')
    ;
    return this.http.post<any>(this.fileUrl, null, { headers, observe: 'response'} )
      .pipe(
        tap(response => console.log('response', response)),
        catchError(this.handleError<any>('updateAuditLog failed'))
      );
  }

  public handleError<T>(operation: string) {
    return (error: any): Observable<T> => {
      console.log('error occurred ', error);
      this.store.dispatch(new SystemMaintenance());
      return error;
    };
  }


}
