import { Space, Tabs } from 'antd';
import { useEffect } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { globalAtom, globalSelector } from '@/store';
import useMenu from '@/hooks/useMenu';

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navMenus = useRecoilValue(globalAtom.navMenus);
  const menuMap = useRecoilValue(globalSelector.menuMap);
  const { addNavMenus, removeNavMenus, closeAllNavMenus } = useMenu();

  useEffect(() => {
    const item = menuMap[location.pathname];
    item && addNavMenus(item);
  }, [menuMap, location.pathname]);

  return (
    <div className='i-navbar'>
      <Tabs
        size='small'
        type='editable-card'
        style={{ flex: 1 }}
        hideAdd
        activeKey={location.pathname}
        onChange={(path) => {
          navigate(path);
        }}
        onEdit={(key, action) => {
          if (action === 'remove') {
            if (location.pathname === key) {
              navigate('/');
            }
            removeNavMenus(key as string);
          }
        }}
      >
        {navMenus.map((menu, index) => (
          <Tabs.TabPane closable={!!index} tab={menu.label} key={menu.path}></Tabs.TabPane>
        ))}
      </Tabs>

      {navMenus?.length > 1 ? (
        <Space
          style={{ cursor: 'pointer', color: '#1890ff' }}
          onClick={() => {
            closeAllNavMenus();
            navigate('/');
          }}
        >
          <DeleteOutlined />
          关闭全部
        </Space>
      ) : null}
    </div>
  );
}
