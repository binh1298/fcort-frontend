import React, {useContext, useState} from 'react';
import './GroupDetailHeader.scss';
import groupAvt from '../../../../assets/images/groupAvt.png';
import ThemeContext from '../../../../contexts/ThemeContext';
import AvatarUpload from '../../../../component/AvatarUpload';

export const GroupDetailHeader = ({groupInfo}) => {
  const theme = useContext(ThemeContext);
  const stylesLine = {
    borderColor: theme.palette.groupDetail.lineColor,
  };
  const stylesGroupName = {
    color: theme.palette.groupDetail.groupNameColor,
  };
  const [groupProfilePic, setGroupProfilePic] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [openCropper, setOpenCropper] = useState(false);
  const [isClickedAvatar, setIsClickedAvatar] = useState(false);
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
      setIsClickedAvatar(true);
      setOpenCropper(true);
      setSelectedImage(file);
    }
  };
  return (
    <div className="group-detail-header" style={stylesLine}>
      <AvatarUpload
        dialogStatus={isClickedAvatar}
        onClick={() => setIsClickedAvatar(false)}
        setProfilePic={setGroupProfilePic}
        selectedImage={selectedImage}
      />
      <div className="group-detail-avt-wrapper">
        <img className="group-detail-avt" src={groupProfilePic || groupAvt} />
        <span>Change Avt</span>
        <input
          className="fileInput-23-d-3"
          type="file"
          tabIndex="0"
          multiple=""
          accept=".jpg,.jpeg,.png,.gif"
          aria-label="Change Avatar"
          onChange={profilePicChange}
        />
      </div>
      <div className="group-detail-name" style={stylesGroupName}>
        {groupInfo.name}
      </div>
    </div>
  );
};
export default GroupDetailHeader;
