import axios from 'axios';

const VinovaAPIInstance = axios.create({
  baseURL: process.env.REACT_APP_VINOVA_API,
});

export const setToken = (token: string) => {
  VinovaAPIInstance.defaults.headers.common['Authorization'] = token;
};

//setToken(`Bearer ${process.env.REACT_APP_API_TOKEN}`);

VinovaAPIInstance.interceptors.response.use(
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

export default VinovaAPIInstance