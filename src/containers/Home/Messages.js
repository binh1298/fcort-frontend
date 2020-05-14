import React from 'react';
import './Messages.scss';
import ListItems from '../../component/ShowList';

export const Messages = (props) => {
  return (
    <div className="messages-wrapper">
      <p>
        <i className="fa fas fa-comment"></i>Messages
      </p>
      <ListItems list={props.messagesList} symbol="@" />
    </div>
  );
};
export default Messages;
