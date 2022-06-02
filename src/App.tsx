import React, { ComponentType, LazyExoticComponent, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import NotFound from '@/components/404';
import ILayout from '@/components/layout';
import Home from '@/components/home';
import LoadingPage from '@/components/loading';
import LoginPage from './page/login';

import { globalAtom, globalSelector } from '@/store';
import { useRecoilState, useRecoilValue } from 'recoil';
import useLogin from './hooks/useLogin';
import { initLoadIcon, initNotification } from './utils/init';

export default function App() {
  const [local] = useRecoilState(globalAtom.locale);
  useEffect(() => {
    initNotification();
    initLoadIcon();
  }, []);

  return (
    <ConfigProvider locale={local.antd} componentSize='middle'>
      <div className='App'>
        <BrowserRouter>
          <AutoRoutes></AutoRoutes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

/**
 *  动态路由
 */
type LazyPa = () => Promise<{ default: ComponentType<any> }>;

function AutoRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useRecoilValue(globalAtom.token);
  const menuMap = useRecoilValue(globalSelector.menuMap);
  const { initAfterLogin } = useLogin();

  useEffect(() => {
    if (token) {
      initAfterLogin();
    }
  }, [token]);

  /* 路由鉴权拦截 */
  useEffect(() => {
    const isWhiteList = ['/login', '/404'].includes(location.pathname);
    if (!isWhiteList) {
      if (!token) {
        navigate('/login', { replace: true });
      }
    }
  }, [token, location.pathname]);

  /* 路由规则为./page/*\/*\/index.tsx所有的页面会自动注册 */
  const pages = useMemo(() => {
    const localFiles = import.meta.glob('./page/*/*/index.tsx');
    const result: Array<{ path: string; comp: LazyExoticComponent<ComponentType<any>> }> = [];
    for (const key in localFiles) {
      if (Object.prototype.hasOwnProperty.call(localFiles, key)) {
        const path = key.replace(/(.\/page)|(.tsx)/g, '');
        if (menuMap[path]) {
          result.push({
            path: path.slice(1),
            comp: React.lazy(localFiles[key] as LazyPa)
          });
        }
      }
    }
    return result;
  }, [menuMap]);

  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/*'} element={<ILayout />}>
        <Route path='' element={<Home />}></Route>
        {pages.map((item) => (
          <Route key={item.path} path={item.path} element={<item.comp></item.comp>} />
        ))}
        <Route path='*' element={pages.length ? <NotFound /> : <LoadingPage />}></Route>
      </Route>
    </Routes>
  );
}
