import { CameraOutlined, CarOutlined, PhoneOutLined, UserOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Card, Col, Form, Input, Modal, Row, Select, Space } from 'antd';
import { useState } from 'react';
import './index.less';
import { columns1, columns2, columns3, data1, data2, data3, modalFormData } from './listConfig';
import TableList from './TableList';

const AreaManage = () => {
  const { Search } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const showModal = (row) => {
    setIsModalOpen(true);
    setCurrentRow(row);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch = (value, _e, info) => {};

  const terraceColum = columns3.map((item) => {
    if (item.key === 'cctv')
      return {
        ...item,
        render: (_, record) => <CameraOutlined onClick={() => showModal(record)} />,
      };
    return item;
  });

  const handleFooterSelectChange = (value) => {};

  const ModalFooter = () => {
    return (
      <Select
        defaultValue="联系司机"
        onChange={handleFooterSelectChange}
        options={[
          { value: '在线联系', label: '在线联系' },
          { value: '电话联系', label: '电话联系' },
          { value: '短信联系', label: '短信联系' },
        ]}
      />
    );
  };

  const renderLabel = (key) => {
    let labelNode = <div>{key}</div>;
    switch (key) {
      case '车牌号':
        labelNode = (
          <div>
            <CarOutlined />
            车牌号
          </div>
        );
        break;
      case '司机姓名':
        labelNode = (
          <div>
            <UserOutlined />
            司机姓名
          </div>
        );
        break;
      case '联系电话':
        labelNode = (
          <div>
            <PhoneOutLined />
            联系电话
          </div>
        );
        break;
      default:
        break;
    }
    return labelNode;
  };

  const getModalFormFields = () => {
    const children = [];
    for (let key in modalFormData) {
      if (modalFormData.hasOwnProperty(key)) {
        children.push(
          <Col
            span={8}
            key={key}
            className={key === '车牌号' ? 'areaManage-modalForm-cardItem' : ''}
          >
            <Form.Item
              label={key}
              // label={renderLabel(key)}
            >
              {modalFormData[key]}
            </Form.Item>
          </Col>,
        );
      }
    }
    return children;
  };

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
      <TableList rowKey="key" headerTitle="园区车辆监控" columns={columns1} data={data1} />
      <Space />
      <TableList rowKey="key" headerTitle="月台车辆监控" columns={columns2} data={data2} />
      <ProCard title="园区监控总览" bordered headerBordered gutter={16}>
        内部卡片内容
        {/* <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard>
        <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard> */}
      </ProCard>
      <TableList
        rowKey="key"
        headerTitle="装卸搬运机器人监测"
        columns={terraceColum}
        data={data3}
      />

      <Modal
        width={800}
        title={'月台' + currentRow?.terraceNo}
        footer={ModalFooter}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card title="车辆信息" extra={<Button danger>异常上报</Button>} style={{ width: '100%' }}>
          <Form>
            <Row gutter={24}>{getModalFormFields()}</Row>
          </Form>
        </Card>
      </Modal>
    </PageContainer>
  );
};
export default AreaManage;
