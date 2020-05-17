import React, {useContext, useEffect} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';
import avatar from '../../assets/images/avatar.png';
import UserNavbar from './UserNavbar';
import Favorite from './Favorite';
import Group from './Group';
import MessagesList from './MessagesList';
import Header from './Header';

export const Home = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.navbar.background,
    color: theme.palette.navbar.titleColor,
  };
  function handleClick() {
    let parent = this.parentNode.parentNode;
    parent.childNodes[0].classList.add('toggle-target');
  }
  useEffect(() => {
    const mainContent = document.getElementsByClassName('main-content');
    mainContent[0].addEventListener('click', handleClick);
  }, []);
  return (
    <div className="home-container">
      <div className="navbar toggle-target" style={styles}>
        <h1>
          <i className="fa fas fa-tv fa-lg"></i>Fcord
        </h1>
        <UserNavbar avatar={avatar} userName="ThienDuc" />
        <Favorite
          favoriteList={[
            {id: '123', name: 'reactjs'},
            {id: '456', name: 'vuejs'},
            {id: '789', name: 'angular'},
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
            {id: '666', name: 'java'},
            {id: '777', name: 'C#'},
            {id: '888', name: 'C/C++'},
            {id: '999', name: 'python'},
            {id: '000', name: 'Pascal'},
          ]}
        />
        <MessagesList
          messagesList={[
            {id: '135', name: 'BinhPham'},
            {id: '246', name: 'KienTran'},
            {id: '357', name: 'HuyBui'},
            {id: '468', name: 'BinhTruong'},
            {id: '579', name: 'HungNguyen'},
            {id: '680', name: 'NguyenTran'},
            {id: '791', name: 'HoaLuu'},
            {id: '444', name: 'DaiLe'},
            {id: '555', name: 'LamNguyen'},
          ]}
        />
      </div>
      <div className="section">
        <Header />
        <div className="main-content"></div>
      </div>
    </div>
  );
};
export default Home;
