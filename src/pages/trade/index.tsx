import FormPanel, { JsonElements } from '@/components/Search/FormPanel';
import {
  Button,
  Card,
  Input,
  Pagination,
  Select,
  Space,
  Table,
  TableColumnProps,
} from '@arco-design/web-react';
import React from 'react';
import styles from './style/index.module.less';
const inputs: JsonElements = [
  {
    label: '订单编号',
    inputName: 'orderNo',
    element: Input,
    span: 6,
  },
  {
    label: '交易日期',
    inputName: 'orderDate',
    element: Input,
    span: 6,
  },
  {
    label: '项目名称',
    inputName: 'anme',
    element: Input,
    span: 6,
  },
  {
    label: '服务商名称',
    inputName: 'supplyName',
    element: Select,
    span: 6,
  },
];
const columns: TableColumnProps[] = [
  {
    title: '订单编号',
    dataIndex: 'orderNo',
  },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
  },
  {
    title: '核销码',
    dataIndex: 'verificationCode',
  },
  {
    title: '项目名称',
    dataIndex: 'productName',
  },
  {
    title: '项目市价',
    dataIndex: 'salePrice',
  },
  {
    title: '项目低价',
    dataIndex: 'agentPrice',
  },
  {
    title: '佣金金额',
    dataIndex: 'commission',
  },
  {
    title: '所属景点',
    dataIndex: 'supplier',
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
  },
  {
    title: '核销时间',
    dataIndex: 'usedAt',
  },
  {
    title: '操作',
    dataIndex: 'opt',
  },
];
export default function Trade() {
  return (
    <div>
      <Card>
        <FormPanel searchInputs={inputs}></FormPanel>
        <div className={styles['search-button']}>
          <Space>
            <Button>重置</Button>
            <Button type="primary">搜索</Button>
          </Space>
        </div>
      </Card>
      <Card style={{ marginTop: '12px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
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
