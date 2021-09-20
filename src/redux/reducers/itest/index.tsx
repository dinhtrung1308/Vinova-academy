import produce from 'immer';
import {
  SAVE_DATA_ITEST,
  SELECTED_DATA_ITEST,
  SUBMIT_DATA_ITEST,
  SHOW_LOADDING,
  SHOW_MESS_SUC,
  SHOW_MESS_ERR,

} from './actionTypes';
import {IItestData,initialQuiz,dataSubmit} from "models/itestdata"

export interface ITestReducer{
  dataItest: IItestData,
  dataSubmit: dataSubmit,
  isShowMessSuc: boolean,
  isShowMessErr: boolean,
  isSubmitSucces: boolean,
  isLoadding: boolean,
}

const initialDataSubmit:dataSubmit ={
  ansSelected: []
}


const initialItestReducer: ITestReducer = {
  dataItest: initialQuiz,
  dataSubmit: initialDataSubmit,
  isShowMessSuc: false,
  isShowMessErr: false,
  isSubmitSucces: false,
  isLoadding: false,
}

export const contentReducer = (state = initialItestReducer , action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_DATA_ITEST: {
        console.log("đã lưu data về store");
        draft["dataItest"] = {...action.payload};
        const dataTest = initialItestReducer;
        draft.dataItest.questions.map(question => {
          dataTest.dataSubmit.ansSelected.push({
            questID: question._id,
            answer: ""
          })
        })
 
        draft["dataSubmit"] = {...dataTest.dataSubmit};
        break;
      }
      case SELECTED_DATA_ITEST:{
        
        draft["dataSubmit"].ansSelected.map((e,index) =>{
            if(e.questID == action.payload.questID){
              draft["dataSubmit"].ansSelected[index] = {...action.payload}
            }
        })
        break;
      }
      case SUBMIT_DATA_ITEST:{
        draft["isSubmitSucces"] = action.payload;
        break;
      }
      case SHOW_LOADDING: {
        console.log("có vào phân loafding nè");
        draft["isLoadding"]= action.payload;
        break;
      }
      case SHOW_MESS_SUC: {
        console.log("có vào phân mess nè");
        draft["isShowMessSuc"]= action.payload;
        break;
      }
      case SHOW_MESS_ERR: {
        console.log("có vào phân mess nè");
        draft["isShowMessErr"]= action.payload;
        break;
      }
      
      default: {
        break;
      }
    }
  });

