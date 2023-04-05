import axios from 'axios';
import {getLocalItem} from './localStorage';

const auth = axios.create();
auth.interceptors.request.use(
  async config => {
    const token = await getLocalItem('@storage_token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export {auth};
