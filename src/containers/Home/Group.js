import React from 'react';
import './Group.scss';
import ShowList from '../../component/ShowList';

export const Group = (props) => {
  return (
    <div className="group-wrapper">
      <p>
        <i className="fa fas fa-users"></i>Group
      </p>
      <ShowList list={props.groupList} icon="fa fas fa-hashtag" />
    </div>
  );
};
export default Group;
