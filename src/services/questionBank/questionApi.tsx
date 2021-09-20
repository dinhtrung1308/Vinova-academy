import { VinovaAPIInstance } from '../configApi';
import { IForgotPass } from 'models/authentication';
import { configureStore } from 'redux/configureStore';
import { persistStore } from 'redux-persist';
import { QUESTIONS } from './constantApi';
import { IQuestion } from 'models/IQuestionBank';

interface dataType {
  question: {
    _id: string,
    category: string,
    rating: number,
    type: string,
    quiz: string,
    options: string,
  },

  _idDel: string
}

// export const login = async (data: dataType['login']) => {
//   const res = await VinovaAPIInstance.post(`${process.env.REACT_APP_USER_PATH}/user-login`, data);
//   return res.data
// };

const initialState = {};
const store = configureStore(initialState);
persistStore(store);


export const addQues = async (data: IQuestion) => {
  const res = await VinovaAPIInstance.post(`${process.env.REACT_APP_USER_PATH}/${QUESTIONS}`, data);
  return res;

};

export const updateQues = async (data: IQuestion) => {
  const dataUpdata = {
    category: data.category,
    rating: data.rating,
    type: data.type,
    quiz: data.quiz,
    options: data.options,
  };
  console.log("data", dataUpdata)
  const res = await VinovaAPIInstance.put(`${process.env.REACT_APP_USER_PATH}/${QUESTIONS}/${data._id}`, dataUpdata);
  return res;
}

export const delQues = async (data: dataType['_idDel']) => {
  const res = await VinovaAPIInstance.delete(`${process.env.REACT_APP_USER_PATH}/${QUESTIONS}/${data}`);
  return res;
}

////
export const getQuesList = async (data: string) => {
  const res = await VinovaAPIInstance.get(`${process.env.REACT_APP_USER_PATH}/${QUESTIONS}?${data}`);
  return res;
}

////
export const getAllQues = async () => {
  const res = await VinovaAPIInstance.get(`${process.env.REACT_APP_USER_PATH}/${QUESTIONS}`);
  return res;
}