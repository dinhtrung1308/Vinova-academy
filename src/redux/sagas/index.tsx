import { all } from 'redux-saga/effects';
import { authenSaga } from './authentication';
import {itestSaga} from './itest'
import { quesBankSaga } from './questionBank';
import { getAccountsSaga } from './account/accountTable';
import { handleUpdateCourse } from './createcourse'
import { getCoursesSaga } from './courses';
import { sharingsSaga } from './sharings';


export const rootSaga = function* root() {
  yield all([
    getCoursesSaga(),
    getAccountsSaga(),
    authenSaga(),
    itestSaga(),
    quesBankSaga(),
		handleUpdateCourse(),
    sharingsSaga(),
  ]);
}
