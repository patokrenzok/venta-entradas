import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('app-token')}`;
  return config;
});

export default axiosInstance;
