import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from 'redux/reducers/authentication/actionTypes';
import { SET_ERROR_TOP_ALERT, SET_SUCCESS_TOP_ALERT } from 'redux/reducers/global/actionTypes';
import { getProfile, login } from 'services/authentication/authenApi';
import { setToken } from 'services/configApi/configVinovaApi';

function* loginRequest(action) {
  try {
    ///
    const requestLogin = yield call(login, action.payload);

    if (requestLogin) {
      const profile = yield call(getProfile, requestLogin.result.token)

      yield put({
        type: LOGIN_SUCCESS,
        clientCode: requestLogin.result.token,
        profile: profile,
      })
      yield put({
        type: SET_SUCCESS_TOP_ALERT
      })
    }

    ///
  } catch (error) {
    console.log(error)
    yield put({
      type: LOGIN_FAILED,
      clientCode: '',
    })
    yield put({
      type: SET_ERROR_TOP_ALERT
    })

  }

}

function* handleLoginByUsername() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}

export default handleLoginByUsername
