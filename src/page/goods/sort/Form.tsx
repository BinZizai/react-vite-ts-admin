import { Form, Input, Select, Button, Space } from 'antd';
import validate from '@/utils/validate';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
};
interface IProps {
  onFinish: (any) => void;
}
const SortForm = (props: IProps) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      key: new Date().getTime(),
      name: '孙悟空',
      age: 800,
      address: '花果山水帘洞'
    });
  };

  return (
    <Form {...layout} form={form} onFinish={props.onFinish} autoComplete='off'>
      <Form.Item name='name' label='名称' rules={[{ required: true, validator: validate.validteName }]}>
        <Input />
      </Form.Item>
      <Form.Item name='age' label='年龄' rules={[{ required: true }]}>
        <Select allowClear>
          <Select.Option value='800'>800</Select.Option>
          <Select.Option value='400'>400</Select.Option>
          <Select.Option value='0'>0</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name='address' label='地址' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space>
          <Button type='primary' htmlType='submit'>
            提交
          </Button>
          <Button htmlType='button' onClick={onReset}>
            重置
          </Button>
          <Button htmlType='button' onClick={onFill}>
            填充
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SortForm;
