import { atom } from 'recoil';
import { Cookies, tokenFn } from '@/utils/token';
import enUS from '@/locale/en_US';
import zhCN from '@/locale/zh_CN';
import system from '@config/system';

export const globalAtom = {
  locale: atom({
    key: 'locale',
    default: [zhCN, enUS].find((item) => item.locale === Cookies.get('locale')) || zhCN
  }),
  token: atom({
    key: 'token',
    default: tokenFn.get() || ''
  }),
  user: atom<MKH.User | Record<string, any>>({
    key: 'user',
    default: {}
  }),
  menus: atom<MKH.Menu[]>({
    key: 'menus',
    default: []
  }),
  navMenus: atom<MKH.Menu[]>({
    key: 'navMenus',
    default: [{ label: '首页', name: '首页', sort: 0, spread: true, type: '0', id: 0, parentId: -1, path: '/' }]
  }),
  systemConfig: atom<MKH.SystemConfig>({
    key: 'systemConfig',
    default: { ...system, ...JSON.parse(Cookies.get('systemConfig') || '{}') }
  }),
  qiankunConfig: atom({
    key: 'qiankunConfig',
    default: undefined
  }),
  collapsed: atom({
    key: 'collapsed',
    default: false
  })
};
