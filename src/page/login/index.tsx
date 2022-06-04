import { useCallback, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import CopyRight from '@/components/copyright';
import IconFont from '@/components/iconfont';
import ValidSlider from '@/components/valid-slider';
import styles from './index.module.less';

import { useRecoilValue } from 'recoil';
import { globalAtom, globalSelector } from '@/store';
import useLogin from '@/hooks/useLogin';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useLogin();
  const system = useRecoilValue(globalAtom.systemConfig);
  const themeConfig = useRecoilValue(globalSelector.themeConfig);
  const initialValues = {
    username: '孙悟空',
    password: '123456'
  };
  const form = useRef<{ username: string; password: string }>(initialValues);
  const validModal = useRef<any>();

  const onFinish = (val: any) => {
    form.current = val;
    validModal.current?.setVisible(true);
  };

  const onOk = ({ code }) => {
    login({ ...form.current, code }).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <div className={styles.container} style={{ background: `url(${themeConfig.loginBackground}) top center no-repeat` }}>
      <div className={styles.login_wrapper}>
        <div className={styles.login_left}>
          <img src={'/src/assets/img/home.jpg'} width='100%' height='100%'></img>
        </div>
        <div className={styles.login_right}>
          <div className={styles.logo}>
            <img src={themeConfig.loginLogo} width='85px' alt='' />
          </div>
          <div className={styles.form}>
            <div className={styles.login_tip}>{system.name}</div>

            <Form
              name='basic'
              size='large'
              wrapperCol={{ span: 24 }}
              initialValues={initialValues}
              onFinish={onFinish}
              autoComplete='off'
            >
              <Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
                <Input
                  autoComplete={''}
                  placeholder='请输入用户名'
                  prefix={<IconFont type='icon-account' style={{ fontSize: 24 }} className='theme-color' />}
                />
              </Form.Item>

              <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password
                  autoComplete={''}
                  placeholder='请输入密码'
                  prefix={<IconFont type='icon-password' style={{ fontSize: 24 }} className='theme-color' />}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{
                    width: '100%',
                    marginTop: 10,
                    borderRadius: 4
                  }}
                >
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className={styles.copy_right}>
        <CopyRight />
      </div>

      <ValidSlider ref={validModal} onOk={onOk} />
    </div>
  );
}
