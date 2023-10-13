import { Progress, Space, Tag } from 'antd';

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
      let color = '';
      switch (robotStatus) {
        case 1:
          color = 'geekblue';
          break;
        case 2:
          color = 'green';
          break;
        case 3:
          color = 'volcano';
          break;
        default:
          color = 'geekblue';
          break;
      }

      return (
        <Tag color={color} key={robotStatus}>
          {ROBOT_STATUS_MAP[robotStatus]}
        </Tag>
      );
    },
  },
  {
    title: '任务内容',
    dataIndex: 'orderNo',
    key: 'orderNo',
    copyable: true,
  },
  {
    title: '任务进度',
    dataIndex: 'orderProgress',
    key: 'orderProgress',
    render: (_, { orderProgress, orderProgressMsg = '' }) => {
      const progress = parseInt(orderProgress);
      if (progress === 100) {
        return <div style={{ color: '#1677ff' }}>{orderProgressMsg}</div>;
      } else if (progress !== -1) {
        return (
          <div style={{ display: 'flex' }}>
            <Progress percent={progress} size="small" />
            {orderProgressMsg}
          </div>
        );
      } else {
        return <div style={{ color: '#d4380d' }}>{orderProgressMsg}</div>;
      }
    },
  },
  {
    title: '查看监控',
    dataIndex: 'cctv',
    key: 'cctv',
    align: 'center',
  },
];

const data1 = [
  {
    key: '1',
    orderNo: 'RRS23092200001',
    carNo: '皖AB0710',
    driverName: '马超',
    inTime: '9月22日8:40',
    outTime: '9月22日9:20',
    location: 'W14-八达通库',
  },
  {
    key: '2',
    orderNo: 'RRS23092200002',
    carNo: '皖AC2156',
    driverName: '沈庆东',
    inTime: '9月22日9:20',
    outTime: '9月22日12:30',
    location: 'W14-八达通库',
  },
  {
    key: '3',
    orderNo: 'RRS23092200003',
    carNo: '皖AKN9313',
    driverName: '陈德亮',
    inTime: '9月22日14:50',
    outTime: '9月22日15:00',
    location: 'G19-武汉冷柜仓',
  },
];

const data2 = [
  {
    key: '1',
    orderNo: 'RRS23092200001',
    carNo: '皖AB0710',
    driverName: '马超',
    inTime: '9月22日8:40',
    operateTime: '9月22日9:20',
    outTime: '9月22日9:25',
  },
  {
    key: '2',
    orderNo: 'RRS23092200002',
    carNo: '皖AC2156',
    driverName: '沈庆东',
    inTime: '9月22日9:20',
    operateTime: '9月22日12:30',
    outTime: '9月22日12:35',
  },
  {
    key: '3',
    orderNo: 'RRS23092200003',
    carNo: '皖AKN9313',
    driverName: '陈德亮',
    inTime: '9月22日12:30',
    operateTime: '9月22日14:50',
    outTime: '9月22日14:55',
  },
];

const ROBOT_STATUS_MAP = {
  1: '搬运中',
  2: '休息中',
  3: '发生异常',
};

const data3 = [
  {
    key: '1',
    wareHouseNo: 'K1',
    terraceNo: 'K102',
    robotNo: 'R202324',
    robotStatus: 1,
    orderNo: 'RRS2023092200001',
    orderProgress: '60',
    orderProgressMsg: '1h',
    cctv: '',
  },
  {
    key: '2',
    wareHouseNo: 'K1',
    terraceNo: 'K103',
    robotNo: 'R202324',
    robotStatus: 2,
    orderNo: 'RRS2023092200002',
    orderProgress: '100',
    orderProgressMsg: '已完成',
    cctv: '',
  },
  {
    key: '3',
    wareHouseNo: 'K3',
    terraceNo: 'K106',
    robotNo: 'R202324',
    robotStatus: 3,
    orderNo: 'RRS2023092200003',
    orderProgress: '-1',
    orderProgressMsg: '机械臂损坏',
    cctv: '',
  },
];

const modalFormData = {
  车牌号: '皖AB0710',
  货物种类: '烘干机',
  此时车辆园区任务: '装货',
  司机姓名: '马超',
  货物批次: 'LEC601',
  理论进入离开园区时间: '9：20',
  联系电话: '13765466747',
  货物发出地: '武汉基地',
  异常感知: '无',
  货物接受地: '厦门',
};

export { columns1, columns2, columns3, data1, data2, data3, modalFormData };
