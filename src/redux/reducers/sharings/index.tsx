import produce from 'immer';
import { initialSharing, ISharing } from 'models/Sharings';
import {
  ADD_SHARING_FAILED, ADD_SHARING_SUCCESS,LOAD_SHARINGS_SUCCESS,LOAD_SHARINGS_FAILED, UPDATE_RATING_SUCCESS
} from './actionTypes';
// import { otpToken, initOtpToken } from 'models/authentication';

export interface SharingsList {
  sharings : ISharing[],
}

const initial: SharingsList = {
  sharings : [initialSharing],
};

export const sharingsReducer = (state = initial, action) =>
  produce(state, draft => {
    switch (action.type) {

      case ADD_SHARING_SUCCESS: {
        const temp = draft['sharings'];
        if(temp[0]['title'] === '') {
          draft['sharings'][0] = action.payload.data;
        }
        else{
          temp.push(action.payload.data);
          draft['sharings'] = temp;
        }
        break;
      }
      case ADD_SHARING_FAILED: {
        console.log('add failed');
        break;
      }
      case LOAD_SHARINGS_SUCCESS: {
        draft['sharings'] = action.payload;
        break;
      }
      case LOAD_SHARINGS_FAILED: {
        console.log('load failed');
        break;
      }
      case UPDATE_RATING_SUCCESS: {
        const temp = draft['sharings'];
        temp[action.payload.id]['rating'] = action.payload.newValue;
        draft['sharings'] = temp;

        console.log(action.payload);
        //console.log(action.payload.id);
        //console.log(action.payload.newValue);
        break;
      }

      default: {
        break;
      }


    }
  });

//set state to initial state
/*export const sharingsReducer = (state = initial, action) =>{
    switch (action.type) {
      case ADD_SHARING_REQUEST:{
        return initial;
        break;
      }

      default: {
        return initial;
        break;
      }
    }
  };*/
  

