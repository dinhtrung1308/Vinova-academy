import { takeLatest } from 'redux-saga/effects';
import handleGetCourses from './getCoursesRequest';
import { GET_COURSES } from '../../reducers/courses/actionTypes';


export function* getCoursesSaga(){
  yield takeLatest( GET_COURSES, handleGetCourses );
};
