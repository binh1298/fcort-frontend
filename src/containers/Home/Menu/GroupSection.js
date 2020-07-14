import React, {useState, useContext, useEffect} from 'react';
import './GroupSection.scss';
import ListItems from '../../../component/ListItems';
import ThemeContext from '../../../contexts/ThemeContext';
import AddFavoriteGroup from './AddFavoriteGroup';
import {get} from '../../../utils/ApiCaller';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';
import GroupDialog from '../Menu/GroupDialog';

export const GroupSection = ({
  chooseGroupInfo,
  onClickOpenAddGroup,
  onClickCloseAddGroup,
  handleFetch,
  dialogStatus,
}) => {
  const groupFetching = async () => {
    //Call the sever
    try {
      const response = await get('/groups', {});
      if (response.data.success) {
        return response.data.data;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const [groupList, setGroupList] = useState([]);
  const fetchGroup = async () => {
    const tempGroupList = await groupFetching();
    await setGroupList(tempGroupList);
    if (tempGroupList.length) {
      chooseGroupInfo(tempGroupList[0]);
    }
  };
  useEffect(() => {
    fetchGroup();
  }, []);
  const theme = useContext(ThemeContext);
  const [checkGroupExist, setCheckGroupExist] = useState(true);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  const handleAddFavoriteGroup = async (e) => {
    const check = await AddFavoriteGroup(e);
    handleFetch();
    setCheckGroupExist(check);
  };
  return (
    <div className="group-wrapper" onClick={() => setCheckGroupExist(true)}>
      <GroupDialog
        dialogStatus={dialogStatus}
        handleFetch={fetchGroup}
        onClick={onClickCloseAddGroup}
      />
      <p>
        <i className="fa fas fa-users"></i>
        Group
        <i
          className="fa fas fa-plus"
          style={styles}
          onClick={onClickOpenAddGroup}
          onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
          onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
        ></i>
      </p>
      <span className={checkGroupExist ? 'favorite-notify-off' : undefined}>
        (The group has been added to favorites.)
      </span>
      <ListItems
        list={groupList}
        icon={<i className="fa fas fa-hashtag"></i>}
        iconRemote="fa fas fa-star"
        labelRemote="Add to favorite"
        chooseGroupInfo={chooseGroupInfo}
        onClick={(e) => handleAddFavoriteGroup(e)}
      />
    </div>
  );
};
export default GroupSection;
