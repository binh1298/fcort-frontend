import React from 'react';
import './Group.scss';
import ListItems from '../../component/ShowList';

export const Group = (props) => {
  return (
    <div className="group-wrapper">
      <p>
        <i className="fa fas fa-users"></i>Group
      </p>
      <ListItems list={props.groupList} />
    </div>
  );
};
export default Group;
