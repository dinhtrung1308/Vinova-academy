import { VinovaAPIInstance, BioAPIInstance } from '../configApi';
import { IForgotPass } from 'models/authentication';

interface dataType {
  login: {
    username: string,
    password?: string
  }
  infoClient: {
    USERNAME: string,
    BIRTHDATE: string,
    EMAIL: string
  }
  token: string
}

// export const login = async (data: dataType['login']) => {
//   const res = await VinovaAPIInstance.post(`${process.env.REACT_APP_USER_PATH}/user-login`, data);
//   return res.data
// };

export const login = async (data: dataType['login']) => {

  const res = await VinovaAPIInstance.post(`${process.env.REACT_APP_USER_PATH}/login`, data);
  return res
};

export const getProfile = async (data: dataType['token']) => {
  const res = await BioAPIInstance.get(`${process.env.REACT_APP_API_BIO}/v1.0.0/users/profile`, {
    headers: {
      Authorization: data
    }
  });
  return res.data
};