import React, {useState, useContext} from 'react';
import Avatar from 'react-avatar-edit';
import ThemeContext from '../../contexts/ThemeContext';
import DialogButton from '../../component/DialogButton';
import ImageCrop from '../ImageCrop';
import './style.scss';
export const MyEditor = ({
  selectedImage,
  setUserProfilePic,
  addGroup,
  onClick,
  setIsClickedAddGroup,
}) => {
  const [editor, setEditor] = useState(null);
  const [scaleValue, setScaleValue] = useState(1);
  const [openCropper, setOpenCropper] = useState(false);

  const setEditorRef = (editor) => setEditor(editor);

  const onCrop = () => {
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      setUserProfilePic(url);
      setIsClickedAddGroup(false);
    }
  };

  const onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleValue);
  };

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
  const theme = useContext(ThemeContext);
  const stylesGroupDialogBg = {
    backgroundColor: theme.palette.groupDialog.backgroundColor,
  };
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
      <div className="groupDialog-background" onClick={onClick}></div>
      <div className="dialogGroupBox" style={stylesDialogGroupBox}>
        <p className="dialogGroupTitle" style={stylesDialogGroupTitle}>
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
          <button
            styles={stylesDialogGroupButton}
            onClick={() => setIsClickedAddGroup(false)}
          >
            Cancel
          </button>
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
export default MyEditor;
