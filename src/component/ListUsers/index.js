import React, {useContext, useState} from 'react';
import './style.scss';
import userAvt from '../../assets/images/userAvt.png';

const ItemUser = ({fullname, avatar, id, setUsersID, children, usersMessages}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <li
      onMouseEnter={() => {
        setIsHover(true);
        if (!usersMessages) setUsersID(id);
      }}
      onMouseLeave={() => setIsHover(false)}
      className={usersMessages ? 'users-messages' : 'users-group-detail'}
    >
      <img className="list-users-avatar" src={avatar || userAvt} />
      <p className="list-users-name">{fullname}</p>
      <div className={!isHover ? 'list-user-options-off' : 'list-user-options-on'}>
        {children}
      </div>
    </li>
  );
};

export const ListUsers = ({listUsers, setUsersID, children, usersMessages}) => {
  const list = listUsers.map((object) => (
    <ItemUser
      fullname={object.fullname}
      avatar={object.avatar}
      id={object.id}
      key={object.id}
      setUsersID={setUsersID}
      usersMessages={usersMessages}
    >
      {children}
    </ItemUser>
  ));
  return <ul className="list-users">{list}</ul>;
};
export default ListUsers;
