import React, {useState, useEffect, useContext} from 'react';
import './MessagesSection.scss';
import {get} from '../../../utils/ApiCaller';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';
import ListUsers from '../../../component/ListUsers';

export const MessagesSection = () => {
  const usersFerching = async () => {
    try {
      const response = await get('/users', {});
      if (response.data.success) {
        return response.data.data;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const [userList, setUserList] = useState([]);
  const fetchUsers = async () => {
    const tempUserList = await usersFerching();
    setUserList(tempUserList);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="messages-wrapper">
      <p>
        <i className="fa fas fa-comment"></i>Messages
      </p>
      <ListUsers listUsers={userList} usersMessages={true} />
    </div>
  );
};
export default MessagesSection;
