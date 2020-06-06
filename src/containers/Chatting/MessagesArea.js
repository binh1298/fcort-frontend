import React, {useContext} from 'react';
import './MessagesArea.scss';
import ThemeContext from '../../contexts/ThemeContext';
import ChatSection from './ChatSection';
import GroupDetail from './GroupDetail';

export const MessagesArea = ({
  username,
  messages,
  avatarChat,
  onClickMenu,
  navbarStatus,
  onClickGroupDetail,
}) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.message.textInput,
  };
  return (
    <div className="messagesArea-groupDetail">
      <div className="messagesArea-wrapper" onClick={onClickMenu}>
        <ChatSection messages={messages} username={username} avatarChat={avatarChat} />
        <form>
          <input type="text" placeholder="Type a messages..." style={styles}></input>
          <button>
            <i className="fa fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <GroupDetail navbarStatus={navbarStatus} onClick={onClickGroupDetail} />
    </div>
  );
};
export default MessagesArea;
