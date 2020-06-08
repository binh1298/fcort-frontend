import React, {useState, useEffect} from 'react';
import './UserNavbar.scss';
import UserOption from './UserOption';

export const UserNavbar = (props) => {
  return (
    <div className="userNavbar-wrapper">
      <img src={props.avatar} />
      <div className="userDropdown">
        <button className="optionBtn">
          <p onClick={props.onClickViewProfile}>{props.userName}</p>
          <i
            onMouseEnter={() => props.onHoverUserOption(true)}
            onMouseLeave={() => props.onHoverUserOption(false)}
            className={
              props.isClickedUserOption
                ? 'fa fas fa-caret-up fa-lg'
                : 'fa fas fa-caret-down fa-lg'
            }
          >
            <UserOption
              userOption={props.userOption}
              isClickedUserOption={props.isClickedUserOption}
            />
          </i>
        </button>
      </div>
    </div>
  );
};
export default UserNavbar;
