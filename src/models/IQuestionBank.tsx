enum typeQues {
  "multi-choice" = "multi-choice",
  "essay" = "essay"
}

export interface IQuestion {
  _id: string,
  category: string,
  rating: number,
  type: typeQues,
  quiz: string,
  options: IAnswer[] | string,
}

export interface IAnswer {
  _id: string,
  content: string,
  isCorrect: boolean,
  isSelected?: boolean,
}

export const initialQuestionList: IQuestion[] = [
  {
    _id: "1",
    category: "ReactJS",
    rating: 2,
    type: typeQues["essay"],
    quiz: "this is cau 1",
    options: "this is question 1's answer",
  },
  {
    _id: "2",
    category: "Database",
    rating: 2,
    type: typeQues["essay"],
    quiz: "this is cau 2",
    options: "this is question 1's answer",
  },
  {
    _id: "3",
    category: "Database",
    rating: 2,
    type: typeQues["multi-choice"],
    quiz: "this is cau 3",
    options: [
      {
        _id: 'A',
        content: 'ans A',
        isCorrect: false,
      },
      {
        _id: 'B',
        content: 'ans B',
        isCorrect: false,
      },
      {
        _id: 'C',
        content: 'ans C',
        isCorrect: true,
      },
      {
        _id: 'D',
        content: 'ans D',
        isCorrect: false,
      },
    ],
  },
  {
    _id: "4",
    category: "VueJS",
    rating: 10,
    type: typeQues["essay"],
    quiz: "this is cau Vue",
    options: "this is question 5's answer",
  },
  {
    _id: "5",
    category: "VueJS",
    rating: 5,
    type: typeQues["essay"],
    quiz: "this is cau Vue 1",
    options: "this is question 3's answer",
  },
  {
    _id: "6",
    category: "VueJS",
    rating: 7,
    type: typeQues["essay"],
    quiz: "this is cau Vue 3",
    options: "this is question 4's answer",
  },
]