import { all } from 'redux-saga/effects';
import handleLoginByUsername from './loginRequest'

export const authenSaga = function* root() {
  yield all([handleLoginByUsername()]);
};
