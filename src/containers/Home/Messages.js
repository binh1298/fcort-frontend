import React from 'react';
import './Messages.scss';
import ShowList from '../../component/ShowList';

export const Messages = (props) => {
  return (
    <div className="messages-wrapper">
      <p>
        <i className="fa fas fa-comment"></i>Messages
      </p>
      <ShowList list={props.messagesList} icon="fa fas fa-at" />
    </div>
  );
};
export default Messages;