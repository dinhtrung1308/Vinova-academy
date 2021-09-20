import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { globalState, globalReducer } from './global';
import { loadingScreenState, loadingScreenReducer } from './loadingscreen';

import { authenticationReducer, authenticationType } from './authentication'
import { accountTableReducer } from './account/accounttable';
import { coursesReducer } from './courses';
import { IAccountTableState } from '../../models/Accounts';
import { questionBankReducer, questionBankType } from './questionbank';
import { sharingsReducer, SharingsList } from './sharings';
import {contentReducer,ITestReducer } from './itest'
import { updatePlanReducer, PlanType } from './createcourse/plan'
import { createCourseReducer, CourseType} from './createcourse/createcourse'
import createPersistReducer from 'redux/reducers/persist';


const createRootReducer = (history: History) => {
  const reducers = combineReducers({
    courses: coursesReducer,
    authentication: authenticationReducer,
    accountTable: accountTableReducer,
    questionBank: questionBankReducer,
    sharings: sharingsReducer,
		updatePlan: updatePlanReducer,
		createCourse: createCourseReducer,
    router: connectRouter(history),
    global: globalReducer,
    content: contentReducer,
		loadingScreen: loadingScreenReducer,
  });
  return createPersistReducer(reducers);
};
export interface reducerType {
  authentication: authenticationType
  accountTable: IAccountTableState
  questionBank: questionBankType
  sharings:SharingsList
	updatePlan: PlanType
	createCourse:CourseType
  global: globalState
  loadingScreen: loadingScreenState
  content: ITestReducer
  router: {
    location: {
      pathname: string;
      search: string;
      hash: string;
    };
    action: string;
  };
}

export default createRootReducer;
