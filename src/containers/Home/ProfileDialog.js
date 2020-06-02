import React, {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import './ProfileDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';
import DialogButton from '../../component/DialogButton';
import Avatar from '../../component/Avatar';
import ButtonEditProfile from './ButtonEditProfile';
import FieldsChange from './FieldsChange';
import FieldsNotChange from './FieldsNotChange';

export const ProfileDialog = (props) => {
  const [currentText, setCurrentText] = useState(props.userName);
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
  const onSubmit = () => {
    console.log(currentText);
  };
  const check = () => {
    var specialChars = '<>@!#$%^&*()_+[]{}?:;|\'"\\,./~`-=';
    if (currentText.length == 0) {
      return false;
    }
    var i;
    for (i = 0; i < specialChars.length; i++) {
      if (currentText.indexOf(specialChars[i]) > -1) {
        return false;
      }
    }
    return true;
  };
  return (
    <div className={props.viewProfile ? 'dialogOn' : 'dialogOff'}>
      <div
        className="dialog-overlay"
        style={stylesDialogOverlay}
        onClick={props.onClick}
      ></div>
      <div className="profile-dialog" style={stylesProfileBackround}>
        <h2 style={stylesProfileTitle}>My Profile</h2>
        <div className="profile-avatar">
          <Avatar href={props.avatar} id={isEditOn ? '' : 'disable-btn-add-avatar'} />
          <div className="btn-edit-profile" onClick={() => setIsEditOn(true)}>
            <ButtonEditProfile id={isEditOn ? 'disable-buttonEditProfile' : ''} />
          </div>
        </div>
        <div className={isEditOn ? 'profileEdit-Off' : 'profileEdit-On'}>
          <FieldsNotChange
            label="FULL NAME:"
            value={props.userName}
            styleTitle={stylesProfileTitle}
            styleBoder={stylesInputBorder}
          />
          <FieldsNotChange
            label="GMAIL:"
            value={props.gmail}
            styleTitle={stylesProfileTitle}
            styleBoder={stylesInputBorder}
          />
        </div>

        <div className={isEditOn ? 'profileEdit-On' : 'profileEdit-Off'}>
          <form className="inputFullName" onSubmit={handleSubmit(onSubmit)}>
            <FieldsChange
              label="FULL NAME:"
              name="fullname"
              placeholder="Full Name"
              type="text"
              style={stylesProfileTitle}
              value={currentText}
              register={register}
              errors={errors}
              onHandleChange={(e) => setCurrentText(e)}
              id={check() ? 'checkChar-false' : 'checkChar-true'}
            />
            <FieldsNotChange
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
    </div>
  );
};
export default ProfileDialog;
