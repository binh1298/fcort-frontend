import React from 'react';
import './UserNavbar.scss';

export const UserNavbar = (props) => {
  return (
    <div className="userNavbar-wrapper">
      <img src={props.avatar} />
      <div className="dropdown">
        <button>
          <p>{props.userName}</p>
          <i className="fa fas fa-caret-down fa-lg"></i>
        </button>
      </div>
    </div>
  );
};
export default UserNavbar;
