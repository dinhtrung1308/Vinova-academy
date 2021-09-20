import { takeLatest, call, put } from 'redux-saga/effects';
import { SET_ERROR_TOP_ALERT, SET_SUCCESS_TOP_ALERT } from 'redux/reducers/global/actionTypes';
import { ADD_QUES_FAILED, ADD_QUES_REQUEST, ADD_QUES_SUCCESS, DELETE_QUES_FAILED, DELETE_QUES_REQUEST, DELETE_QUES_SUCCESS, GET_ALL_QUES_FAILED, GET_ALL_QUES_REQUEST, GET_ALL_QUES_SUCCESS, GET_QUES_FAILED, GET_QUES_REQUEST, GET_QUES_SUCCESS, UPDATE_QUES_FAILED, UPDATE_QUES_REQUEST, UPDATE_QUES_SUCCESS } from 'redux/reducers/questionbank/actionTypes';
import { addQues, delQues, getAllQues, getQuesList, updateQues } from 'services/questionBank/questionApi';

function* addRequest(action) {
  try {
    ///
    const requestAdd = yield call(addQues, action.payload);

    if (requestAdd) {
      console.log(requestAdd)
      yield put({
        type: ADD_QUES_SUCCESS,
        payload: requestAdd.result,
      })
      yield put({
        type: SET_SUCCESS_TOP_ALERT,
      })
    }
    ///
  } catch (error) {
    console.log(error);

    yield put({
      type: ADD_QUES_FAILED,
    })
    yield put({
      type: SET_ERROR_TOP_ALERT,
    })
  }
}

function* updateRequest(action) {
  try {
    ///
    const requestUpd = yield call(updateQues, action.payload);

    if (requestUpd) {
      yield put({
        type: UPDATE_QUES_SUCCESS,
        payload: action.payload,
      })

      yield put({
        type: SET_SUCCESS_TOP_ALERT,
      })
    }
    ///
  } catch (error) {
    console.log(error);

    yield put({
      type: UPDATE_QUES_FAILED,
    })
    yield put({
      type: SET_ERROR_TOP_ALERT,
    })
  }
}

function* deleteRequest(action) {
  try {
    ///
    const requestDel = yield call(delQues, action.payload);
    console.log(requestDel)
    if (requestDel) {
      yield put({
        type: DELETE_QUES_SUCCESS,
        payload: action.payload,
      })

      yield put({
        type: SET_SUCCESS_TOP_ALERT,
      })
    }

    ///
  } catch (error) {
    console.log(error);

    yield put({
      type: DELETE_QUES_FAILED,
    })
    yield put({
      type: SET_ERROR_TOP_ALERT,
    })
  }

}

function* getRequest(action) {
  try {
    ///
    const requestGet = yield call(getQuesList, action.payload);

    if (requestGet) {
      yield put({
        type: GET_QUES_SUCCESS,
        payload: requestGet,
      })
    }
    ///
  } catch (error) {
    console.log(error)

    yield put({
      type: GET_QUES_FAILED,
    })
  }
}

function* getAllQuestion() {
  try {
    ///
    const requestAllQues = yield call(getAllQues);

    if (requestAllQues) {
      yield put({
        type: GET_ALL_QUES_SUCCESS,
        payload: requestAllQues,
      })
    }
    ///
  } catch (error) {
    console.log(error)

    yield put({
      type: GET_ALL_QUES_FAILED,
    })
  }
}

function* handleQuestionRequest() {
  yield takeLatest(ADD_QUES_REQUEST, addRequest);
  yield takeLatest(UPDATE_QUES_REQUEST, updateRequest);
  yield takeLatest(DELETE_QUES_REQUEST, deleteRequest);
  yield takeLatest(GET_QUES_REQUEST, getRequest);
  yield takeLatest(GET_ALL_QUES_REQUEST, getAllQuestion);
}

export default handleQuestionRequest
