import React, {useState, useEffect} from 'react';
import './UserNavbar.scss';
import UserOption from './UserOption';

export const UserNavbar = (props) => {
  return (
    <div className="userNavbar-wrapper">
      <img src={props.avatar} />
      <div className="userDropdown">
        <button className="optionBtn" onClick={props.onClickUserOption}>
          <p>{props.userName}</p>
          <i
            className={
              props.isClickedUserOption
                ? 'fa fas fa-caret-up fa-lg'
                : 'fa fas fa-caret-down fa-lg'
            }
          ></i>
        </button>
        <UserOption
          userOption={props.userOption}
          isClickedUserOption={props.isClickedUserOption}
        />
      </div>
    </div>
  );
};
export default UserNavbar;
