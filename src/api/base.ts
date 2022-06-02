import request from '@/utils/request';
import { AxiosRequestConfig } from 'axios';

import { code, login_res } from './mock';

export default {
  // getCode: () => request.get<any, MKH.VerifyCode>('/code'),
  getCode: () => {
    return Promise.resolve(code);
  },
  // checkCode: (data: any, config: AxiosRequestConfig) => request.post('/code/check', data, config),
  checkCode: (data, config, diff) => {
    console.log(config, data);
    if (diff > 160 && diff < 210) {
      return Promise.resolve({
        repCode: 0
      });
    } else {
      return Promise.reject('error');
    }
  },

  // login: (data: any, config: AxiosRequestConfig) => request.post<any, MKH.LoginRes>('/auth/oauth/token', data, config),
  login: (data: any, config: AxiosRequestConfig) => {
    console.log(config, data);
    return Promise.resolve(login_res);
  }
};
