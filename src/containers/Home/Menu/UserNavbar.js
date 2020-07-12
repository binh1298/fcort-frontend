import React, {useState, useEffect} from 'react';
import './UserNavbar.scss';
import UserOption from './UserOption';
import userAvt from '../../../assets/images/userAvt.png';

export const UserNavbar = (props) => {
  const [isClickedUserOption, setIsClickedUserOption] = useState(false);
  return (
    <div className="userNavbar-wrapper">
      <img src={props.avatar || userAvt} />
      <div className="userDropdown">
        <button className="optionBtn" onMouseEnter={() => setIsClickedUserOption(true)}>
          <p>{props.userName}</p>
          <i
            className={
              isClickedUserOption
                ? 'fa fas fa-caret-up fa-lg'
                : 'fa fas fa-caret-down fa-lg'
            }
          >
            <UserOption
              userOption={props.userOption}
              isClickedUserOption={isClickedUserOption}
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
