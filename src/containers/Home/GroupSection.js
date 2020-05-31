import React, {useState, useContext, useEffect} from 'react';
import './GroupSection.scss';
import ListItems from '../../component/ListItems';
import ThemeContext from '../../contexts/ThemeContext';

export const GroupSection = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  const [groupList, setGroupList] = useState([]);
  useEffect(() => {
    const groupListing = async () => {
      setGroupList(await props.handleFetch());
    };
    groupListing();
  }, []);
  return (
    <div className="group-wrapper">
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
      <ListItems
        handleFetch={props.handleFetch}
        list={groupList}
        icon={<i className="fa fas fa-hashtag"></i>}
      />
    </div>
  );
};
export default GroupSection;
