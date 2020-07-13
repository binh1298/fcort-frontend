import React, {useState, useContext} from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

export const ChatForm = ({sendChatMessage}) => {
  const [currentMessage, setCurrentMessage] = useState('');

  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.message.textInput,
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendChatMessage(currentMessage);
        setCurrentMessage('');
      }}
    >
      <input
        value={currentMessage}
        type="text"
        placeholder="Type a message..."
        style={styles}
        onChange={(event) => {
          setCurrentMessage(event.target.value);
        }}
      ></input>
      <button>
        <i className="fa fas fa-paper-plane"></i>
      </button>
    </form>
  );
};

export default ChatForm;
