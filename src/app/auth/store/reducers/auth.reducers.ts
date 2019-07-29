import {Env} from '../../models/env';
import {UserInfo} from '../../models/user-info';
import {All, AuthActionTypes} from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  isTeamMemberAccess: boolean;
  userInfo: UserInfo | null;
  env: Env | null;
  token: string | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  isTeamMemberAccess: false,
  userInfo: null,
  env: null,
  token: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.SSO_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        errorMessage: null
      };
    }
    case AuthActionTypes.GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload.userInfo,
        errorMessage: null
      };
    }
    case AuthActionTypes.ENV_ESTABLISHED: {
      return {
        ...state,
        env: action.payload.env,
        errorMessage: null
      };
    }
    case AuthActionTypes.INVALID_ACCESS_TOKEN: {
      return initialState;
    }
    case AuthActionTypes.USER_NOT_AUTHORIZED: {
      return {
        ...state,
        errorMessage: 'User attempting to access unauthorized service.'
      };
    }
    case AuthActionTypes.USER_IS_TEAM_MEMBER: {
      return {
        ...state,
        isTeamMemberAccess: action.payload
      };
    }
    case AuthActionTypes.CLEAR_STORE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
