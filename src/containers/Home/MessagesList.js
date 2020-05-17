import React from 'react';
import './MessagesList.scss';
import ListItems from '../../component/ListItems';

export const MessagesList = (props) => {
  return (
    <div className="messages-wrapper">
      <p>
        <i className="fa fas fa-comment"></i>Messages
      </p>
      <ListItems list={props.messagesList} icon="fa fas fa-at" />
    </div>
  );
};
export default MessagesList;
