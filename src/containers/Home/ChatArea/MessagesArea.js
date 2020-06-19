import React, {useContext} from 'react';
import './MessagesArea.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import ChatSection from './ChatSection';
import GroupDetail from './GroupDetail/GroupDetail';

export const MessagesArea = ({
  username,
  messages,
  avatarChat,
  navbarStatus,
  chatTarget,
  updateGroupDetail,
  setIsClickedGroupDetail,
}) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.message.textInput,
  };
  return (
    <div className="messagesArea-groupDetail">
      <div className="messagesArea-wrapper">
        <ChatSection messages={messages} username={username} avatarChat={avatarChat} />
        <form>
          <input type="text" placeholder="Type a messages..." style={styles}></input>
          <button>
            <i className="fa fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <div
        className={navbarStatus ? 'navbarOn' : 'navbarOff'}
        onClick={setIsClickedGroupDetail}
      ></div>
      <GroupDetail
        updateGroupDetail={updateGroupDetail}
        navbarStatus={navbarStatus}
        chatTarget={chatTarget}
      />
    </div>
  );
};
export default MessagesArea;
