import React, {useContext, useState} from 'react';
import './GroupDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';

export const GroupDialog = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useContext(ThemeContext);
  const stylesGroupDialogBg = {
    backgroundColor: theme.palette.dialog.backgroundColor,
  };
  const stylesDialogGroupBox = {
    backgroundColor: theme.palette.dialog.boxBgColor,
  };
  const stylesDialogGroupTitle = {
    color: theme.palette.dialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.dialog.buttonColor,
    backgroundColor: theme.palette.dialog.buttonBgColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.dialog.inputBorder,
  };
  const stylesInputBorderFocus = {
    borderColor: theme.palette.dialog.inputBorderFocus,
  };
  return (
    <div className={props.addGroup ? 'dialogOn' : 'dialogOff'}>
      <div
        className="groupDialog-background"
        style={stylesGroupDialogBg}
        onClick={props.onClick}
      ></div>
      <div className="dialogGroupBox" style={stylesDialogGroupBox}>
        <p className="dialogGroupTitle" style={stylesDialogGroupTitle}>
          Add a new group
        </p>
        <div
          className={isFocused ? 'inputGroupName focus' : 'inputGroupName'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <input
            type="text"
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            placeholder="Enter group name"
          />
          <hr className="borderDefault" style={stylesInputBorder} />
          <hr
            className={isFocused ? 'borderHover focus' : 'borderHover'}
            style={stylesInputBorderFocus}
          />
        </div>
        <button className="button-narrow" style={stylesDialogGroupButton}>
          <p>Create</p>
        </button>
      </div>
    </div>
  );
};
export default GroupDialog;
