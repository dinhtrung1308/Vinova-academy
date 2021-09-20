import produce from "immer";
import {CREATE_COURSE_SUCCESS, CREATE_COURSE_FAILED } from "./actionTypes";

export interface CourseType {
	course:{}
};
const initialState:CourseType =
{
	course: {}
}

export const createCourseReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case CREATE_COURSE_SUCCESS: {
				draft['course'] = action.payload
				console.log("create success")

				break;
			}
			case CREATE_COURSE_FAILED: {
				console.log("create failed")
				break;
			}
			default:
				return {}

		}
	})