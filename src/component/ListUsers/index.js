import React, {useContext, useState} from 'react';
import './style.scss';
import userAvt from '../../assets/images/userAvt.png';
import ThemeContext from '../../contexts/ThemeContext';

const User = ({fullname, avatar, id, setUsersID, children}) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({});
  return (
    <li
      style={styles}
      onMouseOver={() =>
        setStyles({backgroundColor: theme.palette.groupDetail.hoverListMembersColor})
      }
      onMouseOut={() => setStyles({})}
    >
      <img
        className="listUsersAvatar"
        src={avatar || userAvt}
        onClick={() => setUsersID(id)}
      />
      <p className="listUsersName" onClick={() => setUsersID(id)}>
        {fullname}
      </p>
      <div
        className={
          Object.entries(styles).length === 0 ? 'listUserOptionsOff' : 'listUserOptionsOn'
        }
        onClick={() => setUsersID(id)}
      >
        {children}
      </div>
    </li>
  );
};

export const ListUsers = ({listUsers, setUsersID, children}) => {
  const theme = useContext(ThemeContext);
  const list = listUsers.map((object) => (
    <User
      fullname={object.fullname}
      avatar={object.avatar}
      id={object.id}
      key={object.id}
      setUsersID={setUsersID}
    >
      {children}
    </User>
  ));
  return <ul className="listUsersGroupDetail">{list}</ul>;
};
export default ListUsers;
