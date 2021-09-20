import {IQuestion} from './IQuestionBank'

export interface ICourse {
	title: string,
	category: string,
	desciption: any,
	timeLineType: TimeLineType,
	plan: IPlan[],
	isPassed: boolean,
	status: Status
}
​
​
enum TimeLineType {
	day = "day",
	week = "week"
}
​
enum Status {
	preparing = "preparing",
	active = "active"
}
	

​
export interface IPlan {
	"_id": string,
	"title": string,
	"content": any,
	"question": (string | IQuestion)[],
}

// export const Course: ICourse = {
// 	"title": "Nodejs for life",
// 	"category": "Node Js",
// 	"desciption": {
// 			"content": "",
// 			"...": "..."
// 	},
// 	"timeLineType": TimeLineType.day,
// 	"plan": [
// 			{
// 					"_id": "Day_1",
// 					"title": "Power of Express",
// 					"content": {
// 							"_content": "1234",
// 							"...":"..."
// 					},
// 					"question": [
// 							"ques123",
// 							"ques456",
// 							{
// 									"category": "Node JS",
// 									"rating": 10,
// 									"type": "essay",
// 									"quiz": "What is the Express?",
// 									"option": "Express is ..."
// 							}
// 					],
// 					"isPassed": false
// 			},
// 			{"_id": "Day_2"},
// 			{"_id": "Day_3"},
// 			{"_id": "Day_4"},
// 			{"_id": "Day_5"},
// 			{"_id": "Day_6"},
// 			{"_id": "Day_7"},
// 			{"_id": "Day_8"},
// 			{"_id": "Day_9"},
// 			{"_id": "Day_10"}
// 	],
// 	"status": "preparing"
// }