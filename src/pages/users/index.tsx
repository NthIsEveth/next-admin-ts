import FormPanel, { JsonElements } from '@/components/Search/FormPanel';
import useCreateForm from '@/utils/useCreateForm';
import {
  Button,
  Card,
  Input,
  Modal,
  Pagination,
  Select,
  Space,
  Table,
  TableColumnProps,
  Upload,
} from '@arco-design/web-react';
import React, { useState } from 'react';
const inputs: JsonElements = [
  {
    label: '用户名',
    inputName: 'name',
    element: Input,
    span: 6,
  },
  {
    label: '机构名称',
    inputName: 'agentName',
    element: Input,
    span: 6,
  },
  {
    label: '机构编号',
    inputName: 'agentNo',
    element: Input,
    span: 6,
  },
  {
    label: '手机号',
    inputName: 'phone',
    element: Input,
    span: 6,
  },
  {
    label: '法人',
    inputName: 'legalPersonName',
    element: Input,
    span: 6,
  },
];
const addInputs: JsonElements = [
  {
    label: '用户名',
    inputName: 'name',
    element: Input,
    span: 24,
    required: true,
  },
  {
    label: '手机号',
    inputName: 'phone',
    element: Input,
    span: 24,
  },
  {
    label: '密码',
    inputName: 'password',
    element: Input,
    span: 24,
  },
  {
    label: '确认密码',
    inputName: 'confirmPassword',
    element: Input,
    span: 24,
  },
  {
    label: '用户类别',
    inputName: 'userType',
    element: Select,
    required: true,
    span: 24,
  },
  {
    label: '商户名称',
    inputName: 'agentName',
    element: Input,
    span: 24,
  },
  {
    label: '法人',
    inputName: 'legalPersonName',
    element: Input,
    span: 24,
  },
  {
    label: '营业执照编码',
    inputName: 'businessLicense',
    element: Input,
    span: 24,
  },
];
const columns: TableColumnProps[] = [
  {
    title: '用户名',
    dataIndex: 'name',
  },
  {
    title: '商户名称',
    dataIndex: 'agentName',
  },
  {
    title: '手机号码',
    dataIndex: 'phone',
  },
  {
    title: '保证金(元)',
    dataIndex: 'bond',
  },
  {
    title: '签约状态',
    dataIndex: 'signState',
  },
];
export default function Users() {
  const [visible, setVisible] = useState(false);
  const { baseOnChange, form } = useCreateForm(inputs);
  const { baseOnChange: addBaseOnChange, form: addForm } =
    useCreateForm(addInputs);
  return (
    <div>
      <Card>
        <FormPanel
          searchInputs={inputs}
          baseOnChange={baseOnChange}
          form={form}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Space>
            <Button>重置</Button>
            <Button type="primary">搜索</Button>
          </Space>
        </div>
      </Card>
      <Card style={{ marginTop: '12px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Button type="primary" onClick={() => setVisible(true)}>
              新增用户
            </Button>
            <Modal
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              title="添加用户"
            >
              <FormPanel
                searchInputs={addInputs}
                form={addForm}
                baseOnChange={addBaseOnChange}
              />
            </Modal>
          </div>
          <Table columns={columns} pagination={false} border />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Pagination total={100} />
          </div>
        </Space>
      </Card>
    </div>
  );
}
