import React, {useState, useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import './ProfileDialog.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import DialogButton from '../../../component/DialogButton';
import ProfileAvatar from '../../../component/ProfileAvatar';
import InputFieldsChange from '../../../component/InputFieldsChange';
import InputFieldsNotChange from '../../../component/InputFieldsNotChange';
import Dialog from '../../../component/Dialog';
import {put} from '../../../utils/ApiCaller';
import userAvt from '../../../assets/images/userAvt.png';
import {LOCALSTORAGE_TOKEN_NAME} from '../../../configurations';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';
const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME);
import {storage} from '../../../utils/FireBase';

export const ProfileDialog = (props) => {
  const [isEditOn, setIsEditOn] = useState(false);
  const [imageFileUpload, setImageFileUpload] = useState('');
  const theme = useContext(ThemeContext);
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
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = async (data) => {
    //Call the sever
    try {
      if (imageFileUpload) {
        const uploadTask = storage.ref(`/avatar/${user.sub}`).put(imageFileUpload);
        uploadTask.on('state_changed', () => {
          storage
            .ref('avatar')
            .child(user.sub)
            .getDownloadURL()
            .then(async (fireBaseUrl) => {
              const response = await put(
                `/users/${user.sub}`,
                {
                  avatar: fireBaseUrl,
                },
                {}
              );
              if (response.data.success) {
                props.handleFetch();
              }
            });
        });
      }
      const response = await put(
        `/users/${user.sub}`,
        {
          fullname: data.fullname,
        },
        {}
      );
      if (response.data.success) {
        props.handleFetch();
        props.onClick();
        setIsEditOn(false);
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  const handleClickCancel = (event) => {
    event.preventDefault(event);
    setIsEditOn(false);
  };

  return (
    <Dialog dialogStatus={props.viewProfile} onClick={props.onClick}>
      <div className="profile-dialog" style={stylesProfileBackround}>
        <h2 style={stylesProfileTitle}>My Profile</h2>
        <div className="profile-avatar" id={isEditOn ? 'disable-edit-profile' : ''}>
          <div className="avatar-container">
            <ProfileAvatar src={props.avatar || userAvt} id="disable-btn-add-avatar" />
          </div>
          <div className="btn-edit-profile" onClick={() => setIsEditOn(true)}>
            <button className="btn-edit">
              <i className="fa fa-pencil"></i>
              <p className="btn-edit-label">Edit</p>
            </button>
          </div>
        </div>
        <div className={isEditOn ? 'profile-edit-off' : 'profile-edit-on'}>
          <InputFieldsNotChange
            label="FULL NAME:"
            value={props.fullname}
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

        <div className={isEditOn ? 'profile-edit-on' : 'profile-edit-off'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProfileAvatar
              src={props.avatar || userAvt}
              onClickUpload={(imageFile) => setImageFileUpload(imageFile)}
            />
            <InputFieldsChange
              label="FULL NAME:"
              name="fullname"
              placeholder="Full Name"
              type="text"
              value={props.fullname}
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
              <button className="btn-cancel" onClick={handleClickCancel}>
                Cancel
              </button>
              <DialogButton styles={stylesDialogButtonSave}>Save</DialogButton>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};
export default ProfileDialog;
