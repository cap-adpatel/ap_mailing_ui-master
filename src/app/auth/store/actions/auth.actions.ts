import {Action} from '@ngrx/store';

export enum AuthActionTypes {
  CLEAR_STORE = '[Auth] Clear Store',
  CLEAR_MESSAGE = '[Auth] Clear Error Message',
  SSO_SUCCESS = '[Auth] Sso Success',
  ENV_ESTABLISHED = 'Environment Established',
  GET_USER_INFO_SUCCESS = '[Auth] User Info Success',
  INVALID_ACCESS_TOKEN = '[Auth] Invalid Access Token',
  USER_NOT_AUTHORIZED = '[Auth] User Not Authorized',
  USER_IS_TEAM_MEMBER = 'User is Team Member',
  SYSTEM_MAINTENANCE = 'System Maintenance',
  LOGOUT = 'Log out'
}

export class SsoSuccess implements Action {
  readonly type = AuthActionTypes.SSO_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserInfoSuccess implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: any) {}
}

export class InvalidAccessTokenError implements Action {
  readonly type = AuthActionTypes.INVALID_ACCESS_TOKEN;
  constructor(public payload: any) {}
}

export class UserNotAuthorizedAction implements Action {
  readonly type = AuthActionTypes.USER_NOT_AUTHORIZED;
}

export class UserIsTeamMember implements Action {
  readonly type = AuthActionTypes.USER_IS_TEAM_MEMBER;
  constructor(public payload: any) {}
}

export class EnvEstablished implements Action {
  readonly type = AuthActionTypes.ENV_ESTABLISHED;
  constructor(public payload: any) {}
}

export class SystemMaintenance implements Action {
  readonly type = AuthActionTypes.SYSTEM_MAINTENANCE;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class ClearStore implements Action {
  readonly type = AuthActionTypes.CLEAR_STORE;
}

export type All =
  | SsoSuccess
  | GetUserInfoSuccess
  | InvalidAccessTokenError
  | UserNotAuthorizedAction
  | UserIsTeamMember
  | EnvEstablished
  | SystemMaintenance
  | Logout
  | ClearStore
  ;

