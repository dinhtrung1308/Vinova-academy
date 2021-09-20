import produce from 'immer';
import {
  SET_SUCCESS_TOP_ALERT,
  SET_ERROR_TOP_ALERT,
  SET_CLOSE_TOP_ALERT,
} from './actionTypes';

export interface globalState {
  isOpenTopAlert: string;
  isLoading: boolean;
}

const initial: globalState = {
  isOpenTopAlert: 'not',
  isLoading: false,
};

export const globalReducer = (state = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SUCCESS_TOP_ALERT: {
        draft['isOpenTopAlert'] = 'success';
        break;
      }
      case SET_ERROR_TOP_ALERT: {
        draft['isOpenTopAlert'] = 'error';
        break;
      }
      case SET_CLOSE_TOP_ALERT: {
        draft['isOpenTopAlert'] = 'not';
        break;
      }
    }
  });
export default {
  globalReducer,
};
