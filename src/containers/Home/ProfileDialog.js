import React, {useState, useContext} from 'react';
import './ProfileDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';
import ButtonSaveAndCancel from './ButtonSaveAndCancel';

export const ProfileDialog = (props) => {
  const [isChangeAvatar, setIsChangeAvatar] = useState(false);
  const [isChangeFullName, setIsChangeFullName] = useState(false);
  const [fullName, setFullName] = useState('');
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
  const check = () => {
    var specialChars = '<>@!#$%^&*()_+[]{}?:;|\'"\\,./~`-=';
    if (fullName.length == 0) {
      return false;
    }
    var i;
    for (i = 0; i < specialChars.length; i++) {
      if (fullName.indexOf(specialChars[i]) > -1) {
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
          <div className="avatar-container">
            <a href={props.avatar}>
              <img src={props.avatar} />
            </a>
            <button
              className="profile-button btn-avatar"
              id={isChangeAvatar || isChangeFullName ? 'buttonAvatarOff' : ''}
              onClick={() => setIsChangeAvatar(true)}
            >
              <i className="fa fa-camera"></i>
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
        <div className="profile-fullname-wrap">
          <div className="profile-fullname">
            <div
              className={isChangeFullName ? 'fullname-initialOff' : 'fullname-initialOn'}
            >
              <label style={stylesProfileTitle}>Fullname: </label>
              <br />
              <div className="fullname-container">
                <input
                  type="text"
                  style={stylesInputBorder}
                  value={props.userName}
                  disabled
                />
                <div
                  className="profile-button btn-fullname"
                  id={isChangeAvatar ? 'buttonFullnameOff' : ''}
                >
                  <div>
                    <i className="fa fa-pencil"></i>
                    <p
                      onClick={() => setIsChangeFullName(true)}
                      className="btn-edit-label"
                    >
                      Edit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={isChangeFullName ? 'fullname-changeOn' : 'fullname-changeOff'}
            >
              <label style={stylesProfileTitle}>Fullname: </label>
              <span
                className={check() || fullName.length == 0 ? 'notifyOff' : 'notifyOn'}
              >
                (Fullname doesn't include special characters)
              </span>
              <input
                type="text"
                placeholder="Enter your fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <i className="fa fa-check" id={check() ? 'check-fullname-active' : ''}></i>
              <ButtonSaveAndCancel
                id={check() ? 'profile-submit-fullname' : 'disable-btn-save'}
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
