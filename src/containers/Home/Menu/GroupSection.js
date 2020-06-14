import React, {useState, useContext, useEffect} from 'react';
import './GroupSection.scss';
import ListItems from '../../../component/ListItems';
import ThemeContext from '../../../contexts/ThemeContext';
import AddFavoriteGroup from './AddFavoriteGroup';

export const GroupSection = (props) => {
  const theme = useContext(ThemeContext);
  const [checkGroupExist, setCheckGroupExist] = useState(true);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  const handleAddFavoriteGroup = async (e) => {
    const check = await AddFavoriteGroup(e);
    props.handleFetch();
    setCheckGroupExist(check);
  };
  return (
    <div className="group-wrapper" onClick={() => setCheckGroupExist(true)}>
      <p>
        <i className="fa fas fa-users"></i>
        Group
        <i
          className="fa fas fa-plus"
          style={styles}
          onClick={props.onClick}
          onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
          onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
        ></i>
      </p>
      <span className={checkGroupExist ? 'favorite-notify-off' : undefined}>
        (The group has been added to favorites.)
      </span>
      <ListItems
        list={props.groupList}
        icon={<i className="fa fas fa-hashtag"></i>}
        iconRemote="fa fas fa-star"
        labelRemote="Add to favorite"
        chooseChatTarget={props.chooseChatTarget}
        onClick={(e) => handleAddFavoriteGroup(e)}
      />
    </div>
  );
};
export default GroupSection;
