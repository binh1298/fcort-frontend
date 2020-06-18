import React from 'react';
import './style.scss';

export const DialogButton = ({styles, onClick, children}) => {
  return (
    <button className="dialog-btn" style={styles} onClick={onClick}>
      {children}
    </button>
  );
};
export default DialogButton;
