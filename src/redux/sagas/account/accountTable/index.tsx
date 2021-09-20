import { takeLatest } from 'redux-saga/effects';
import handleGetAccounts from './getAccountsRequest';
import { GET_ACCOUNTS } from 'redux/reducers/account/accounttable/actionTypes';


export function* getAccountsSaga(){
  yield takeLatest( GET_ACCOUNTS, handleGetAccounts );
};
