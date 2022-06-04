import { Button, Form, Input, InputNumber, Modal, Popconfirm, Row, Table, Typography } from 'antd';
import React, { useState } from 'react';
import SortForm from './Form';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {!editing ? (
        children
      ) : (
        <Form.Item name={dataIndex} style={{ margin: 0 }} rules={[{ required: true, message: `Please Input ${title}!` }]}>
          {inputNode}
        </Form.Item>
      )}
    </td>
  );
};

const GoodSortPage: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record: Item) => record.key === editingKey;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        newData.splice(index, 1, { ...newData[index], ...row });
        setData(newData);
      } else {
        newData.push(row);
        setData(newData);
      }
      setEditingKey('');
    } catch (error) {
      console.log('Validate Failed:', error);
    }
  };
  const cancel = () => {
    setEditingKey('');
  };
  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const onFinish = (val) => {
    setIsModalVisible(false);
    setData([val, ...data]);
  };

  const columns = [
    { title: '名字', dataIndex: 'name', width: '25%', editable: true },
    { title: '年龄', dataIndex: 'age', width: '15%', editable: true },
    { title: 'address', dataIndex: 'address', width: '40%', editable: true },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        if (isEditing(record)) {
          return (
            <span>
              <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                Save
              </Typography.Link>
              <Popconfirm title='Sure to cancel?' placement='bottom' onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          );
        }
        return (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      }
    }
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) return col;
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        title: col.title,
        dataIndex: col.dataIndex,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        editing: isEditing(record)
      })
    };
  });

  return (
    <div>
      <Row justify='end' style={{ marginBottom: '16px' }}>
        <Button
          type='primary'
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          新增
        </Button>
      </Row>
      <Form form={form} component={false}>
        <Table
          dataSource={data}
          columns={mergedColumns}
          rowClassName='editable-row'
          bordered
          components={{
            body: {
              cell: EditableCell
            }
          }}
          pagination={{ onChange: cancel }}
        ></Table>
      </Form>

      {isModalVisible && (
        <Modal
          title='新增'
          visible={true}
          onCancel={() => {
            setIsModalVisible(false);
          }}
          footer={null}
        >
          <SortForm onFinish={onFinish}></SortForm>
        </Modal>
      )}
    </div>
  );
};

export default GoodSortPage;
