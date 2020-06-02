import React from 'react';
import './style.scss';
const Avatar = ({href, id}) => {
  return (
    <div className="avatar-container">
      <a href={href}>
        <img src={href} />
      </a>
      <div className="btn-avatar" id={id}>
        <i className="fa fa-camera"></i>
      </div>
    </div>
  );
};
export default Avatar;
