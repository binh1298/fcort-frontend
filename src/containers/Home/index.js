import React, {useContext, useState} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';
import avatar from '../../assets/images/avatar.png';
import UserNavbar from './UserNavbar';
import FavoriteSection from './FavoriteSection';
import GroupSection from './GroupSection';
import MessagesSection from './MessagesSection';
import Header from './Header';

export const Home = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.navbar.background,
    color: theme.palette.navbar.titleColor,
  };
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="home-container">
      <div className={isClicked ? 'navbar toggle-target' : 'navbar'} style={styles}>
        <h1>
          <i className="fa fas fa-tv fa-lg"></i>Fcord
        </h1>
        <UserNavbar avatar={avatar} userName="ThienDuc" />
        <FavoriteSection
          favoriteList={[
            {id: '123', name: 'reactjs'},
            {id: '456', name: 'vuejs'},
            {id: '789', name: 'angular'},
          ]}
        />
        <GroupSection
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
        <MessagesSection
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
        <Header onClick={() => setIsClicked(!isClicked)} />
        <div className="main-content" onClick={() => setIsClicked(true)}></div>
      </div>
    </div>
  );
};
export default Home;
