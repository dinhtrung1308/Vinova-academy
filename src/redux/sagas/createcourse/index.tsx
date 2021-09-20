import { all } from 'redux-saga/effects';
import handleUpdate from './updatePlan'
import handleCreateCourse from './createCourse'

export const handleUpdateCourse = function* root() {
	yield all([handleCreateCourse(), handleUpdate()])
}