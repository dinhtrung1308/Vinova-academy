export interface ILogin {
  username: string,
  password: string
}
export interface IForgotPass {
  email: string,
}

export const initialData: ILogin = {
  username: '',
  password: ''
}
export const initialEmail: IForgotPass = {
  email:'',
}