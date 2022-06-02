import request from '@/utils/request';

import { menus } from './mock';

export default {
  // getCurrentMenu: () => request.get<any, MKH.Menu[]>('/admin/menu')
  getCurrentMenu: () => {
    return Promise.resolve(menus);
  }
};
