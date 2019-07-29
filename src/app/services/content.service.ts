import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadContentFile = (): Observable<any> => {
    const constantsUrl = `${environment.assetsPath}assets/content.json`;
    return this.http.get(constantsUrl);
  }
}

