import React, {useContext} from 'react';
import './DeleteMembersDialog.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import Dialog from '../../../../component/Dialog';
import DialogButton from '../../../../component/DialogButton';

export const DeleteMembersDialog = ({
  groupInfo,
  dialogStatus,
  setIsClickedDeleteMembersDialog,
  onClick,
}) => {
  const theme = useContext(ThemeContext);
  const stylesDeleteMembersDialog = {
    backgroundColor: theme.palette.dialog.boxBgColor,
    borderColor: theme.palette.groupDetail.borderAddMembersDialog,
  };
  const stylesDeleteMembersDialogTitle = {
    color: theme.palette.dialog.titleColor,
  };
  const stylesDeleteMembersDialogText = {
    color: theme.palette.dialog.textColor,
  };
  const stylesDeleteMembersButton = {
    color: theme.palette.dialog.buttonColor,
    backgroundColor: theme.palette.dialog.buttonBgColor,
  };
  return (
    <Dialog dialogStatus={dialogStatus} onClick={setIsClickedDeleteMembersDialog}>
      <div className="delete-members-dialog-wrapper" style={stylesDeleteMembersDialog}>
        <div
          className="delete-members-dialog-header"
          style={stylesDeleteMembersDialogTitle}
        >
          Remove from {groupInfo.name}
        </div>
        <p style={stylesDeleteMembersDialogText}>
          Are you sure you want to delete this person from the conversation? They will no
          longer be able to send or receive new messages.
        </p>
        <div className="dialog-btn-container">
          <button className="btn-cancel" onClick={setIsClickedDeleteMembersDialog}>
            Cancel
          </button>
          <DialogButton styles={stylesDeleteMembersButton} onClick={onClick}>
            Delete
          </DialogButton>
        </div>
      </div>
    </Dialog>
  );
};
export default DeleteMembersDialog;