import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './style.scss';
import {put, get} from '../../utils/ApiCaller';
import {LOCALSTORAGE_TOKEN_NAME} from '../../configurations';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
import usePersistedState from '../../utils/usePersistedState';
import AvatarUpload from '../../component/AvatarUpload';
import userAvt from '../../assets/images/userAvt.png';

export const ProfileAvatar = (props) => {
  const [user, setUser] = usePersistedState(LOCALSTORAGE_TOKEN_NAME);
  const [token, setToken] = usePersistedState(LOCALSTORAGE_TOKEN_NAME, '');
  const [userProfilePic, setUserProfilePic] = useState();
  const [selectedImage, setSelectedImage] = useState('');
  const [openCropper, setOpenCropper] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const userID = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME).sub;
  const profilePicChange = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0] || selectedImage;
    const {type} = file;
    if (
      !(
        type.endsWith('jpeg') ||
        type.endsWith('png') ||
        type.endsWith('jpg') ||
        type.endsWith('gif')
      )
    ) {
    } else {
      setIsClicked(true);
      setOpenCropper(true);
      setSelectedImage(file);
    }
  };
  return (
    <div>
      <AvatarUpload
        dialogStatus={isClicked}
        onClick={() => {
          setIsClicked(false);
        }}
        setUserProfilePic={setUserProfilePic}
        setUserProfilePicUpload={props.onClick}
        selectedImage={selectedImage}
        setIsClicked={setIsClicked}
        userID={userID}
      />

      <div className="avatar-wrapper">
        <div className="avatar-cover">
          <img src={userProfilePic || props.href} />
          <div id={props.id}>
            <span>Upload Avt</span>
            <input
              className="fileInput-23-d-3"
              type="file"
              tabIndex="0"
              multiple=""
              accept=".jpg,.jpeg,.png,.gif"
              aria-label="Change Avatar"
              onChange={profilePicChange}
            />
            <i className="fa fa-camera"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileAvatar;
