import React, {useContext, useState} from 'react';
import './AddMembersDialog.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import Dialog from '../../../../component/Dialog';
import DialogButton from '../../../../component/DialogButton';
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
      className="addMembers-btn"
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
  chatTarget,
  dialogStatus,
  setIsClickedAddMembersDialog,
  onClick,
}) => {
  const theme = useContext(ThemeContext);
  const stylesAddMembersDialog = {
    backgroundColor: theme.palette.dialog.boxBgColor,
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
      <div className="addMembersDialog-wrapper" style={stylesAddMembersDialog}>
        <div className="addMembersDialog-header" style={stylesAddMembersDialogTitle}>
          Invite friends to {chatTarget.name}
        </div>
        <div className="addMembersDialog-selector">
          <SearchBar />
          <div className="listAddUsers">
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
