import {VinovaAPIInstance} from "../configApi/index"

const test:string = "tests"
export const getListDataItest = (id) =>{
    return VinovaAPIInstance.get(`${process.env.REACT_APP_USER_PATH}/${test}/${id}`);
}

export const submitDataItest = (payload) =>{
    console.log('ddax vo den api sub', payload.data);
    return VinovaAPIInstance.post(`${process.env.REACT_APP_USER_PATH}/${test}/${payload.id}/submit`, payload.data)
}