import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  }, 
  (error: AxiosError): Promise<never> => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

export default api;