import React from 'react';
import './style.scss';

const InputFieldsNotChange = ({label, value, styleTitle, styleBoder}) => {
  return (
    <div className="fields-not-change">
      <h4 style={styleTitle}>{label}</h4>
      <p style={styleBoder}>{value}</p>
    </div>
  );
};

export default InputFieldsNotChange;
