import React, {useContext, useState} from 'react';
import './FavoriteSection.scss';
import ListItems from '../../component/ListItems';

export const FavoriteSection = (props) => {
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>Favorite
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
