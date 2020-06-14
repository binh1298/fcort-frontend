import React, {useState, useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import DialogButton from '../../component/DialogButton';
import ImageCrop from '../ImageCrop';
import {storage} from '../../utils/FireBase';
import './style.scss';
import Dialog from '../Dialog';
export const AvatarUpload = ({
  selectedImage,
  setUserProfilePic,
  dialogStatus,
  onClick,
  setIsClicked,
  userID,
}) => {
  const [editor, setEditor] = useState(null);
  const [scaleValue, setScaleValue] = useState(1);
  const [openCropper, setOpenCropper] = useState(false);

  const setEditorRef = (editor) => setEditor(editor);
  const DataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  };

  const onCrop = (event) => {
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      const imageFile = DataURLtoFile(url, selectedImage);
      setUserProfilePic(url);
      setIsClicked(false);
      const uploadTask = storage.ref(`/avatar/${userID}`).put(imageFile);
      //initiates the firebase side uploading
      uploadTask.on('state_changed', () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref('avatar')
          .child(userID)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setUserProfilePic(fireBaseUrl);
          });
      });
      event.preventDefault();
    }
  };
  const onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleValue);
  };
  const theme = useContext(ThemeContext);
  const stylesDialogAvatarBox = {
    backgroundColor: theme.palette.dialog.boxBgColorDark,
  };
  const stylesDialogAvatarTitle = {
    color: theme.palette.dialog.titleColor,
  };
  const stylesDialogAvatarButton = {
    color: theme.palette.dialog.buttonColor,
    backgroundColor: theme.palette.dialog.buttonBgColor,
  };
  return (
    <Dialog dialogStatus={dialogStatus} onClick={onClick}>
      <div className="dialogBox" style={stylesDialogAvatarBox}>
        <p className="dialogTitle" style={stylesDialogAvatarTitle}>
          Upload your avatar
        </p>
        <div>
          <ImageCrop
            imageSrc={selectedImage}
            setEditorRef={setEditorRef}
            onCrop={onCrop}
            scaleValue={scaleValue}
            onScaleChange={onScaleChange}
          />
          <div className="cancel-btn">
            <button styles={stylesDialogAvatarButton} onClick={onClick}>
              Cancel
            </button>
          </div>

          <div className="btn-container">
            <DialogButton styles={stylesDialogAvatarButton} onClick={onCrop}>
              Save
            </DialogButton>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default AvatarUpload;
