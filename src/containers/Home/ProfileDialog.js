import React, {useState, useContext} from 'react';
import './ProfileDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';
import ButtonSaveAndCancel from './ButtonSaveAndCancel';

export const ProfileDialog = (props) => {
  const [isChangeAvatar, setIsChangeAvatar] = useState(false);
  const [isChangeFullName, setIsChangeFullName] = useState(false);
  const theme = useContext(ThemeContext);
  const stylesDialogOverlay = {
    backgroundColor: theme.palette.dialog.backgroundColor,
  };
  const stylesProfileBackround = {
    backgroundColor: theme.palette.dialog.boxBgColor,
  };
  const stylesProfileTitle = {
    color: theme.palette.dialog.titleColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.dialog.inputBorder,
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
          <div className="avatar-container">
            <a href={props.avatar}>
              <img src={props.avatar} />
            </a>
            <button
              className="profile-button"
              id={isChangeAvatar || isChangeFullName ? 'buttonAvatarOff' : ''}
              onClick={() => setIsChangeAvatar(true)}
            >
              <i className="fa fa-pencil-square-o"></i>
            </button>
          </div>
          <div className={isChangeAvatar ? 'change-avatarOn' : 'change-avatarOff'}>
            <input type="file" id="myfile" className="myfile" />
            <br />
            <ButtonSaveAndCancel
              id="profile-submit-avatar"
              onClick={() => setIsChangeAvatar(false)}
            />
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-fullname">
            <div
              className={isChangeFullName ? 'fullname-initialOff' : 'fullname-initialOn'}
            >
              <label style={stylesProfileTitle}>Fullname: </label>
              <br />
              <input
                type="text"
                style={stylesInputBorder}
                value={props.userName}
                disabled
              />
              <button
                className="profile-button"
                id={isChangeAvatar ? 'buttonFullnameOff' : ''}
                onClick={() => setIsChangeFullName(true)}
              >
                <i className="fa fa-pencil-square-o "></i>
              </button>
            </div>
            <div
              className={isChangeFullName ? 'fullname-changeOn' : 'fullname-changeOff'}
            >
              <label style={stylesProfileTitle}>Fullname: </label>
              <span className="notifyOff">(Doesn't include special characters)</span>
              <input type="text" placeholder="Enter your fullname" />
              <ButtonSaveAndCancel
                id="profile-submit-fullname"
                onClick={() => setIsChangeFullName(false)}
              />
            </div>
          </div>
          <div className="profile-gmail">
            <label style={stylesProfileTitle}>Gmail: </label>
            <br />
            <input type="email" style={stylesInputBorder} value={props.gmail} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDialog;
