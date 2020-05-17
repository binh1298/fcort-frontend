import React, {useContext, useState} from 'react';
import './Favorite.scss';
import ListItems from '../../component/ListItems';

export const Favorite = (props) => {
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>Favorite
      </p>
      <ListItems list={props.favoriteList} icon="fa fas fa-hashtag" />
    </div>
  );
};
export default Favorite;
