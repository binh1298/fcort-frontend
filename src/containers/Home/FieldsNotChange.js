import React from 'react';
import './FieldsNotChange.scss';

const FieldsNotChange = ({label, value, styleTitle, styleBoder}) => {
  return (
    <div className="fields-notChange">
      <h4 style={styleTitle}>{label}</h4>
      <p style={styleBoder}>{value}</p>
    </div>
  );
};

export default FieldsNotChange;
