import React from 'react';
import './ButtonEditProfile.scss';
const ButtonEditProfile = ({id}) => {
  return (
    <button className="btn-edit" id={id}>
      <i className="fa fa-pencil"></i>
      <p className="btn-edit-label">Edit</p>
    </button>
  );
};

export default ButtonEditProfile;
