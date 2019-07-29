import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserInfo} from '../models/user-info';
import {CapUser} from '../models/cap-user';
import {AppConfig} from '../../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  env = null;

  constructor(
    public http: HttpClient
  ) {
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUserInfo(access_token): Observable<UserInfo> {
      this.env = AppConfig.settings.apiServer.authDetails;
      const meUrl = this.env.securityRemoteHost + this.env.userInfoUrl;
      return this.http.get<CapUser>(meUrl, {
        headers: {
          'Content-Type': 'application/json'
        }}).map(res => {
          return <UserInfo> {
            username: res.UserName,
            firstName: res.FirstName,
            lastName: res.LastName,
            userCapNumber: res.UserMemberId,
            isLoggedIn: true,
          };
      });
  }

  // getTokenFromSaml(): Observable<any> {
  //   const url = this.evn.tokenFromSamlUrl;
  //   return this.http.post<any>(url, null, {
  //     withCredentials: true
  //   });
  // }
}
