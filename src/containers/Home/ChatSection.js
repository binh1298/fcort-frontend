import React from 'react';
import './ChatSection.scss';

export const ChatSection = (props) => {
  const chat = props.messages.map((object) => (
    <div
      className={object.name === props.userName ? 'userMessages' : 'otherMessages'}
      key={object.id}
    >
      {object.message}
    </div>
  ));
  return <div className="chat-wrapper">{chat}</div>;
};
export default ChatSection;
