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
    <div className="messagesArea-wrapper">
      <ChatSection messages={props.messages} userName={props.userName} />
      <input type="text" placeholder="Enter your text" style={styles}></input>
    </div>
  );
};
export default MessagesArea;
