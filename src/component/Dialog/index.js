import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss';

export const Dialog = (props) => {
  const theme = useContext(ThemeContext);
  const stylesGroupDialogBg = {
    backgroundColor: theme.palette.groupDialog.backgroundColor,
  };
  return (
    <div className={props.dialogStatus ? 'dialogOn' : 'dialogOff'}>
      <div
        className="groupDialog-background"
        style={stylesGroupDialogBg}
        onClick={props.onClick}
      ></div>
      {props.children}
    </div>
  );
};
export default Dialog;
