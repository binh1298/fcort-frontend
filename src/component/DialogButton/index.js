import React from 'react';
import './style.scss';

export const DialogButton = ({styles, onClick, children}) => {
  return (
    <button className="dialogBtn" style={styles} onClick={onClick}>
      {children}
    </button>
  );
};
export default DialogButton;
