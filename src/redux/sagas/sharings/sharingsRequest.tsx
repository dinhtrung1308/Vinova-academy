import { takeLatest, call, put } from 'redux-saga/effects';
import { ADD_SHARING_FAILED, ADD_SHARING_REQUEST, ADD_SHARING_SUCCESS, 
        LOAD_SHARINGS_FAILED, LOAD_SHARINGS_REQUEST, LOAD_SHARINGS_SUCCESS, 
        UPDATE_RATING_REQUEST, UPDATE_RATING_SUCCESS } from 'redux/reducers/sharings/actionTypes'; 
import { loadSharings, addSharings, updateRating } from 'services/sharings/sharingsApi';

function* addShaRequest(action){
  try {
    const resAdd = yield call(addSharings, action.payload);
    if (resAdd) {
      yield put({
        type: ADD_SHARING_SUCCESS,
        payload: action.payload,
      })
    }
    else{
      yield put({
        type: ADD_SHARING_FAILED,
      })
    }
  } catch (error) {
      yield put({
        type: ADD_SHARING_FAILED,
      })
  }
}

function* loadDataRequest(action){
  try {
    const resLoad = yield call(loadSharings, action.payload);
    if (resLoad) {
      yield put({
        type: LOAD_SHARINGS_SUCCESS,
        payload: resLoad,
      })
    }
  } catch (error) {
    console.log(error)
    yield put({
      type: LOAD_SHARINGS_FAILED,
    })
  }
}
function* updateRatingReq(action){
  try {
    const resLoad = yield call(updateRating, action.payload);
    if (resLoad) {
      yield put({
        type: UPDATE_RATING_SUCCESS,
        payload: action.payload,
      })
    }
  } catch (error) {
    //
  }
}

 function* handleShaRequest (){

  yield takeLatest(ADD_SHARING_REQUEST, addShaRequest);
  yield takeLatest(LOAD_SHARINGS_REQUEST, loadDataRequest);
  yield takeLatest(UPDATE_RATING_REQUEST, updateRatingReq);
}
export default handleShaRequest