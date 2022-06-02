import { Avatar, Modal, Row, Space } from 'antd';
import { PoweroffOutlined, SettingOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';
import { globalAtom } from '@/store';
import useLogin from '@/hooks/useLogin';

export default function Header() {
  const system = useRecoilValue(globalAtom.systemConfig);
  const user = useRecoilValue(globalAtom.user);
  const { logout } = useLogin();

  return (
    <Row className='i-header' align='middle' justify='space-between'>
      <Space style={{ fontSize: 16, fontWeight: 700 }}>
        {system.name}
        {'v' + system.version}
        {system.env === 'development' && `  [${system.env}]`}
      </Space>
      <Space align='end' size={16}>
        <Space>
          <SettingOutlined style={{ cursor: 'pointer' }}></SettingOutlined>
        </Space>

        <Row align='middle' style={{ cursor: 'pointer' }}>
          <Avatar size={26} style={{ marginRight: 8 }} src={user?.sysUser?.avatar}></Avatar>
          {user?.sysUser?.username || '用户名'}
        </Row>

        <Space style={{ transform: 'translateY(-2px)' }}>|</Space>

        <Row
          align='middle'
          style={{ cursor: 'pointer' }}
          onClick={() => {
            Modal.confirm({
              title: '确认退出系统',
              onOk: () => {
                logout();
              }
            });
          }}
        >
          <PoweroffOutlined style={{ marginRight: 8 }} />
          退出
        </Row>
      </Space>
    </Row>
  );
}
