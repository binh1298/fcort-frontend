import React, {useContext, useState} from 'react';
import './FavoriteSection.scss';
import ListItems from '../../../component/ListItems';
import RemoveFavoriteGroup from './RemoveFavoriteGroup';

export const FavoriteSection = ({chooseGroupInfo, favoriteList, handleFetch}) => {
  const handleRemoveFavoriteGroup = async (e) => {
    await RemoveFavoriteGroup(e);
    handleFetch();
  };
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>
        Favorite
      </p>
      <ListItems
        list={favoriteList}
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
