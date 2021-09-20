import { VinovaAPIInstance } from '../configApi';

export const getAllCourses = async () => {
  const res = await VinovaAPIInstance.get(`${process.env.REACT_APP_USER_PATH}/courses`);
  return res;
}
