import produce from 'immer';
import { SET_COURSES } from './actionTypes';

const harddata = [
  {
      "_id": "6133523f71531543441eba44",
      "title": "NodeJs for beginner",
      "category": "NodeJs",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "timeLineType": "day",
      "timeLine": 10,
      "mentors": ['Jack', 'Min'],
      "mentees": [
          {
              "passedPlan": ['Day_1', 'Day_2', 'Day_3'],
              "menteeId": '2',
          }
      ],
      "plan": [
          {
              "question": [
                  {
                      "category": "VueJS",
                      "rating": 9,
                      "type": "essay",
                      "quiz": "VueJS la gi?",
                      "options": "Huhu, em chua hoc Vue"
                  },
                  {
                      "category": "Node JS",
                      "rating": 10,
                      "type": "essay",
                      "quiz": "What is the Express?",
                      "option": "Express is ..."
                  }
              ],
              "_id": "Day_1",
              "title": "Power of Express",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "homeWork": [
                  {
                      "_id": "6133523f71531543441eba45",
                      "content": "this is homework content",
                      "submit": []
                  }
              ]
          },
          {
              "question": [],
              "_id": "Day_2",
              "homeWork": [
                  {
                      "_id": "6133b314e54a784c5137611a",
                      "content": "test",
                      "submit": "this ís my submit"
                  }
              ],
              "title": "Power of Express",
              "content": "aaaaaa"
          },
          {
              "question": [],
              "_id": "Day_3",
              "homeWork": [
                  {
                      "_id": "6133c16338b0885ebd5d53ad",
                      "content": "test",
                      "submit": "this ís my submit"
                  }
              ],
              "title": "Power of Express",
              "content": "aaaaaa"
          },
          {
              "question": [],
              "_id": "Day_4",
              "homeWork": [
                  {
                      "_id": "6133cda65ccd73775bec1a0f",
                      "content": "test",
                      "submit": []
                  }
              ],
              "title": "Power of Express",
              "content": "aaaaaa"
          },
          {
              "question": [],
              "_id": "Day_5",
              "homeWork": [
                  {
                      "_id": "61351460e45fb95f513ffae2",
                      "content": "test",
                      "submit": []
                  }
              ],
              "title": "Power of Express",
              "content": "aaaaaa"
          },
          {
              "question": [],
              "_id": "Day_6",
              "homeWork": [
                  {
                      "_id": "6135728e8ec73f15cad380e1",
                      "content": "test",
                      "submit": "submit text 11[object Object]"
                  }
              ],
              "title": "Power of Express",
              "content": "aaaaaa"
          },
          {
              "question": [],
              "_id": "Day_7",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_8",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_9",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_10",
              "homeWork": []
          }
      ],
      "status": "preparing",
      "created_at": "2021-09-04T11:02:23.485Z",
      "updated_at": "2021-09-06T03:45:23.652Z",
      "created_by": "Peter",
      "updated_by": "datpmt"
  },
  {
      "_id": "61351ab31f3dce6df9e03085",
      "title": "NodeJs for beginner",
      "category": "NodeJs",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "timeLineType": "day",
      "timeLine": 10,
      "mentors": [],
      "mentees": [
          {
              "passedPlan": ['Day_1','Day_2','Day_3','Day_4'],
              "menteeId": '2'
          }
      ],
      "plan": [
          {
              "question": [
                  {
                      "category": "VueJS",
                      "rating": 9,
                      "type": "essay",
                      "quiz": "VueJS la gi?",
                      "options": "Huhu, em chua hoc Vue"
                  },
                  {
                      "category": "Node JS",
                      "rating": 10,
                      "type": "essay",
                      "quiz": "What is the Express?",
                      "option": "Express is ..."
                  }
              ],
              "_id": "Day_1",
              "title": "Power of Express",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "homeWork": [
                  {
                      "_id": "61351ab31f3dce6df9e03086",
                      "content": "this is homework content"
                  }
              ]
          },
          {
              "question": [],
              "_id": "Day_2",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_3",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_4",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_5",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_6",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_7",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_8",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_9",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_10",
              "homeWork": []
          }
      ],
      "status": "preparing",
      "created_at": "2021-09-05T19:29:55.914Z",
      "updated_at": "2021-09-05T19:29:55.914Z",
      "created_by": "Peter",
      "updated_by": "Peter"
  },
  {
      "_id": "6135813498244840c1d360b6",
      "title": "NodeJs for beginner",
      "category": "NodeJs",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "timeLineType": "day",
      "timeLine": 10,
      "mentors": [],
      "mentees": [
          {
              "passedPlan": [],
              "menteeId": null
          }
      ],
      "plan": [
          {
              "question": [
                  {
                      "category": "VueJS",
                      "rating": 9,
                      "type": "essay",
                      "quiz": "VueJS la gi?",
                      "options": "Huhu, em chua hoc Vue"
                  },
                  {
                      "category": "Node JS",
                      "rating": 10,
                      "type": "essay",
                      "quiz": "What is the Express?",
                      "option": "Express is ..."
                  }
              ],
              "_id": "Day_1",
              "title": "Power of Express",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "homeWork": [
                  {
                      "_id": "6135813498244840c1d360b7",
                      "content": "this is homework content"
                  }
              ]
          },
          {
              "question": [],
              "_id": "Day_2",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_3",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_4",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_5",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_6",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_7",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_8",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_9",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_10",
              "homeWork": []
          }
      ],
      "status": "preparing",
      "created_at": "2021-09-06T02:47:16.253Z",
      "updated_at": "2021-09-06T02:47:16.253Z",
      "created_by": "datpmt",
      "updated_by": "datpmt"
  },
  {
      "_id": "6135813598244840c1d360b9",
      "title": "NodeJs for beginner",
      "category": "NodeJs",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "timeLineType": "day",
      "timeLine": 10,
      "mentors": [],
      "mentees": [
          {
              "passedPlan": [],
              "menteeId": null
          }
      ],
      "plan": [
          {
              "question": [
                  {
                      "category": "VueJS",
                      "rating": 9,
                      "type": "essay",
                      "quiz": "VueJS la gi?",
                      "options": "Huhu, em chua hoc Vue"
                  },
                  {
                      "category": "Node JS",
                      "rating": 10,
                      "type": "essay",
                      "quiz": "What is the Express?",
                      "option": "Express is ..."
                  }
              ],
              "_id": "Day_1",
              "title": "Power of Express",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "homeWork": [
                  {
                      "_id": "6135813598244840c1d360ba",
                      "content": "this is homework content"
                  }
              ]
          },
          {
              "question": [],
              "_id": "Day_2",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_3",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_4",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_5",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_6",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_7",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_8",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_9",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_10",
              "homeWork": []
          }
      ],
      "status": "preparing",
      "created_at": "2021-09-06T02:47:17.256Z",
      "updated_at": "2021-09-06T02:47:17.256Z",
      "created_by": "datpmt",
      "updated_by": "datpmt"
  },
  {
      "_id": "61358ad857ee90335f9ca2ec",
      "title": "NodeJs for beginner",
      "category": "NodeJs",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "timeLineType": "day",
      "timeLine": 10,
      "mentors": [],
      "mentees": [
          {
              "passedPlan": [],
              "menteeId": null
          }
      ],
      "plan": [
          {
              "question": [
                  {
                      "category": "VueJS",
                      "rating": 9,
                      "type": "essay",
                      "quiz": "VueJS la gi?",
                      "options": "Huhu, em chua hoc Vue"
                  },
                  {
                      "category": "Node JS",
                      "rating": 10,
                      "type": "essay",
                      "quiz": "What is the Express?",
                      "option": "Express is ..."
                  }
              ],
              "_id": "Day_1",
              "title": "Power of Express",
              "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              "homeWork": [
                  {
                      "_id": "61358ad857ee90335f9ca2ed",
                      "content": "this is homework content"
                  }
              ]
          },
          {
              "question": [],
              "_id": "Day_2",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_3",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_4",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_5",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_6",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_7",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_8",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_9",
              "homeWork": []
          },
          {
              "question": [],
              "_id": "Day_10",
              "homeWork": []
          }
      ],
      "status": "preparing",
      "created_at": "2021-09-06T03:28:24.036Z",
      "updated_at": "2021-09-06T03:28:24.036Z",
      "created_by": "datpmt",
      "updated_by": "datpmt"
  }
]

const initialCourses = {
  courses : harddata,
  loading: false,
};

export const coursesReducer = (state = initialCourses, action) =>
  produce(state, draft => {
    switch (action.type) {
      
      case SET_COURSES: {
        draft['courses'] = action.payload;
        draft['loading'] = false;
        break;
      }
      default: {
        break;
      }
    }
  });

