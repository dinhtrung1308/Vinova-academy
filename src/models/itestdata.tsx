
interface Answer {
  _id: string,
  content: string,
  isCorrect: boolean,
  // isSelected: boolean,
}
interface Question {
  _id: string,
  category: string,
  rating: number,
  type: string,
  quiz: string,
  options: Answer[],
}

export interface IItestData {
  _id: string,
  time: string,
  titel: string,
  category: string,
  questions: Question[],

}

interface anSelected {
  questID: string,
  answer: string,
}
export interface dataSubmit {
  ansSelected: anSelected[]
}


interface profile{
  email: string,
  test: {
    _id: string,
    isDone: boolean,
  }
}

export const initialProfile:profile={
  email: "nvthuyen@gmail.com",
  test:{
    _id: "61397713469fb30016e0141f",
    isDone: false,
  }
}


// ......
export interface initialSteps{
  infors: infor[]
}
interface infor{
  title: string;
  text: string;
}

export const initialQuiz: IItestData = {
  _id: "",
  time: "",
  titel: "",
  category: "",
  questions: [],
}



