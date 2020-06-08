import React, {useState} from 'react';
import './style.scss';
import AvatarUpload from '../../component/AvatarUpload';
import userAvt from '../../assets/images/userAvt.png';

export const ProfileAvatar = (props) => {
  const [userProfilePic, setUserProfilePic] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [openCropper, setOpenCropper] = useState(false);
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
      setOpenCropper(true);
      setSelectedImage(file);
    }
  };
  return (
    <div>
      <AvatarUpload
        addGroup={isClicked}
        onClick={() => {
          setIsClicked(false);
        }}
        setUserProfilePic={setUserProfilePic}
        selectedImage={selectedImage}
        setIsClicked={setIsClicked}
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
