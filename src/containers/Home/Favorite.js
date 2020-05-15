import React, {useContext, useState} from 'react';
import './Favorite.scss';
import ShowList from '../../component/ShowList';

export const Favorite = (props) => {
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>Favorite
      </p>
      <ShowList list={props.favoriteList} symbol="#" />
    </div>
  );
};
export default Favorite;
