import { Breadcrumb } from 'antd';
import { useMemo } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import useMenu from '@/hooks/useMenu';

export default function IBreadcrumb() {
  const location = useLocation();
  const { menus, getMenuByPath } = useMenu();

  const menu = useMemo(() => {
    return getMenuByPath(location.pathname, true);
  }, [menus, location.pathname]);

  const Items = useMemo(() => {
    if (!menu.length) {
      return (
        <Breadcrumb.Item>
          <Link to='/'>
            <HomeOutlined style={{ marginRight: 4 }}></HomeOutlined>
            首页
          </Link>
        </Breadcrumb.Item>
      );
    }
    return menu.map((item, index) => (
      <Breadcrumb.Item key={'' + item.id}>
        {index === 0 ? <i className={`iconfont ${item?.icon} `} style={{ marginRight: 4 }}></i> : null}
        {item?.name}
      </Breadcrumb.Item>
    ));
  }, [menu]);

  return <Breadcrumb style={{ height: 26 }}>{Items}</Breadcrumb>;
}
