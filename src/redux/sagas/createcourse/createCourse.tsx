import { takeLatest, call, put } from 'redux-saga/effects'
import {
	CREATE_COURSE_REQUEST,
	CREATE_COURSE_SUCCESS,
	CREATE_COURSE_FAILED,
} from '../../reducers/createcourse/actionTypes'
import { createcourse } from 'services/createcourse/createcourseApi'

function* CreateCourse(action) {
	try {
		const data = yield call(createcourse, action.payload);
		if (data) {
			yield put({
				type: CREATE_COURSE_SUCCESS,
				payload: action.payload,
			})
			alert('Successful create the course')
			console.log('create course success')
		}
	} catch (error) {
		yield put({
			type: CREATE_COURSE_FAILED,
			payload: action.payload,
		})
		console.log('create course failed')
	}
}

function* handleCreateCourse() {
	yield takeLatest(CREATE_COURSE_REQUEST, CreateCourse)
}
export default handleCreateCourse