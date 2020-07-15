import React, {useState, useEffect} from 'react';
import './UserNavbar.scss';
import UserOption from './UserOption';
import userAvt from '../../../assets/images/userAvt.png';

export const UserNavbar = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="user-navbar-wrapper">
      <img src={props.avatar || userAvt} />
      <div className="userDropdown">
        <button className="optionBtn" onMouseEnter={() => setIsHover(true)}>
          <p>{props.userName}</p>
          <i
            className={
              isHover ? 'fa fas fa-caret-up fa-lg' : 'fa fas fa-caret-down fa-lg'
            }
          >
            <UserOption
              userOption={props.userOption}
              isClickedUserOption={isHover}
              onMouseLeave={() => setIsClickedUserOption(false)}
              onClickViewProfile={props.onClickViewProfile}
            />
          </i>
        </button>
      </div>
    </div>
  );
};
export default UserNavbar;
