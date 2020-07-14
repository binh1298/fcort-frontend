import React, {useState, useEffect} from 'react';
import './MessagesArea.scss';
import ChatSection from './ChatSection';
import GroupDetail from './GroupDetail/GroupDetail';

import io from 'socket.io-client';
import {API_ROOT_URL} from '../../../configurations';
import ChatForm from './ChatForm';

export const MessagesArea = ({
  userInfo,
  avatarChat,
  navbarStatus,
  groupInfo,
  updateGroupDetail,
  setIsClickedGroupDetail,
}) => {
  console.log('rerendered');
  // Chat logic
  const [messages, setMessages] = useState([]);
  const [isJoinedRoom, setIsJoinedRoom] = useState(false);
  const [socket, setSocket] = useState();
  const ENDPOINT = `${API_ROOT_URL}/chat`;

  useEffect(() => {
    if (!socket) {
      setSocket(io(ENDPOINT));
    }
    if (socket) {
      socket.on('chatToClient', (msg) => {
        setMessages([
          ...messages,
          {id: Math.random(), userInfo: msg.userInfo, message: msg.message},
        ]);
      });

      socket.on('joinedRoom', (room) => {
        setIsJoinedRoom(true);
        console.log('Joined room: ', room);
      });

      socket.on('leftRoom', (room) => {
        console.log('gege', room);
        // socket.emit('qr-topic', match.params.eventId);
      });
    }
    if (socket && groupInfo && groupInfo.id && !isJoinedRoom)
      socket.emit('joinRoom', groupInfo.id);
    {
      console.log(socket);
    }
    return () => {
      if (socket) socket.off('connect');
    };
  }, [groupInfo, messages]);

  const sendChatMessage = (newMessage) => {
    console.log('sending msg');
    if (isJoinedRoom) {
      socket.emit('chatToServer', {userInfo, room: groupInfo.id, message: newMessage});
    } else {
      alert('You must join the room before sending messages!');
    }
  };

  return (
    <div className="messages-area-group-detail">
      <div className="messages-area-wrapper">
        <ChatSection messages={messages} userInfo={userInfo} avatarChat={avatarChat} />
        <ChatForm sendChatMessage={sendChatMessage} />
      </div>
      <div
        className={navbarStatus ? 'navbar-on' : 'navbar-off'}
        onClick={setIsClickedGroupDetail}
      ></div>
      <GroupDetail
        updateGroupDetail={updateGroupDetail}
        navbarStatus={navbarStatus}
        groupInfo={groupInfo}
      />
    </div>
  );
};
export default MessagesArea;
