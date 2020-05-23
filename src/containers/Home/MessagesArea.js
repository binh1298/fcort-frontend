import React, {useContext} from 'react';
import './MessagesArea.scss';
import ThemeContext from '../../contexts/ThemeContext';
import ChatSection from './ChatSection';

export const MessagesArea = (props) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.message.textInput,
  };
  return (
    <div className="messagesArea-wrapper" onClick={props.onClick}>
      <ChatSection
        messages={props.messages}
        userName={props.userName}
        avatarChat={props.avatarChat}
      />
      <form>
        <input type="text" placeholder="Type a messages..." style={styles}></input>
        <button>
          <i className="fa fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};
export default MessagesArea;
