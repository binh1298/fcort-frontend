import React, {useState, useContext} from 'react';
import Avatar from 'react-avatar-edit';
import ThemeContext from '../../contexts/ThemeContext';
import DialogButton from '../../component/DialogButton';
import ImageCrop from '../ImageCrop';
import './style.scss';
export const AvatarUpload = ({
  selectedImage,
  setUserProfilePic,
  addGroup,
  onClick,
  setIsClicked,
}) => {
  const [editor, setEditor] = useState(null);
  const [scaleValue, setScaleValue] = useState(1);
  const [openCropper, setOpenCropper] = useState(false);

  const setEditorRef = (editor) => setEditor(editor);

  const onCrop = () => {
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      setUserProfilePic(url);
      setIsClicked(false);
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
