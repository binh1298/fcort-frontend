import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss';

export const Dialog = ({dialogStatus, onClick, children}) => {
  const theme = useContext(ThemeContext);
  const stylesDialogBackground = {
    backgroundColor: theme.palette.dialog.backgroundColor,
  };
  return (
    <div className={dialogStatus ? 'dialog-on' : 'dialog-off'}>
      <div
        className="dialog-background"
        style={stylesDialogBackground}
        onClick={onClick}
      ></div>
      {children}
    </div>
  );
};
export default Dialog;
