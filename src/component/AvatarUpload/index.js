import React, {useState, useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import DialogButton from '../../component/DialogButton';
import ImageCrop from '../ImageCrop';
import {storage} from '../../utils/FireBase';
import './style.scss';
export const AvatarUpload = ({
  selectedImage,
  setUserProfilePic,
  addGroup,
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

  const onCrop = () => {
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
    }
  };
  const onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleValue);
  };
  const theme = useContext(ThemeContext);
  const stylesDialogGroupBox = {
    backgroundColor: theme.palette.groupDialog.boxBgColorDark,
  };
  const stylesDialogGroupTitle = {
    color: theme.palette.groupDialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.groupDialog.buttonColor,
    backgroundColor: theme.palette.groupDialog.buttonBgColor,
  };
  return (
    <div className={addGroup ? 'dialogOn' : 'dialogOff'}>
      <div className="dialogBox" style={stylesDialogGroupBox}>
        <p className="dialogTitle" style={stylesDialogGroupTitle}>
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
            <button styles={stylesDialogGroupButton} onClick={() => setIsClicked(false)}>
              Cancel
            </button>
          </div>

          <div className="btn-container">
            <DialogButton styles={stylesDialogGroupButton} onClick={onCrop}>
              Save
            </DialogButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvatarUpload;
