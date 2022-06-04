import React, { useEffect, useMemo } from 'react';
import { Layout, BackTop } from 'antd';
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Outlet, useLocation } from 'react-router-dom';

import LoadingPage from '@/components/loading';
import CopyRight from '@/components/copyright';
import SiderMenu from './SiderMenu';
import IHeader from './Header';
import IBreadcrumb from './IBreadcrumb';
import NavBar from './NavBar';

import { useRecoilState, useRecoilValue } from 'recoil';
import { globalAtom } from '@/store';
import useMenu from '@/hooks/useMenu';
import watermark from '@/utils/water-mark';

export default function ILayout() {
  const location = useLocation();
  const [collapse, setCollapse] = useRecoilState(globalAtom.collapsed);
  const system = useRecoilValue(globalAtom.systemConfig);
  const user = useRecoilValue(globalAtom.user);
  const { menus, getMenuByPath } = useMenu();

  // 水印设置放在Layout里，避免登陆页也加上水印
  useEffect(() => {
    watermark.set(user?.sysUser?.username || '');
  }, [user]);

  // 设置网页标题
  useEffect(() => {
    const menu = getMenuByPath(location.pathname) as MKH.Menu;
    document.title = menu?.name || system.name;
  }, [menus, location.pathname]);

  const Trigger = useMemo(() => {
    return collapse ? (
      <MenuUnfoldOutlined
        style={{ color: '#000' }}
        onClick={() => {
          setCollapse(!collapse);
        }}
      />
    ) : (
      <MenuFoldOutlined
        style={{ color: '#000' }}
        onClick={() => {
          setCollapse(!collapse);
        }}
      />
    );
  }, [collapse]);

  return (
    <Layout className='i-layout'>
      <Sider collapsible collapsed={collapse} width={216} collapsedWidth={60} trigger={Trigger} onCollapse={setCollapse}>
        <SiderMenu />
      </Sider>
      <Layout>
        <Header>
          <IHeader />
        </Header>
        <nav
          style={{
            paddingTop: 12,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 12,
            background: '#fff'
          }}
        >
          <IBreadcrumb />
          <div style={{ marginTop: 6 }}>{<NavBar />}</div>
        </nav>

        <BackTop target={() => document.querySelector('.i-content') as any}></BackTop>
        <Content className='i-content'>
          <React.Suspense fallback={<LoadingPage />}>
            <Outlet></Outlet>
          </React.Suspense>
          <p style={{ marginTop: 12 }}>
            <CopyRight />
          </p>
        </Content>
      </Layout>
    </Layout>
  );
}
