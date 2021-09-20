import { takeLatest, call, put } from 'redux-saga/effects'
import {
	UPDATE_REQUEST,
	UPDATE_SUCCESS,
	UPDATE_FAILED,
	ADD_REQUEST,
	ADD_SUCCESS,
	ADD_FAILED,
	DELETE_SUCCESS,
	DELETE_FAILED,
	DELETE_REQUEST,
} from '../../reducers/createcourse/actionTypes'

function* updatePlan(action) {
	try {
		yield put({
			type: UPDATE_SUCCESS,
			payload: action.payload,
		})
	} catch (error) {
		yield put({
			type: UPDATE_FAILED,
			payload: action.payload,
		})
	}
}

function* addPlan(action) {
	try {
		yield put({
			type: ADD_SUCCESS,
			payload: action.payload,
		})
	} catch (error) {
		yield put({
			type: ADD_FAILED,
			payload: action.payload,
		})
	}
}

function* delPlan(action) {
	try {
		yield put({
			type: DELETE_SUCCESS,
			payload: action.payload,
		})
	} catch (error) {
		yield put({
			type: DELETE_FAILED,
			payload: action.payload,
		})
	}
}

function* handleUpdate() {
	yield takeLatest(UPDATE_REQUEST, updatePlan)
	yield takeLatest(ADD_REQUEST, addPlan)
	yield takeLatest(DELETE_REQUEST, delPlan)
}
export default handleUpdate