import axios from 'axios';

const BioAPIInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BIO,
});

export const setToken = (token: string) => {
  BioAPIInstance.defaults.headers.common['Authorization'] = token;
};

// setToken(`Bearer ${process.env.REACT_APP_API_TOKEN}`);

BioAPIInstance.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  }
);

export default BioAPIInstance