import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

import { useRecoilValue } from 'recoil';
import IconFont from '../iconfont';
import { globalAtom } from '@/store';
import useMenu from '@/hooks/useMenu';

export default function SiderMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const collapsed = useRecoilValue(globalAtom.collapsed);
  const navMenus = useRecoilValue(globalAtom.navMenus);
  const { menus } = useMenu();

  const defaultOpenKeys = [];

  const Logo = useMemo(() => {
    if (collapsed) {
      return <img width={24} alt='logo' src='/src/assets/img/logo-1.png' />;
    }
    return (
      <>
        <img width={24} alt='logo' src='/src/assets/img/logo-1.png' />
        &nbsp; &nbsp; Ant Design
      </>
    );
  }, [collapsed]);

  const onMenuClick = useCallback(
    (menu: NSP.Menu) => {
      navigate(menu.path);
    },
    [navMenus]
  );

  const renderMenu = useCallback(
    (menus: NSP.Menu[], icon?: boolean) => {
      return menus.map((item) => {
        if (item.children?.length) {
          return (
            <Menu.SubMenu
              key={item.path}
              title={item.label}
              icon={icon && <i className={`iconfont ${item.icon} ant-menu-item-icon`}></i>}
            >
              {renderMenu(item.children, false)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item
            key={item.path}
            icon={icon && item.icon && <i className={`iconfont ${item.icon} ant-menu-item-icon`}></i>}
            onClick={() => {
              onMenuClick(item);
            }}
          >
            {item.label}
          </Menu.Item>
        );
      });
    },
    [navMenus]
  );

  return (
    <div className='i-sider'>
      <a className='logo' href='#/'>
        {Logo}
      </a>

      <Menu
        className='i-sider-menu'
        mode='inline'
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[location.pathname]}
        style={{ width: 'auto' }}
      >
        {renderMenu(menus, true)}
      </Menu>
    </div>
  );
}
