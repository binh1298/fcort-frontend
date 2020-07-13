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
export const Home = () => {
  const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME);
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
      setGroupInfo(tempGroupList[0]);
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
      setGroupInfo(tempFavoriteGroupList[0]);
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
  const [userInfo, setUserInfo] = useState({});
  const fetchProfile = async () => {
    const userInfo = await profileFetching();
    setUserInfo(userInfo);
  };
  useEffect(() => {
    fetchGroup();
    fetchProfile();
    fetchFavoriteGroup();
  }, []);
  const [groupInfo, setGroupInfo] = useState({});
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const [isClickedAddGroup, setIsClickedAddGroup] = useState(false);
  const [isClickedGroupDetail, setIsClickedGroupDetail] = useState(false);
  const [isClickedViewProfile, setIsClickedViewProfile] = useState(false);
  const [isClickedChangepassword, setIsClickedChangePassword] = useState(false);
  return (
    <div className="home-container">
      <ChangePassword
        dialogStatus={isClickedChangepassword}
        email={inforProfile.email}
        onClickOff={() => {
          setIsClickedChangePassword(false);
        }}
      />
      <GroupDialog
        dialogStatus={isClickedAddGroup}
        handleFetch={fetchGroup}
        onClick={() => {
          setIsClickedAddGroup(false);
        }}
      />
      <ProfileDialog
        viewProfile={isClickedViewProfile}
        avatar={userInfo.avatar}
        fullname={userInfo.fullname}
        gmail={userInfo.email}
        handleFetch={fetchProfile}
        onClick={() => {
          setIsClickedViewProfile(false);
        }}
        onClickOn={() => {
          setIsClickedChangePassword(true);
        }}
      />
      <div className="navbar-wrapper">
        <div
          className={isClickedMenu ? 'navbar-on' : 'navbar-off'}
          onClick={() => setIsClickedMenu(false)}
        ></div>
        <div
          className={isClickedMenu ? 'navbar' : 'navbar  toggle-target'}
          style={styles}
        >
          <h1>
            <i className="fa fas fa-tv fa-lg"></i>Fcord
          </h1>
          <UserNavbar
            avatar={userInfo.avatar}
            userName={userInfo.fullname}
            onHoverUserOption={(value) => setIsClickedUserOption(value)}
            isClickedUserOption={isClickedUserOption}
            userOption={[
              {
                id: 'aaa',
                name: 'Account Setting',
                icon: <i className="fa fas fa-cog"></i>,
              },
              {id: 'bbb', name: 'Logout', icon: <i className="fa fas fa-sign-out"></i>},
            ]}
            viewProfile={isClickedViewProfile}
            onClickViewProfile={() => {
              setIsClickedViewProfile(true);
            }}
          />
          <FavoriteSection
            chooseGroupInfo={setGroupInfo}
            favoriteList={favoriteGroupList}
            handleFetch={fetchFavoriteGroup}
          />
          <GroupSection
            chooseGroupInfo={setGroupInfo}
            onClick={() => setIsClickedAddGroup(true)}
            groupList={groupList}
            handleFetch={fetchFavoriteGroup}
          />
          <MessagesSection chooseGroupInfo={setGroupInfo} messagesList={[]} />
        </div>
      </div>
      <div className="section">
        <Header
          groupInfo={groupInfo}
          icon={<i className="fa fas fa-at"></i>}
          onClickMenu={() => setIsClickedMenu(!isClickedMenu)}
          onClickGroupDetail={() => setIsClickedGroupDetail(!isClickedGroupDetail)}
          groupDetailStatus={isClickedGroupDetail}
        />
        <MessagesArea
          setIsClickedGroupDetail={() => setIsClickedGroupDetail(false)}
          groupInfo={groupInfo}
          navbarStatus={isClickedGroupDetail}
          userInfo={userInfo}
        />
      </div>
    </div>
  );
};
export default Home;
