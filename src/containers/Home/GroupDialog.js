import React, {useContext, useState} from 'react';
import './GroupDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';

export const GroupDialog = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useContext(ThemeContext);
  const stylesGroupDialogBg = {
    backgroundColor: theme.palette.groupDialog.backgroundColor,
  };
  const stylesDialogGroupBox = {
    backgroundColor: theme.palette.groupDialog.boxBgColor,
  };
  const stylesDialogGroupTitle = {
    color: theme.palette.groupDialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.groupDialog.buttonColor,
    backgroundColor: theme.palette.groupDialog.buttonBgColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.groupDialog.inputBorder,
  };
  const stylesInputBorderFocus = {
    borderColor: theme.palette.groupDialog.inputBorderFocus,
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
