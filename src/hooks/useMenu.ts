import { useRecoilState } from 'recoil';
import { globalAtom } from '@/store';

export default function useMenu() {
  const [menus] = useRecoilState(globalAtom.menus);
  const [navMenus, setNavMenus] = useRecoilState(globalAtom.navMenus);

  // 获取当前路由对应的菜单
  const getMenuByPath = (path: string, all?: boolean) => {
    const patharr = path.split('/');
    const arr: string[] = patharr.map((item, index) => patharr.slice(0, index + 1).join('/')).slice(1);

    const findMenu = (list: NSP.Menu[], path: string) => {
      return list.filter((item) => item.path === path)[0];
    };
    let currentList = [...menus];
    const current: NSP.Menu[] = [];
    arr.forEach((item) => {
      const cm = findMenu(currentList, item);
      if (cm) {
        current.push(cm);
      }
      currentList = cm?.children || currentList;
    });
    if (all) {
      return current;
    }
    return current[current.length - 1];
  };

  //  删除胶囊导航
  const removeNavMenus = (path: string) => {
    const next = navMenus.filter((item) => item.path !== path);
    if (next.length !== navMenus.length) {
      setNavMenus(next);
    }
  };
  // 添加胶囊导航
  const addNavMenus = (menu: NSP.Menu) => {
    if (!navMenus.filter((item) => item.path === menu.path).length) {
      setNavMenus([...navMenus, menu]);
    }
  };
  // 关闭所有胶囊导航
  const closeAllNavMenus = () => {
    setNavMenus([navMenus[0]]);
  };

  return {
    menus,
    getMenuByPath,
    addNavMenus,
    removeNavMenus,
    closeAllNavMenus
  };
}
