import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppConfig} from './models/iapp-config';
import {AppState} from '../auth/store/app.states';
import {Store} from '@ngrx/store';
import {environment} from '../../environments/environment';

@Injectable()
export class AppConfig {

  static settings: IAppConfig;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  async load() {

    const loc = window.location.href;
    const env = this.findEnvironment(loc);
    const jsonFile = `${environment.assetsPath}assets/env/env.${env}.json`;

    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
        AppConfig.settings = <IAppConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }




  findEnvironment( currentLocation: any ) {
    let env: any;
    switch (true) {
      case  currentLocation.includes('/localhost'):
        env = 'local';
        break;
      case  currentLocation.includes('/capdev'):
        env = 'dev';
        break;
      case  currentLocation.includes('/captst'):
        env = 'tst';
        break;
      case  currentLocation.includes('/vendoradminuat'):
        env = 'uat';
        break;
      case  currentLocation.includes('/d3kduugrn96pul'):
        env = 'uat';
        break;
      case  currentLocation.includes('/d1gkfegf3fl9m'):
        env = 'uatx';
        break;
      case  currentLocation.includes('/capuat'):
        env = 'uat';
        break;
      case  currentLocation.includes('/capsup'):
        env = 'sup';
        break;
      default:
        env = 'prd';
        break;
    }
    return env;
  }
}
