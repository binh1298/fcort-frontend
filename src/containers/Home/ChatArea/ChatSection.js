import React, {useContext} from 'react';
import ThemeContext from '../../../contexts/ThemeContext';
import './ChatSection.scss';

export const ChatSection = (props) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.message.backgroundColor,
  };
  const chat = props.messages.reverse().map((message) => (
    <div
      className={
        message.userInfo.email === props.userInfo.email
          ? 'user-messages'
          : 'other-messages'
      }
      key={message.id}
    >
      <img className="avatar-chat" src={message.userInfo.avatar} />
      <span style={styles}>{message.message}</span>
    </div>
  ));
  return <div className="chat-wrapper">{chat}</div>;
};
export default ChatSection;
