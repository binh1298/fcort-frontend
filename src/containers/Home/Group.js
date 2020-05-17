import React from 'react';
import './Group.scss';
import ListItems from '../../component/ListItems';

export const Group = (props) => {
  return (
    <div className="group-wrapper">
      <p>
        <i className="fa fas fa-users"></i>Group
      </p>
      <ListItems list={props.groupList} icon={<i className="fa fas fa-hashtag"></i>} />
    </div>
  );
};
export default Group;
