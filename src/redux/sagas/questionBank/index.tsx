import { all } from 'redux-saga/effects';
import handleQuestionRequest from './quesRequest';

export const quesBankSaga = function* root() {
  yield all([handleQuestionRequest()]);
};
