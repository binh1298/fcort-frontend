import React, {useContext, useState} from 'react';
import './FavoriteSection.scss';
import ListItems from '../../component/ListItems';
import ThemeContext from '../../contexts/ThemeContext';

export const FavoriteSection = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>
        Favorite
        <i
          className="fa fas fa-plus"
          style={styles}
          onClick={props.onClick}
          onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
          onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
        ></i>
      </p>
      <ListItems
        list={props.favoriteList}
        icon={<i className="fa fas fa-hashtag"></i>}
        chooseChatTarget={props.chooseChatTarget}
      />
    </div>
  );
};
export default FavoriteSection;
