import { all } from 'redux-saga/effects';
import handleShaRequest from './sharingsRequest';

export const sharingsSaga = function* root() {
  yield all([handleShaRequest()]);
};