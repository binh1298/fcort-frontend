import React, {useContext, useState} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';

const Items = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  return (
    <li
      style={styles}
      onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
      onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
      onClick={props.isClick}
    >
      <p className="itemName">
        {props.children}
        {props.name}
      </p>
    </li>
  );
};

export const ListItems = ({list, icon, chooseChatTarget}) => {
  const listItems = list.map((object) => (
    <Items key={object.id} name={object.name} isClick={() => chooseChatTarget(object)}>
      {icon}
    </Items>
  ));
  return <ul>{listItems}</ul>;
};

export default ListItems;
