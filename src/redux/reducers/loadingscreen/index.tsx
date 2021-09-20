import produce from 'immer';
import {
  SHOW_LOADING_SCREEN,
  HIDE_LOADING_SCREEN
} from './actionTypes';

export interface loadingScreenState {
  isLoadingScreen: boolean;
}

const initial: loadingScreenState = {
  isLoadingScreen: false
};

export const loadingScreenReducer = (state = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_LOADING_SCREEN: {
        draft['isLoadingScreen'] = true;
        break;
      }
      case HIDE_LOADING_SCREEN: {
        draft['isLoadingScreen'] = false;
        break;
      }
    }
  });
export default {
  loadingScreenReducer,
};
