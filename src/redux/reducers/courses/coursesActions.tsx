import { SET_COURSES, GET_COURSES } from './actionTypes';

export const setCourses = (data) => {
  return {
    type: SET_COURSES,
    payload: data
  }
}

export const getCourses = () => {
  return {
    type: GET_COURSES,
  }
}

