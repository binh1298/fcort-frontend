import React, {useContext} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';
import avatar from '../../assets/images/avatar.png';
import UserNavbar from './UserNavbar';
import Favorite from './Favorite';
import Group from './Group';
import Messages from './Messages';
import Header from './Header';

export const Home = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.navbar.background,
    color: theme.palette.navbar.titleColor,
  };

  return (
    <div className="home-container">
      <button className="toggle"></button>
      <div className="navbar" style={styles}>
        <h1>
          <i className="fa fas fa-tv fa-lg"></i>Fcord
        </h1>
        <UserNavbar avatar={avatar} userName="ThienDuc" />
        <Favorite
          favoriteList={[
            {id: '123', name: 'reactjs'},
            {id: '456', name: 'vuejs'},
            {id: '789', name: 'angular'},
            {id: '111', name: 'html'},
            {id: '222', name: 'css'},
            {id: '333', name: 'javascript'},
          ]}
        />
        <Group
          groupList={[
            {id: '123', name: 'reactjs'},
            {id: '456', name: 'vuejs'},
            {id: '789', name: 'angular'},
            {id: '111', name: 'html'},
            {id: '222', name: 'css'},
            {id: '333', name: 'javascript'},
          ]}
        />
        <Messages
          messagesList={[
            {id: '135', name: 'BinhPham'},
            {id: '246', name: 'KienTran'},
            {id: '357', name: 'HuyBui'},
            {id: '468', name: 'BinhTruong'},
          ]}
        />
      </div>
      <div className="section">
        <Header />
      </div>
    </div>
  );
};
export default Home;
