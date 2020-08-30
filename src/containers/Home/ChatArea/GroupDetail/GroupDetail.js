import React, {useContext, useState, useEffect} from 'react';
import './GroupDetail.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import GroupDetailHeader from './GroupDetailHeader';
import GroupDetailMenu from './GroupDetailMenu';
import LocalStorageUtils from '../../../../utils/LocalStorageUtils';
import {get} from '../../../../utils/ApiCaller';

export const GroupDetail = ({updateGroupDetail, groupDetailStatus, groupInfo}) => {
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
      const response = await get(`/groups/${groupInfo.id}/members`, {});
      if (response.data.success) {
        setMembersList(response.data.data);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  useEffect(() => {
    if (Object.entries(groupInfo).length !== 0) {
      memberFetching();
    }
  }, [groupInfo, updateGroupDetail]);

  const [membersList, setMembersList] = useState([]);
  const [isClickedDeleteMembersDialog, setIsClickedDeleteMembersDialog] = useState(false);
  const [isClickedAddMembersDialog, setIsClickedAddMembersDialog] = useState(false);
  const [groupDetailUserTargetID, setGroupDetailUserTargetID] = useState({});
  return (
    <div
      className={
        groupDetailStatus
          ? 'group-detail-context group-detail-on'
          : 'group-detail-context group-detail-off'
      }
      style={groupDetailStyles}
    >
      <div className="group-detail-wrapper" style={lineStyles}>
        <GroupDetailHeader groupInfo={groupInfo} />
        <GroupDetailMenu
          membersList={membersList}
          setMembersList={setMembersList}
          deleteMembersDialogStatus={isClickedDeleteMembersDialog}
          addMembersDialogStatus={isClickedAddMembersDialog}
          setIsClickedDeleteMembersDialog={setIsClickedDeleteMembersDialog}
          setIsClickedAddMembersDialog={setIsClickedAddMembersDialog}
          groupDetailUserTargetID={groupDetailUserTargetID}
          setGroupDetailUserTargetID={setGroupDetailUserTargetID}
          groupInfo={groupInfo}
        />
      </div>
    </div>
  );
};
export default GroupDetail;
