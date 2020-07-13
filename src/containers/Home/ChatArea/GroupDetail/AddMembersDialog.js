import React, {useContext, useState} from 'react';
import './AddMembersDialog.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import Dialog from '../../../../component/Dialog';
import SearchBar from '../../../../component/SearchBar';
import ListUsers from '../../../../component/ListUsers';

const AddButton = ({onClick}) => {
  const theme = useContext(ThemeContext);
  const stylesAddMembersButton = {
    backgroundColor: theme.palette.listUsers.btnAddMembersBgColor,
    color: theme.palette.listUsers.btnAddMembersTextColor,
    borderColor: theme.palette.listUsers.btnAddMembersBorderColor,
  };
  const stylesAddedMembersButton = {
    backgroundColor: theme.palette.listUsers.btnAddedMembersBgColor,
    color: theme.palette.listUsers.btnAddedMembersTextColor,
    border: 'none',
    opacity: 1,
    pointerEvents: 'none',
  };
  const [isClicked, setIsClicked] = useState(true);
  return (
    <button
      className="add-members-btn"
      style={isClicked ? stylesAddMembersButton : stylesAddedMembersButton}
      onClick={() => {
        onClick();
        setIsClicked(false);
      }}
    >
      {isClicked ? 'Add' : 'Added'}
    </button>
  );
};

export const AddMembersDialog = ({
  setGroupDetailUserTargetID,
  allUsers,
  groupInfo,
  dialogStatus,
  setIsClickedAddMembersDialog,
  onClick,
}) => {
  const theme = useContext(ThemeContext);
  const stylesAddMembersDialog = {
    backgroundColor: theme.palette.dialog.boxBgColor,
    borderColor: theme.palette.groupDetail.borderAddMembersDialog,
  };
  const stylesAddMembersDialogTitle = {
    color: theme.palette.dialog.titleColor,
  };
  const stylesAddedMembersButton = {
    backgroundColor: theme.palette.listUsers.btnAddedMembersBgColor,
    color: theme.palette.listUsers.btnAddedMembersTextColor,
  };
  return (
    <Dialog dialogStatus={dialogStatus} onClick={setIsClickedAddMembersDialog}>
      <div className="add-members-dialog-wrapper" style={stylesAddMembersDialog}>
        <div className="add-members-dialog-header" style={stylesAddMembersDialogTitle}>
          Invite friends to {groupInfo.name}
        </div>
        <div className="add-members-dialog-selector">
          <SearchBar />
          <div className="list-add-users">
            <ListUsers listUsers={allUsers} setUsersID={setGroupDetailUserTargetID}>
              <div>
                <AddButton onClick={onClick} />
              </div>
            </ListUsers>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default AddMembersDialog;
