import React, {useContext, useState, useEffect} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';
import UserNavbar from './Menu/UserNavbar';
import FavoriteSection from './Menu/FavoriteSection';
import GroupSection from './Menu/GroupSection';
import MessagesSection from './Menu/MessagesSection';
import GroupDialog from './Menu/GroupDialog';
import Header from './Header/Header';
import MessagesArea from './ChatArea/MessagesArea';
import {get} from '../../utils/ApiCaller';
import ProfileDialog from './Menu/ProfileDialog';
import {LOCALSTORAGE_TOKEN_NAME} from '../../configurations';
import LocalStorageUtils from '../../utils/LocalStorageUtils';
const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME);

export const Home = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.navbar.background,
    color: theme.palette.navbar.titleColor,
  };
  const groupFetching = async () => {
    //Call the sever
    try {
      const response = await get('/groups', {});
      if (response.data.success) {
        return response.data.data;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const [groupList, setGroupList] = useState([]);
  const fetchGroup = async () => {
    const tempGroupList = await groupFetching();
    await setGroupList(tempGroupList);
    if (tempGroupList.length) {
      setChatTarget(tempGroupList[0]);
    }
  };

  const FavoriteGroupFetching = async () => {
    //Call the sever
    try {
      const response = await get('/favorites', {});
      if (response.data.success) {
        return response.data.data;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        LocalStorageUtils.deleteUser();
      }
    }
  };
  const [favoriteGroupList, setFavoriteGroupList] = useState([]);
  const fetchFavoriteGroup = async () => {
    const tempFavoriteGroupList = await FavoriteGroupFetching();
    await setFavoriteGroupList(tempFavoriteGroupList);
    if (tempFavoriteGroupList.length) {
      setChatTarget(tempFavoriteGroupList[0]);
    }
  };

  const profileFetching = async () => {
    //Call the sever
    try {
      const response = await get(`/users/${user.sub}`, {});
      if (response.data.success) {
        return response.data.data;
      }
    } catch (ex) {}
  };
  const [inforProfile, setInforProfile] = useState({});
  const fetchProfile = async () => {
    const tempInforProfile = await profileFetching();
    setInforProfile(tempInforProfile);
  };
  useEffect(() => {
    fetchGroup();
    fetchProfile();
    fetchFavoriteGroup();
  }, []);
  const [chatTarget, setChatTarget] = useState({});
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const [isClickedAddGroup, setIsClickedAddGroup] = useState(false);
  const [isClickedUserOption, setIsClickedUserOption] = useState(false);
  const [isClickedGroupDetail, setIsClickedGroupDetail] = useState(false);
  const [isClickedViewProfile, setIsClickedViewProfile] = useState(false);
  return (
    <div className="home-container">
      <GroupDialog
        dialogStatus={isClickedAddGroup}
        handleFetch={fetchGroup}
        onClick={() => {
          setIsClickedAddGroup(false);
        }}
      />
      <ProfileDialog
        viewProfile={isClickedViewProfile}
        avatar={inforProfile.avatar}
        fullname={inforProfile.fullname}
        gmail={inforProfile.email}
        handleFetch={fetchProfile}
        onClick={() => {
          setIsClickedViewProfile(false);
        }}
      />
      <div className={isClickedMenu ? 'navbar toggle-target' : 'navbar'} style={styles}>
        <h1>
          <i className="fa fas fa-tv fa-lg"></i>Fcord
        </h1>
        <UserNavbar
          avatar={inforProfile.avatar}
          userName={inforProfile.fullname}
          onHoverUserOption={(value) => setIsClickedUserOption(value)}
          isClickedUserOption={isClickedUserOption}
          userOption={[
            {id: 'aaa', name: 'Account Setting', icon: <i className="fa fas fa-cog"></i>},
            {id: 'bbb', name: 'Logout', icon: <i className="fa fas fa-sign-out"></i>},
          ]}
          viewProfile={isClickedViewProfile}
          onClickViewProfile={() => {
            setIsClickedViewProfile(true);
          }}
        />
        <FavoriteSection
          chooseChatTarget={setChatTarget}
          favoriteList={favoriteGroupList}
          handleFetch={fetchFavoriteGroup}
        />
        <GroupSection
          chooseChatTarget={setChatTarget}
          onClick={() => setIsClickedAddGroup(true)}
          groupList={groupList}
          handleFetch={fetchFavoriteGroup}
        />
        <MessagesSection
          chooseChatTarget={setChatTarget}
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
          chatTarget={chatTarget}
          icon={<i className="fa fas fa-at"></i>}
          onClickMenu={() => setIsClickedMenu(!isClickedMenu)}
          onClickGroupDetail={() => setIsClickedGroupDetail(!isClickedGroupDetail)}
          groupDetailStatus={isClickedGroupDetail}
        />
        <MessagesArea
          chatTarget={chatTarget}
          onClickMenu={() => setIsClickedMenu(false)}
          username="Nguyễn Trần Thiên Đức"
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
          navbarStatus={isClickedGroupDetail}
        />
      </div>
    </div>
  );
};
export default Home;
