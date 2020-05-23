import React from 'react';
import './GroupSection.scss';
import ListItems from '../../component/ListItems';

export const GroupSection = (props) => {
  return (
    <div className="group-wrapper">
      <p>
        <i className="fa fas fa-users"></i>
        Group
        <i className="fa fas fa-plus"></i>
      </p>
      <ListItems list={props.groupList} icon={<i className="fa fas fa-hashtag"></i>} />
    </div>
  );
};
export default GroupSection;
