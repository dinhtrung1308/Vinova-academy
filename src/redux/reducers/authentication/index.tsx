import produce from 'immer';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT
} from './actionTypes';
// import { otpToken, initOtpToken } from 'models/authentication';

export interface authenticationType {
  clientCode: string,
  profile: {
    id: string,
    is_admin: boolean,
    status: string,
  }
}

const initial: authenticationType = {
  clientCode: '',
  profile: {
    id: '',
    is_admin: false,
    status: ''
  }
};

export const authenticationReducer = (state = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      // case LOGIN_REQUEST: {
      //   draft['clientCode'] = action.clientCode;
      //   break;
      // }
      //////
      case LOGIN_SUCCESS: {
        draft['clientCode'] = action.clientCode;
        draft['profile'].id = action.profile.id;
        draft['profile'].is_admin = action.profile.is_admin;
        draft['profile'].status = action.profile.status;
        break;
      }

      case LOGIN_FAILED: {
        console.log('failed')
        draft['clientCode'] = action.clientCode;
        draft['profile'].id = '';
        draft['profile'].is_admin = false;
        draft['profile'].status = '';
        break;
      }

      case LOGOUT: {
        draft['clientCode'] = '';
        draft['profile'].id = '';
        draft['profile'].is_admin = false;
        draft['profile'].status = '';
        break;
      }

      default: {
        break;
      }
      //////

    }
  });

