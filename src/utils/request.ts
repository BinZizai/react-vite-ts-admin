import axios from 'axios';
import qs from 'qs';
import { message, Modal } from 'antd';
import { tokenFn } from './token';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: config.headers?.Authorization || (tokenFn.get() as string)
    };
    if (config.headers?.['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  (err) => Promise.reject(err)
);

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.config.url === '/auth/oauth/token') {
        return Promise.resolve(response.data);
      }
      if (response.data.code === 0) {
        return Promise.resolve(response.data.data);
      } else {
        message.error(response.data.msg);
      }
    }
    return Promise.reject(response);
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      Modal.info({
        title: '会话超时，请重新登陆！',
        maskClosable: false,
        onOk() {
          tokenFn.remove();
          window.location.reload();
        }
      });
      return Promise.resolve();
    }
    const msg = err.response?.data?.msg || err.message || 'error!';
    return Promise.reject(msg);
  }
);

export default request;
