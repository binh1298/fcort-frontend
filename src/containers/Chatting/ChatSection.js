import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './ChatSection.scss';

export const ChatSection = (props) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.message.backgroundColor,
  };
  const chat = props.messages.map((object) => (
    <div
      className={object.name === props.username ? 'userMessages' : 'otherMessages'}
      key={object.id}
    >
      <img className="avatarChat" src={props.avatarChat[0].image} />
      <span style={styles}>{object.message}</span>
    </div>
  ));
  return <div className="chat-wrapper">{chat}</div>;
};
export default ChatSection;
