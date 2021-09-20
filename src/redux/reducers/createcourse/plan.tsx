import produce from "immer";
import { UPDATE_SUCCESS, ADD_SUCCESS, DELETE_SUCCESS, CREATE_COURSE_SUCCESS, CREATE_COURSE_FAILED } from "./actionTypes";

export interface PlanType {
	plan: {
		_identify: string,
		_id: string,
		title: string,
		content: string,
		question: [],
	}[]
};
const initialState: PlanType =
{
	plan: []
}

export const updatePlanReducer = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case ADD_SUCCESS: {
				const data = { ...action.payload, _identify: String(Math.floor(Math.random() * 1000)) };
				draft['plan'].push(data);
				console.log("add success")
				break;
			}

			case UPDATE_SUCCESS: {
				draft['plan'] = draft['plan'].map(e => {
					if (e._identify === action.payload._identify) {
						return action.payload
					}
					else
						return { ...e }
				});
				console.log("update success")
				break;
			}
			case DELETE_SUCCESS: {
				draft['plan'] = draft['plan'].filter(e =>
					e._identify !== action.payload._identify
				);
				console.log("delete success")
				break;
			}
			default:
				return state

		}
	})