import React, {useEffect, useState} from 'react';
import './FavoriteSection.scss';
import ListItems from '../../../component/ListItems';
import RemoveFavoriteGroup from './RemoveFavoriteGroup';
import {get} from '../../../utils/ApiCaller';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';

export const FavoriteSection = ({chooseGroupInfo, isUpdateFavoriteGroup}) => {
  const FavoriteGroupFetching = async () => {
    //Call the sever
    try {
      console.log('hello');
      const response = await get('/favorites', {});
      if (response.data.success) {
        setFavoriteGroupList(response.data.data);
        if (isFirstFetchFavoriteGroup) {
          if (response.data.data.length) {
            chooseGroupInfo(response.data.data[0]);
          }
          setIsFirstFetchFavoriteGroup(false);
        }
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const [favoriteGroupList, setFavoriteGroupList] = useState([]);
  const [isFirstFetchFavoriteGroup, setIsFirstFetchFavoriteGroup] = useState(true);
  useEffect(() => {
    FavoriteGroupFetching();
  }, [isUpdateFavoriteGroup]);

  const handleRemoveFavoriteGroup = async (e) => {
    await RemoveFavoriteGroup(e);
    FavoriteGroupFetching();
  };
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>
        Favorite
      </p>
      <ListItems
        list={favoriteGroupList}
        icon={<i className="fa fas fa-hashtag"></i>}
        iconRemote="fa fa-trash"
        labelRemote="Remove"
        chooseGroupInfo={chooseGroupInfo}
        onClick={(e) => handleRemoveFavoriteGroup(e)}
      />
    </div>
  );
};
export default FavoriteSection;
