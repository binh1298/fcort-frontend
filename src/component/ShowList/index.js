import React, {useContext, useState} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';

const Items = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.notActiveColor,
  });
  return (
    <li
      style={styles}
      onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
      onMouseOut={() => setStyles({color: theme.palette.navbar.notActiveColor})}
    >
      {props.children}
    </li>
  );
};

const ListItems = (props) => {
  const theList = props.list.map((object) => (
    <Items key={object.id}>
      {props.symbol}
      {object.name}
    </Items>
  ));
  return <ul>{theList}</ul>;
};

export default ListItems;
