import FormPanel, { JsonElements } from '@/components/Search/FormPanel';
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
    label: '项目编码',
    inputName: 'projectNo',
    element: Input,
    span: 6,
  },
  {
    label: '景点名称',
    inputName: 'spotName',
    element: Input,
    span: 6,
  },
  {
    label: '签约状态',
    inputName: 'signState',
    element: Input,
    span: 6,
  },
];
const addInputs: JsonElements = [
  {
    label: '项目名称',
    inputName: 'projectNo',
    element: Select,
    span: 24,
  },
  {
    label: '申请人姓名',
    inputName: 'projectNo',
    element: Input,
    span: 24,
  },
  {
    label: '申请人手机号',
    inputName: 'projectNo',
    element: Input,
    span: 24,
  },
  {
    label: '身份证号',
    inputName: 'projectNo',
    element: Input,
    span: 24,
  },
  {
    label: '营业执照编码',
    inputName: 'projectNo',
    element: Input,
    span: 24,
  },
  {
    label: '上传身份证号',
    inputName: 'projectNo',
    element: Upload,
    span: 24,
  },
  {
    label: '上传营业执照',
    inputName: 'projectNo',
    element: Upload,
    span: 24,
  },
];
const columns: TableColumnProps[] = [
  {
    title: '项目编码',
    dataIndex: 'projectNo',
  },
  {
    title: '景点名称',
    dataIndex: 'spotName',
  },
  {
    title: '保证金(元)',
    dataIndex: 'bond',
  },
  {
    title: '签约状态',
    dataIndex: 'signState',
  },
  // {
  //   title: '项目名称',
  //   dataIndex: 'productName',
  // },
  // {
  //   title: '项目市价',
  //   dataIndex: 'salePrice',
  // },
  // {
  //   title: '项目低价',
  //   dataIndex: 'agentPrice',
  // },
  // {
  //   title: '佣金金额',
  //   dataIndex: 'commission',
  // },
  // {
  //   title: '所属景点',
  //   dataIndex: 'supplier',
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createAt',
  // },
  // {
  //   title: '核销时间',
  //   dataIndex: 'usedAt',
  // },
  // {
  //   title: '操作',
  //   dataIndex: 'opt',
  // },
];
export default function Trade() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Card>
        <FormPanel searchInputs={inputs}></FormPanel>
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
              申请新项目
            </Button>
            <Modal
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              title="项目申请"
            >
              <FormPanel searchInputs={addInputs} />
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
