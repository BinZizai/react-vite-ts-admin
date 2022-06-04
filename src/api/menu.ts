import request from '@/utils/request';

import { menus } from './mock';

export default {
  // getCurrentMenu: () => request.get<any, NSP.Menu[]>('/admin/menu')
  getCurrentMenu: () => {
    return Promise.resolve(menus);
  }
};
