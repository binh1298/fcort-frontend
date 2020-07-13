import React, {useContext, useState} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';

const Items = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  const [isHoverItem, setIsHoverItem] = useState(false);
  const [isHoverIcon, setIsOnHoverIcon] = useState(false);
  const handleHoverOver = () => {
    setIsHoverItem(true);
    setStyles({color: theme.palette.navbar.titleColor});
  };
  const handleHoverOut = () => {
    setIsHoverItem(false);
    setStyles({color: theme.palette.navbar.hoverColor});
  };
  return (
    <li
      style={styles}
      onMouseOver={() => handleHoverOver()}
      onMouseOut={() => handleHoverOut()}
      onClick={props.isClick}
      className="item"
    >
      <p className="item-name">
        {props.children}
        {props.name}
      </p>
      <div
        className={isHoverItem ? 'icon-container' : 'icon-container-off'}
        onClick={() => props.onClick(props.id)}
      >
        <i
          className={props.iconRemote}
          onMouseOver={() => setIsOnHoverIcon(true)}
          onMouseOut={() => setIsOnHoverIcon(false)}
        >
          <div className={isHoverIcon ? 'icon-label' : 'icon-label-off'}>
            <p>{props.labelRemote}</p>
          </div>
        </i>
      </div>
    </li>
  );
};

export const ListItems = (props) => {
  const list = props.list.map((object) => (
    <Items
      key={object.id}
      name={object.name}
      isClick={() => props.chooseGroupInfo(object)}
      iconRemote={props.iconRemote}
      labelRemote={props.labelRemote}
      onClick={(e) => props.onClick(e)}
      id={object.id}
    >
      {props.icon}
    </Items>
  ));
  return <ul className="list-items-name">{list}</ul>;
};

export default ListItems;
