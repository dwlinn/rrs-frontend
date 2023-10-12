import { ProTable } from '@ant-design/pro-components';

const TableList = (props) => {
  const { rowKey, headerTitle, columns, data } = props;

  return (
    <ProTable
      search={false}
      rowKey={rowKey}
      headerTitle={headerTitle}
      columns={columns}
      dataSource={data}
    />
  );
};

export default TableList;
