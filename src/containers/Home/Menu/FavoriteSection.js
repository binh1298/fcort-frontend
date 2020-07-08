import React, {useContext, useState} from 'react';
import './FavoriteSection.scss';
import ListItems from '../../../component/ListItems';
import RemoveFavoriteGroup from './RemoveFavoriteGroup';

export const FavoriteSection = (props) => {
  const handleRemoveFavoriteGroup = async (e) => {
    await RemoveFavoriteGroup(e);
    props.handleFetch();
  };
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>
        Favorite
      </p>
      <ListItems
        list={props.favoriteList}
        icon={<i className="fa fas fa-hashtag"></i>}
        iconRemote="fa fa-trash"
        labelRemote="Remove"
        chooseChatTarget={props.chooseChatTarget}
        onClick={(e) => handleRemoveFavoriteGroup(e)}
      />
    </div>
  );
};
export default FavoriteSection;
