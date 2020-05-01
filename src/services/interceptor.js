import Axios from 'axios';

import configs from '../configs/config';

const {
  development: { baseURL, apiVersion },
} = configs;

Axios.create({
  baseURL: `${baseURL}${apiVersion}`,
});

Axios.interceptors.request.use((request) => {
  request.headers['user-key'] = 'de4f5b4bd7b252899a0127467a5aa208';
  return request;
});

Axios.interceptors.request.use((response) => {
  return response;
});
