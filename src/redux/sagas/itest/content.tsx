import { takeLatest,fork,call,put,delay } from 'redux-saga/effects';
import { 
  FETCH_DATA_ITEST,
  SAVE_DATA_ITEST, 
  SUBMIT_DATA_ITEST,
  POST_DATA_ITEST,
  SHOW_LOADDING, 
  SHOW_MESS_SUC,
  SHOW_MESS_ERR,
 } from 'redux/reducers/itest/actionTypes';
import {getListDataItest,submitDataItest} from "services/itest/itestApi";


function* fetchDataItest(action){
  try {
    const getdataItest = yield call(getListDataItest, action.payload);
    if(getdataItest.success == true){
        yield put({type:SAVE_DATA_ITEST, payload: getdataItest.result });
    }else{
    }
  } catch (error) {
     console.log("Có lỗi lấy API");
  } 
}

function* postDataItest(action){
  try{
    const dataSub = yield call(submitDataItest, action.payload);
    yield put({
      type: SHOW_LOADDING,
      payload: true,
    })
    yield delay(3000);
    yield put({
      type: SHOW_LOADDING,
      payload: false,
    })

    if(dataSub.success == true){
      yield put({type:SHOW_MESS_SUC, payload: true });
      yield delay(3000);
      yield put({type:SHOW_MESS_SUC, payload: false });
      yield put({type:SUBMIT_DATA_ITEST, payload: true });
    }
  } catch(error){
      yield put({type:SHOW_MESS_ERR, payload: true });
      yield delay(3000);
      yield put({type:SHOW_MESS_ERR, payload: false });
      yield put({type:SUBMIT_DATA_ITEST, payload: false });
  }
}

function* content() {
  yield takeLatest(FETCH_DATA_ITEST, fetchDataItest);
  yield takeLatest(POST_DATA_ITEST, postDataItest);
}

export default content;
