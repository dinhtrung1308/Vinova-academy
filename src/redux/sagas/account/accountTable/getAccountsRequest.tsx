import { call, put } from 'redux-saga/effects';
import { setAccounts } from 'redux/reducers/account/accounttable/accountsActions';
import axios from 'axios';


export function requestAccounts() {
  return axios.request({
      method: 'get',
      url: 'https://my-json-server.typicode.com/phuoctran92/demo/accounts'
      //url: 'https://vinova-academy.herokuapp.com/v1/user/'
  });
}

export default function* handleGetAccounts(action) {
  try {
    const response = yield call(requestAccounts);
    const { data } = response;
    yield put(setAccounts(data))
  } catch (error) {
    console.log(error);
  }
} 

