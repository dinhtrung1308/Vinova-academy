export interface ICourseProps {
  id: string,
  title: string,
  thumbnail: string,
  description: string,
  mentors: IMentor[],
  timeLine: string,
  category: string,
  status: string,
  mentees: IMentee[]
}
export interface IMentee {
  menteeID: string,
  passedPlan: string[],
}
export interface IMentor {
  email: string,
  english_name: string,
  _id: string,
}
export interface IRules {
  icon: string,
  content: string,
  subContent: string,
}