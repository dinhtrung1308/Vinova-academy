import { all } from 'redux-saga/effects';
import content from './content'

export const itestSaga = function* root() {
  yield all([content()]);
};
