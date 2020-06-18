import React, {useContext, useState, useEffect} from 'react';
import './GroupDetail.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import GroupDetailHeader from './GroupDetailHeader';
import GroupDetailMenu from './GroupDetailMenu';
import LocalStorageUtils from '../../../../utils/LocalStorageUtils';
import {get, post, remove} from '../../../../utils/ApiCaller';
import DeleteMembersDialog from './DeleteMembersDialog';
import AddMembersDialog from './AddMembersDialog';

export const GroupDetail = ({updateGroupDetail, navbarStatus, chatTarget}) => {
  const theme = useContext(ThemeContext);
  const groupDetailStyles = {
    backgroundColor: theme.palette.groupDetail.backgroundColor,
  };
  const lineStyles = {
    borderColor: theme.palette.groupDetail.lineColor,
  };
  const memberFetching = async () => {
    //Call the server
    try {
      const response = await get(`/groups/${chatTarget.id}/members`, {});
      if (response.data.success) {
        return response.data.data;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const fetchMembers = async () => {
    const tempMembersList = await memberFetching();
    await setMembersList(tempMembersList);
  };
  useEffect(() => {
    if (Object.entries(chatTarget).length !== 0) {
      fetchMembers();
    }
  }, [chatTarget, updateGroupDetail]);
  const membersDeteling = async () => {
    //Call the server
    try {
      const response = await remove(
        `/groups/${chatTarget.id}/members/${groupDetailUserTargetID}`,
        {}
      );
      if (response.data.success) {
        setIsClickedDeleteMembersDialog(false);
        setMembersList(response.data.data);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const membersAdding = async () => {
    //Call the server
    try {
      const response = await post(
        `/groups/${chatTarget.id}/members/${groupDetailUserTargetID}`,
        {},
        {}
      );
      if (response.data.success) {
        setMembersList(response.data.data);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const usersFetching = async () => {
    //Call the server
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
  const fetchUsers = async () => {
    const tempAllUsers = await usersFetching();
    setAllUsers(tempAllUsers);
  };
  useEffect(() => {
    fetchUsers();
  }, [isClickedAddMembersDialog]);
  const [membersList, setMembersList] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isClickedDeleteMembersDialog, setIsClickedDeleteMembersDialog] = useState(false);
  const [isClickedAddMembersDialog, setIsClickedAddMembersDialog] = useState(true);
  const [groupDetailUserTargetID, setGroupDetailUserTargetID] = useState({});
  const [groupDetailAddMembersID, setGroupDetailAddMembersID] = useState([]);
  return (
    <div
      className={
        navbarStatus
          ? 'groupDetail-context groupDetailOn'
          : 'groupDetail-context groupDetailOff'
      }
      style={groupDetailStyles}
    >
      <div className="groupDetail-wrapper" style={lineStyles}>
        <GroupDetailHeader chatTarget={chatTarget} />
        <GroupDetailMenu
          membersList={membersList}
          onClickDeleteMembersDialog={() => setIsClickedDeleteMembersDialog(true)}
          onClickAddMembersDialog={() => setIsClickedAddMembersDialog(true)}
          setGroupDetailUserTargetID={setGroupDetailUserTargetID}
        />
        <DeleteMembersDialog
          chatTarget={chatTarget}
          dialogStatus={isClickedDeleteMembersDialog}
          setIsClickedDeleteMembersDialog={() => setIsClickedDeleteMembersDialog(false)}
          onClick={() => membersDeteling()}
        />
        <AddMembersDialog
          setGroupDetailUserTargetID={setGroupDetailUserTargetID}
          membersList={membersList}
          allUsers={allUsers}
          chatTarget={chatTarget}
          dialogStatus={isClickedAddMembersDialog}
          setIsClickedAddMembersDialog={() => setIsClickedAddMembersDialog(false)}
          onClick={membersAdding}
        />
      </div>
    </div>
  );
};
export default GroupDetail;
