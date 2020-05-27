import React, {useContext, useState} from 'react';
import './UserOption.scss';
import {Redirect} from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import {LOCALSTORAGE_TOKEN_NAME} from '../../configurations';
import LocalStorageUtils from '../../utils/LocalStorageUtils';

const Options = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  const handleLogoutClick = () => {
    LocalStorageUtils.removeItem(LOCALSTORAGE_TOKEN_NAME);
    <Redirect to="/" />;
    window.location.reload(false);
  };
  return (
    <li
      style={styles}
      onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
      onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
    >
      <p className="optionsName" onClick={handleLogoutClick}>
        {props.name}
      </p>
    </li>
  );
};
export const UserOption = (props) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.userOptionDialog.backgroundColor,
  };
  const options = props.userOption.map((object) => (
    <Options key={object.id} name={object.name}></Options>
  ));
  return (
    <ul
      className={
        props.isClickedUserOption ? 'options-wrapper' : 'options-wrapper toggle-option'
      }
      style={styles}
    >
      {options}
    </ul>
  );
};
export default UserOption;
