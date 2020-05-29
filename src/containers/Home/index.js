import React, {useContext, useState} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';
import UserNavbar from './UserNavbar';
import FavoriteSection from './FavoriteSection';
import GroupSection from './GroupSection';
import MessagesSection from './MessagesSection';
import Header from './Header';
import MessagesArea from './MessagesArea';
import GroupDialog from './GroupDialog';
import ProfileDialog from './ProfileDialog';

export const Home = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.navbar.background,
    color: theme.palette.navbar.titleColor,
  };
  const [isClickedMenu, setIsClickedMenu] = useState(true);
  const [isClickedAddGroup, setIsClickedAddGroup] = useState(false);
  const [isClickedViewProfile, setIsClickedViewProfile] = useState(false);
  return (
    <div className="home-container">
      <GroupDialog
        addGroup={isClickedAddGroup}
        onClick={() => {
          setIsClickedAddGroup(false);
        }}
      />
      <ProfileDialog
        viewProfile={isClickedViewProfile}
        avatar="https://github.com/kien123456k/Hello-world/blob/master/avatar.png?raw=true"
        userName="Nguyễn Trần Thiên Đức"
        gmail="abc@gmail.com"
        onClick={() => {
          setIsClickedViewProfile(false);
        }}
      />
      <div
        className={isClickedMenu ? 'navbar toggle-target' : 'navbar'}
        style={styles}
        id={isClickedViewProfile ? 'isProfileOn' : 'isProfileOff'}
      >
        <h1>
          <i className="fa fas fa-tv fa-lg"></i>Fcord
        </h1>
        <UserNavbar
          avatar="https://github.com/kien123456k/Hello-world/blob/master/avatar.png?raw=true"
          userName="Nguyễn Trần Thiên Đức"
          gmail="abc@gmail.com"
          onClick={() => {
            setIsClickedViewProfile(true);
          }}
        />
        <FavoriteSection
          favoriteList={[
            {id: '123', name: 'reactjs'},
            {id: '456', name: 'vuejs'},
            {id: '789', name: 'angular'},
          ]}
        />
        <GroupSection
          onClick={() => setIsClickedAddGroup(true)}
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
        <Header
          chatTarget="BinhPham"
          icon={<i className="fa fas fa-at"></i>}
          onClick={() => setIsClickedMenu(!isClickedMenu)}
        />
        <MessagesArea
          onClick={() => setIsClickedMenu(true)}
          userName="Nguyễn Trần Thiên Đức"
          avatarChat={[
            {
              id: '69',
              image:
                'https://github.com/kien123456k/Hello-world/blob/master/avatarChat.jpg?raw=true',
            },
          ]}
          messages={[
            {id: '1', name: 'BinhPham', message: 'ừm'},
            {id: '2', name: 'Nguyễn Trần Thiên Đức', message: 'tộ'},
            {id: '3', name: 'BinhPham', message: 'kiệt lao'},
            {id: '4', name: 'Nguyễn Trần Thiên Đức', message: 'ừm'},
            {id: '5', name: 'BinhPham', message: 'lược lạo'},
            {id: '6', name: 'Nguyễn Trần Thiên Đức', message: 'thăm ngàn'},
            {id: '7', name: 'BinhPham', message: 'thăm ngàn'},
            {id: '8', name: 'Nguyễn Trần Thiên Đức', message: 'kẹp ngần'},
            {id: '9', name: 'BinhPham', message: 'thăm ngàn'},
            {id: '10', name: 'Nguyễn Trần Thiên Đức', message: 'kẹp ngần'},
            {id: '11', name: 'BinhPham', message: 'chai ni'},
            {id: '12', name: 'Nguyễn Trần Thiên Đức', message: 'thăm ngàn'},
            {id: '13', name: 'BinhPham', message: 'kẹp ngần'},
            {id: '14', name: 'Nguyễn Trần Thiên Đức', message: 'đai riển'},
            {id: '15', name: 'BinhPham', message: 'mìn kịt'},
            {id: '16', name: 'Nguyễn Trần Thiên Đức', message: 'chui lừa'},
            {id: '17', name: 'BinhPham', message: 'phỏm dại'},
            {id: '18', name: 'Nguyễn Trần Thiên Đức', message: 'miều rặt'},
            {id: '19', name: 'BinhPham', message: 'bơ bun'},
            {id: '20', name: 'Nguyễn Trần Thiên Đức', message: 'minh buồi'},
            {id: '21', name: 'BinhPham', message: 'rồ bần già'},
            {id: '22', name: 'Nguyễn Trần Thiên Đức', message: 'ba ca nà'},
            {id: '23', name: 'BinhPham', message: 'chả nại'},
            {
              id: '24',
              name: 'Nguyễn Trần Thiên Đức',
              message: 'tha chả lơ bịt nài là bưn lụa',
            },
            {id: '25', name: 'BinhPham', message: 'ken nơ lao nèn'},
          ]}
        />
      </div>
    </div>
  );
};
export default Home;
