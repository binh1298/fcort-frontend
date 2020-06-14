import React, {useContext} from 'react';
import './DeleteMembersDialog.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import Dialog from '../../../../component/Dialog';
import DialogButton from '../../../../component/DialogButton';

export const DeleteMembersDialog = ({
  dialogStatus,
  setIsClickedDeleteMembersDialog,
  onClick,
}) => {
  const theme = useContext(ThemeContext);
  const stylesDeleteMembersDialog = {
    backgroundColor: theme.palette.dialog.boxBgColor,
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
  const stylesCancelDeleteMembersButton = {
    color: theme.palette.dialog.buttonColor,
    backgroundColor: theme.palette.dialog.buttonBgColor,
  };
  return (
    <Dialog dialogStatus={dialogStatus} onClick={setIsClickedDeleteMembersDialog}>
      <div className="deleteMembersDialogBox" style={stylesDeleteMembersDialog}>
        <div className="deleteMembersDialogTitle" style={stylesDeleteMembersDialogTitle}>
          Remove from group
        </div>
        <p style={stylesDeleteMembersDialogText}>
          Are you sure you want to delete this person from the conversation? They will no
          longer be able to send or receive new messages.
        </p>
        <div className="dialogBtn-container">
          <DialogButton
            styles={stylesCancelDeleteMembersButton}
            onClick={setIsClickedDeleteMembersDialog}
          >
            Cancel
          </DialogButton>
          <DialogButton styles={stylesDeleteMembersButton} onClick={onClick}>
            Delete
          </DialogButton>
        </div>
      </div>
    </Dialog>
  );
};
export default DeleteMembersDialog;
