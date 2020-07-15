import React, {useContext} from 'react';
import './DeleteMembersDialog.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import Dialog from '../../../../component/Dialog';
import DialogButton from '../../../../component/DialogButton';
import {remove} from '../../../../utils/ApiCaller';
import LocalStorageUtils from '../../../../utils/LocalStorageUtils';

export const DeleteMembersDialog = ({
  groupInfo,
  setMembersList,
  dialogStatus,
  setIsClickedDeleteMembersDialog,
  groupDetailUserTargetID,
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
  const membersDeteling = async () => {
    //Call the server
    try {
      const response = await remove(
        `/groups/${groupInfo.id}/members/${groupDetailUserTargetID}`,
        {}
      );
      if (response.data.success) {
        setIsClickedDeleteMembersDialog();
        setMembersList(response.data.data);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
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
          <DialogButton styles={stylesDeleteMembersButton} onClick={membersDeteling}>
            Delete
          </DialogButton>
        </div>
      </div>
    </Dialog>
  );
};
export default DeleteMembersDialog;
