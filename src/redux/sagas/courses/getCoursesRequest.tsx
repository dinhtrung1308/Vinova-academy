import { call, put } from 'redux-saga/effects';
import { setCourses } from '../../reducers/courses/coursesActions';
import { getAllCourses } from 'services/showCourses/getCoursesAPI';

export default function* handleGetCourses(action) {
  try {
    const response = yield call(getAllCourses);
    
    const data = response.result;
    yield put(setCourses(data))
  } catch (error) {
    console.log(error);
  }
} 

