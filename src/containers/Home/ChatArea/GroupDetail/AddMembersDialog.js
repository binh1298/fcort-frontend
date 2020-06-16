import React, {useContext} from 'react';
import './AddMembersDialog.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import Dialog from '../../../../component/Dialog';
import DialogButton from '../../../../component/DialogButton';

export const AddMembersDialog = ({
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
  return (
    <Dialog dialogStatus={dialogStatus} onClick={setIsClickedAddMembersDialog}>
      <div className="addMembersDialogBox" style={stylesAddMembersDialog}>
        <div className="addMembersDialogTitle" style={stylesAddMembersDialogTitle}></div>
      </div>
    </Dialog>
  );
};
export default AddMembersDialog;
