import React, {useState, useEffect, useContext} from 'react';
import './GroupDetailMenu.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import ListUsers from '../../../../component/ListUsers';
import DeleteMembersDialog from './DeleteMembersDialog';
import AddMembersDialog from './AddMembersDialog';
import LocalStorageUtils from '../../../../utils/LocalStorageUtils';
import {get} from '../../../../utils/ApiCaller';

export const GroupDetailMenu = ({
  membersList,
  setMembersList,
  deleteMembersDialogStatus,
  addMembersDialogStatus,
  setIsClickedDeleteMembersDialog,
  setIsClickedAddMembersDialog,
  groupDetailUserTargetID,
  setGroupDetailUserTargetID,
  groupInfo,
}) => {
  const theme = useContext(ThemeContext);
  const stylesPlusIcon = {
    color: theme.palette.groupDetail.plusIconColor,
  };
  const stylesMinusIcon = {
    color: theme.palette.groupDetail.minusIConColor,
  };
  const stylesTitle = {
    color: theme.palette.groupDetail.titleColor,
  };
  const [allUsers, setAllUsers] = useState([]);
  const usersNotInGroupFetching = async () => {
    //Call the server
    try {
      const response = await get('/users', {});
      if (response.data.success) {
        setAllUsers(response.data.data);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  useEffect(() => {
    usersNotInGroupFetching();
  }, [addMembersDialogStatus]);
  return (
    <div className="group-detail-menu-wrapper">
      <AddMembersDialog
        groupInfo={groupInfo}
        setMembersList={setMembersList}
        dialogStatus={addMembersDialogStatus}
        setIsClickedAddMembersDialog={() => setIsClickedAddMembersDialog(false)}
        groupDetailUserTargetID={groupDetailUserTargetID}
        setGroupDetailUserTargetID={setGroupDetailUserTargetID}
        allUsers={allUsers}
      />
      <DeleteMembersDialog
        groupInfo={groupInfo}
        setMembersList={setMembersList}
        dialogStatus={deleteMembersDialogStatus}
        setIsClickedDeleteMembersDialog={() => setIsClickedDeleteMembersDialog(false)}
        groupDetailUserTargetID={groupDetailUserTargetID}
      />
      <div className="group-detail-menu-header">
        <p style={stylesTitle}>EVERYBODY</p>
        <i
          className="fa fas fa-plus"
          style={stylesPlusIcon}
          onClick={() => setIsClickedAddMembersDialog(true)}
        ></i>
      </div>
      <ListUsers listUsers={membersList} setUsersID={setGroupDetailUserTargetID}>
        <i
          className="fa fas fa-minus"
          onClick={() => setIsClickedDeleteMembersDialog(true)}
          style={stylesMinusIcon}
        ></i>
      </ListUsers>
    </div>
  );
};
export default GroupDetailMenu;
