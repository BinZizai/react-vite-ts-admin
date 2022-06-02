import api from '@/api';
import { useSetRecoilState } from 'recoil';
import { globalAtom } from '../store';
import { encryption } from '../utils/aes';
import { tokenFn, Cookies } from '../utils/token';

export default function useLogin() {
  const setToken = useSetRecoilState(globalAtom.token);
  const setUser = useSetRecoilState(globalAtom.user);
  const setMenu = useSetRecoilState(globalAtom.menus);

  const login = (form: { username: string; password: string; code: string }) => {
    const res = encryption({
      data: {
        ...form
      },
      key: 'daoismdaoismdaoi',
      param: ['password']
    });

    return api.base
      .login(
        {
          username: res.username,
          password: res.password
        },
        {
          headers: {
            Authorization: 'Basic ZGFvaXNtOmRhb2lzbQ==',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: {
            randomStr: 'blockPuzzle',
            code: res.code,
            grant_type: 'password'
          }
        }
      )
      .then((res) => {
        const tokenType = res.token_type.charAt(0).toUpperCase() + res.token_type.substr(1);
        tokenFn.set(`${tokenType} ${res.access_token}`);
        Cookies.set('tenantId', `${res.user_info.tenantId}`);
        setToken(`${tokenType} ${res.access_token}`);
      });
  };

  const logout = () => {
    tokenFn.remove();
    window.location.reload();
  };

  // 登陆成功后获取 用户信息和菜单
  const initAfterLogin = () => {
    return Promise.all([api.user.getCurrentUser(), api.menu.getCurrentMenu()]).then((res) => {
      setUser(res[0]);
      setMenu(res[1]);
    });
  };

  return {
    login,
    logout,
    initAfterLogin
  };
}
