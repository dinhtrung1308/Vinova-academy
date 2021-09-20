import { VinovaAPIInstance} from '../configApi'

export const createcourse = async (data) =>{
	const res = await VinovaAPIInstance.post(`${process.env.REACT_APP_USER_PATH}/courses`, data)
	return res.data
}