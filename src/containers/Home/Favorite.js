import React from 'react';
import './Favorite.scss';
import ListItems from '../../component/ShowList';

export const Favorite = (props) => {
  return (
    <div className="favorite-wrapper">
      <p>
        <i className="fa fas fa-star"></i>Favorite
      </p>
      <ListItems list={props.favoriteList} symbol="#" />
    </div>
  );
};
export default Favorite;
