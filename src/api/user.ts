import request from '@/utils/request';

import { user } from './mock';

export default {
  // getCurrentUser: () => request.get<any, MKH.User>('/admin/user/info'),
  getCurrentUser: () => {
    return Promise.resolve(user);
  }
};
