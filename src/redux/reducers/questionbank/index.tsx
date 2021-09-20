import produce from "immer";
import {
  ADD_QUES_FAILED, ADD_QUES_SUCCESS,
  DELETE_QUES_FAILED, DELETE_QUES_SUCCESS,
  GET_ALL_QUES_FAILED,
  GET_ALL_QUES_SUCCESS,
  GET_QUES_FAILED, GET_QUES_SUCCESS,
  UPDATE_QUES_FAILED, UPDATE_QUES_SUCCESS
} from "./actionTypes";

export interface questionBankType {
  quesList: {
    _id: string,
    category: string,
    rating: number,
    type: string,
    quiz: string,
    options: string | {
      _id: string,
      content: string,
      isCorrect: boolean,
    }[],
  }[],

  totalRows: number,

  allQues: {
    _id: string,
    category: string,
    rating: number,
    type: string,
    quiz: string,
    options: string | {
      _id: string,
      content: string,
      isCorrect: boolean,
    }[],
  }[],
};

//const initial: Array<IQuestion> = initialQuestionList; 

export const initial: questionBankType = {
  quesList: [
    {
      _id: "1",
      category: "ReactJS",
      rating: 2,
      type: "essay",
      quiz: "this is cau 1",
      options: "this is question 1's answer",
    },
  ],

  totalRows: 1,

  allQues: [
    {
      _id: "1",
      category: "ReactJS",
      rating: 2,
      type: "essay",
      quiz: "this is cau 1",
      options: "this is question 1's answer",
    },
  ],
}

export const questionBankReducer = (state = initial, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_QUES_SUCCESS: {
        // const data = { ...action.payload };
        // draft['quesList'].push(data);
        console.log("success")
        break;
      }

      case ADD_QUES_FAILED: {
        console.log('failed');
        break;
      }

      case UPDATE_QUES_SUCCESS: {
        // draft['quesList'] = draft['quesList'].map(e => {
        //   if (e._id === action.payload._id) {
        //     return { ...action.payload }
        //   }
        //   else
        //     return { ...e }
        // });

        console.log("success")
        break;
      }

      case UPDATE_QUES_FAILED: {
        console.log('failed');
        break;
      }

      case DELETE_QUES_SUCCESS: {
        // draft['quesList'] = draft['quesList'].filter(e =>
        //   e._id !== action.payload
        // );

        console.log("success")
        break;
      }

      case DELETE_QUES_FAILED: {
        console.log('failed');
        break;
      }

      case GET_QUES_SUCCESS: {
        const data = action.payload.result;
        console.log(data);
        draft['quesList'] = data.questions;
        draft['totalRows'] = data.totalRows;

        break;
      }

      case GET_QUES_FAILED: {
        console.log('get failed');
        break;
      }

      case GET_ALL_QUES_SUCCESS: {
        draft['allQues'] = action.payload.result;
        break;
      }

      case GET_ALL_QUES_FAILED: {
        console.log('get failed');
        break;
      }

      default: {
        break;
      }
    }

  });