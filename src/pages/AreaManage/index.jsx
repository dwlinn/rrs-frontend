import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Input, Space, Tag } from 'antd';
import TableList from './TableList';

const AreaManage = () => {
  const { Search } = Input;

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const columns1 = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      key: 'orderNo',
    },
    {
      title: '车牌号',
      dataIndex: 'carNo',
      key: 'carNo',
    },
    {
      title: '司机姓名',
      key: 'driverName',
      dataIndex: 'driverName',
    },
    {
      title: '计划入园时间',
      dataIndex: 'inTime',
      key: 'inTime',
    },
    {
      title: '计划出园时间',
      dataIndex: 'outTime',
      key: 'outTime',
    },
    {
      title: '车辆实时位置',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>复制</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const columns2 = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      key: 'orderNo',
    },
    {
      title: '车牌号',
      dataIndex: 'carNo',
      key: 'carNo',
    },
    {
      title: '司机姓名',
      dataIndex: 'driverName',
      key: 'driverName',
    },
    {
      title: '计划到达月台时间',
      dataIndex: 'inTime',
      key: 'inTime',
    },
    {
      title: '计划装卸时间',
      dataIndex: 'operateTime',
      key: 'operateTime',
    },
    {
      title: '计划离开月台时间',
      dataIndex: 'outTime',
      key: 'outTime',
    },
    {
      title: '车辆实时位置',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>复制</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const columns3 = [
    {
      title: '仓库编号',
      dataIndex: 'wareHouseNo',
      key: 'wareHouseNo',
    },
    {
      title: '月台编号',
      dataIndex: 'terraceNo',
      key: 'terraceNo',
    },
    {
      title: '机器人编号',
      key: 'robotNo',
      dataIndex: 'robotNo',
    },
    {
      title: '机器人状态',
      dataIndex: 'robotStatus',
      key: 'robotStatus',
      render: (_, { robotStatus }) => {
        let color = 'geekblue';
        if (robotStatus === '异常') {
          color = 'volcano';
        } else if (robotStatus === '搬运中') {
          color = 'geekblue';
        } else {
          color = 'green';
        }
        return (
          <Tag color={color} key={robotStatus}>
            {' '}
            {robotStatus}
          </Tag>
        );
      },
    },
    {
      title: '任务内容',
      dataIndex: 'orderNo',
      key: 'orderNo',
    },
    {
      title: '任务进度',
      dataIndex: 'orderProgress',
      key: 'orderProgress',
    },
    {
      title: '查看监控',
      dataIndex: 'cctv',
      key: 'cctv',
    },
  ];

  const data = [
    {
      key: '1',
      orderNo: 'RRS23092200001',
      carNo: '皖AB0710',
      address: 'New York No. 1 Lake Park',
      driverName: 'developer',
      inTime: '9月22日8:40',
      operateTime: '9月22日9:15',
      outTime: '9月22日9:20',
      location: 'W14-八达通库',
    },
    {
      key: '2',
      orderNo: 'RRS23092200002',
      carNo: '皖AB0710',
      address: 'London No. 1 Lake Park',
      driverName: 'developer',
      inTime: '9月22日8:50',
      operateTime: '9月22日9:25',
      outTime: '9月22日9:30',
      location: 'W14-八达通库',
    },
    {
      key: '3',
      orderNo: 'RRS23092200003',
      carNo: '皖AB0710',
      address: 'Sydney No. 1 Lake Park',
      driverName: 'developer',
      inTime: '9月22日9:00',
      operateTime: '9月22日9:35',
      outTime: '9月22日9:40',
      location: 'G19-武汉冷柜仓',
    },
  ];

  const data3 = [
    {
      key: '1',
      wareHouseNo: 'K1',
      terraceNo: 'K102',
      robotNo: 'R202324',
      robotStatus: '搬运中',
      orderNo: 'RRS2023092200001',
      orderProgress: '60%',
      cctv: '',
    },
    {
      key: '2',
      wareHouseNo: 'K1',
      terraceNo: 'K103',
      robotNo: 'R202324',
      robotStatus: '休息中',
      orderNo: 'RRS2023092200002',
      orderProgress: '100%',
      cctv: '',
    },
    {
      key: '3',
      wareHouseNo: 'K3',
      terraceNo: 'K106',
      robotNo: 'R202324',
      robotStatus: '异常',
      orderNo: 'RRS2023092200003',
      orderProgress: '机械臂损坏',
      cctv: '',
    },
  ];

  return (
    <PageContainer
      extra={[
        <Search
          key="1"
          placeholder="请输入运单号"
          allowClear
          enterButton="搜索"
          style={{ width: 304, float: 'right' }}
          onSearch={onSearch}
        />,
      ]}
    >
      <TableList rowKey="key" headerTitle="园区车辆监控" columns={columns1} data={data} />
      <Space />
      <TableList rowKey="key" headerTitle="月台车辆监控" columns={columns2} data={data} />
      <ProCard title="园区监控总览" bordered headerBordered gutter={16}>
        内部卡片内容
        {/* <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard>
        <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard> */}
      </ProCard>
      <TableList rowKey="key" headerTitle="装卸搬运机器人监测" columns={columns3} data={data3} />
    </PageContainer>
  );
};
export default AreaManage;
