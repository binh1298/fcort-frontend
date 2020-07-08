import React, {useState} from 'react';
import './style.scss';
import ProfileAvatarUpload from '../../component/ProfileAvatarUpload';

export const ProfileAvatar = (props) => {
  const [userProfilePic, setUserProfilePic] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [isClicked, setIsClicked] = useState(false);

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
      setSelectedImage(file);
    }
  };
  const handleSetUserProfilePic = (url, imageFile) => {
    setUserProfilePic(url);
    props.onClickUpload(imageFile);
  };
  return (
    <div className="avatar-container">
      <ProfileAvatarUpload
        dialogStatus={isClicked}
        onClick={(event) => {
          setIsClicked(false), event.preventDefault();
        }}
        setUserProfilePic={handleSetUserProfilePic}
        selectedImage={selectedImage}
        setIsClicked={setIsClicked}
      />

      <div className="avatar-wrapper">
        <div className="avatar-cover">
          <a href={userProfilePic || props.src}>
            <img className="avatar-img" src={userProfilePic || props.src} />
          </a>
          <div id={props.id}>
            <div className="overlay-avatar">
              <p className="label-avt-upload">Avatar Upload</p>
            </div>
            <input
              className="fileInput-23-d-3"
              type="file"
              tabIndex="0"
              multiple=""
              accept=".jpg,.jpeg,.png,.gif"
              aria-label="Change Avatar"
              onChange={profilePicChange}
            ></input>
            <i className="fa fa-camera"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileAvatar;
