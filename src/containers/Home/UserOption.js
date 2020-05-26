import React, {useContext, useState} from 'react';
import './UserOption.scss';
import {Link} from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

const Options = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  return (
    <li
      style={styles}
      onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
      onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
    >
      {props.name === 'Logout' ? (
        <Link to="/login">{props.name}</Link>
      ) : (
        <p className="optionsName">{props.name}</p>
      )}
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
