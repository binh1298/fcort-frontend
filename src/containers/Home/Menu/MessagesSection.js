import React from 'react';
import './MessagesSection.scss';
import ListItems from '../../../component/ListItems';

export const MessagesSection = (props) => {
  return (
    <div className="messages-wrapper">
      <p>
        <i className="fa fas fa-comment"></i>Messages
      </p>
      <ListItems
        list={props.messagesList}
        icon={<i className="fa fas fa-at"></i>}
        chooseGroupInfo={props.chooseGroupInfo}
      />
    </div>
  );
};
export default MessagesSection;
