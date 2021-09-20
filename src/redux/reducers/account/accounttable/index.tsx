import produce from 'immer';
import { IData, IAccountTableState } from 'models/Accounts'
import { SET_ACCOUNTS } from './actionTypes';

const initialAccountTable = {
  accounts : undefined,
  loading: true
};

export const accountTableReducer = (state = initialAccountTable, action) =>
  produce(state, draft => {
    switch (action.type) {
      
      case SET_ACCOUNTS: {
        draft['accounts'] = action.payload;
        draft['loading'] = false;
        break;
      }
      
      default: {
        break;
      }
    }
  });

