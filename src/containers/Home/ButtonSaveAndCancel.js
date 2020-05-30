import React, {useContext} from 'react';
import './ButtonSaveAndCancel.scss';
import ThemeContext from '../../contexts/ThemeContext';

export const ButtonSaveAndCancel = (props) => {
  const theme = useContext(ThemeContext);
  const styleProfileButtonActive = {
    backgroundColor: theme.palette.dialog.buttonBgColor,
    borderColor: theme.palette.dialog.buttonBgColor,
  };
  const styleProfileButtonInitial = {
    backgroundColor: theme.palette.dialog.inputBorder,
    borderColor: theme.palette.dialog.inputBorder,
  };

  return (
    <div className="btn-submit" id={props.id}>
      <button
        type="button"
        style={styleProfileButtonInitial}
        onClick={() => props.onClick()}
      >
        Cancel
      </button>
      <button
        type="submit"
        style={styleProfileButtonActive}
        onClick={() => props.onClick()}
      >
        Save
      </button>
    </div>
  );
};

export default ButtonSaveAndCancel;
