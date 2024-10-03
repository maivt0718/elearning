import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserByAPI } from "../../redux/userSlice";
import { Space, Table, Tag } from "antd";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

const ManagerUser = () => {
  const dispatch = useDispatch();
  const {listUser} = useSelector(state => state.userSlice)
  useEffect(() => {
    dispatch(getValueUserByAPI());
  }, []);
  
  const columns = [
    {
        title: "Avarta",
        dataIndex: "avatar",
        key: "avarta",
        render: (text) => <img src={text ? text : `http://fiverrnew.cybersoft.edu.vn/avatar/30-09-2024-10-44-26-1.png`} className='h-10 w-10'/>,
      },
    {
      title: "ID",
      dataIndex: "id",
      key: "ID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text, record) => 
        <Tag color={text == "USER" ? `cyan-inverse` : `pink-inverse`} className={`p-2 m-2`}>
          { text ? text : "USER"}
        </Tag>
      
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className={`space-x-3`}>
          <ButtonCustom content={`Delete`} bgColor={`bg-red-500`} classname={`p-2 m-2`} />
          <ButtonCustom content={`Modify`} classname={`p-2 m-2`} />
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={listUser} />;
    </div>
  );
};

export default ManagerUser;
