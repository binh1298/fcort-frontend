import React, {useContext, useState, useEffect} from 'react';
import './GroupDetail.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import GroupDetailHeader from './GroupDetailHeader';
import GroupDetailMenu from './GroupDetailMenu';
import LocalStorageUtils from '../../../../utils/LocalStorageUtils';
import {get, remove} from '../../../../utils/ApiCaller';
import DeleteMembersDialog from './DeleteMembersDialog';

export const GroupDetail = ({navbarStatus, chatTarget}) => {
  const theme = useContext(ThemeContext);
  const groupDetailStyles = {
    backgroundColor: theme.palette.groupDetail.backgroundColor,
  };
  const lineStyles = {
    borderColor: theme.palette.groupDetail.lineColor,
  };
  const [membersList, setMembersList] = useState([]);
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
  }, [chatTarget]);
  const membersDeteling = async () => {
    //Call the server
    try {
      const response = await remove(
        `/groups/${chatTarget.id}/members/${groupDetailUserTargetID}`,
        {}
      );
      if (response.data.success) {
        console.log('delete success!');
        setIsClickedDeleteMembersDialog(false);
        setMembersList(response.data.data);
      }
    } catch (ex) {
      console.log('error!');
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const [isClickedDeleteMembersDialog, setIsClickedDeleteMembersDialog] = useState(false);
  const [groupDetailUserTargetID, setGroupDetailUserTargetID] = useState({});
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
          setGroupDetailUserTargetID={setGroupDetailUserTargetID}
        />
        <DeleteMembersDialog
          dialogStatus={isClickedDeleteMembersDialog}
          setIsClickedDeleteMembersDialog={() => setIsClickedDeleteMembersDialog(false)}
          onClick={() => membersDeteling()}
        />
      </div>
    </div>
  );
};
export default GroupDetail;
