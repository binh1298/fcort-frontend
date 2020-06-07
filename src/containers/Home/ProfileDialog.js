import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import './ProfileDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';
import DialogButton from '../../component/DialogButton';
import Avatar from '../../component/Avatar';
import InputFieldsChange from '../../component/InputFieldsChange';
import InputFieldsNotChange from '../../component/InputFieldsNotChange';
import Dialog from '../../component/Dialog';

export const ProfileDialog = (props) => {
  const [isEditOn, setIsEditOn] = useState(false);
  const theme = useContext(ThemeContext);
  const stylesDialogOverlay = {
    backgroundColor: theme.palette.profileDialog.overlayColor,
  };
  const stylesProfileBackround = {
    backgroundColor: theme.palette.profileDialog.boxColor,
  };
  const stylesProfileTitle = {
    color: theme.palette.profileDialog.titleColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.profileDialog.inputBorder,
  };
  const stylesDialogButtonSave = {
    color: theme.palette.profileDialog.btnSubmitColor,
    backgroundColor: theme.palette.profileDialog.btnSaveBgColor,
  };

  const stylesDialogButtonCancel = {
    color: theme.palette.profileDialog.btnSubmitColor,
    backgroundColor: theme.palette.profileDialog.btnCancelBgColor,
  };
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog addGroup={props.viewProfile} onClick={props.onClick}>
      <div className="profile-dialog" style={stylesProfileBackround}>
        <h2 style={stylesProfileTitle}>My Profile</h2>
        <div className="profile-avatar">
          <Avatar href={props.avatar} id={isEditOn ? '' : 'disable-btn-add-avatar'} />
          <div className="btn-edit-profile" onClick={() => setIsEditOn(true)}>
            <button className="btn-edit" id={isEditOn ? 'disable-buttonEditProfile' : ''}>
              <i className="fa fa-pencil"></i>
              <p className="btn-edit-label">Edit</p>
            </button>
          </div>
        </div>
        <div className={isEditOn ? 'profileEdit-Off' : 'profileEdit-On'}>
          <InputFieldsNotChange
            label="FULL NAME:"
            value={props.userName}
            styleTitle={stylesProfileTitle}
            styleBoder={stylesInputBorder}
          />
          <InputFieldsNotChange
            label="GMAIL:"
            value={props.gmail}
            styleTitle={stylesProfileTitle}
            styleBoder={stylesInputBorder}
          />
        </div>

        <div className={isEditOn ? 'profileEdit-On' : 'profileEdit-Off'}>
          <form className="inputFullName" onSubmit={handleSubmit(onSubmit)}>
            <InputFieldsChange
              label="FULL NAME:"
              name="fullname"
              placeholder="Full Name"
              type="text"
              value={props.userName}
              style={stylesProfileTitle}
              register={register}
              errors={errors}
            />
            <InputFieldsNotChange
              label="GMAIL:"
              value={props.gmail}
              styleTitle={stylesProfileTitle}
              styleBoder={stylesInputBorder}
            />
            <a href="#" className="change-password">
              Change Password ?
            </a>
            <div className="btn-submit">
              <DialogButton styles={stylesDialogButtonCancel}>Cancel</DialogButton>
              <DialogButton styles={stylesDialogButtonSave}>Save</DialogButton>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};
export default ProfileDialog;
