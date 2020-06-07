import React from 'react';
import './style.scss';

export const DialogButton = (props) => {
  return (
    <button className="dialogBtn" style={props.styles} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default DialogButton;
