export interface IAppConfig {
  env: {
    name: string;
    logoFile: string;
  };
  appInsights: {
    instrumentationKey: string;
  };
  logging: {
    console: boolean;
    appInsights: boolean;
  };
  aad: {
    requireAuth: boolean;
    tenant: string;
    clientId: string;
  };
  apiServer: {
    details: any;
    authDetails: any;
    authGuard: any;
    clientId: any;
    applicationSource: string;
    routes: any;
    ccs: any;
    logoutUrl: any;
  };
}
