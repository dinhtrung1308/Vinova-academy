import { SET_ACCOUNTS, GET_ACCOUNTS } from './actionTypes';
//import { IData } from 'models/Accounts';

export const setAccounts = (data) => {
  return {
    type: SET_ACCOUNTS,
    payload: data
  }
}

export const getAccounts = () => {
  return {
    type: GET_ACCOUNTS,
  }
}
