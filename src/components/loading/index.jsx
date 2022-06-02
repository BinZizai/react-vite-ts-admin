import { Row, Spin } from 'antd';

export default function LoadingPage() {
  return (
    <Row align='middle' justify='center' style={{ height: '100%' }}>
      <Spin size='large'></Spin>
    </Row>
  );
}
