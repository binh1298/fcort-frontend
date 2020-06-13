import React, {useState, useEffect} from 'react';
import './UserNavbar.scss';
import UserOption from './UserOption';
import userAvt from '../../../assets/images/userAvt.png';

export const UserNavbar = (props) => {
  return (
    <div className="userNavbar-wrapper">
      <img src={props.avatar || userAvt} />
      <div className="userDropdown">
        <button
          className="optionBtn"
          onMouseEnter={() => props.onHoverUserOption(true)}
          onMouseLeave={() => props.onHoverUserOption(false)}
        >
          <p>{props.userName}</p>
          <i
            className={
              props.isClickedUserOption
                ? 'fa fas fa-caret-up fa-lg'
                : 'fa fas fa-caret-down fa-lg'
            }
          >
            <UserOption
              userOption={props.userOption}
              isClickedUserOption={props.isClickedUserOption}
              onClickViewProfile={props.onClickViewProfile}
            />
          </i>
        </button>
      </div>
    </div>
  );
};
export default UserNavbar;
