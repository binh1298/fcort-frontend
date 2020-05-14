import React from 'react';
import './style.scss';

const ListItems = (props) => {
  const theList = props.list.map((object) => <li key={object.id}>#{object.name}</li>);
  return <ul>{theList}</ul>;
};

export default ListItems;
