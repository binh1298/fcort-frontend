import React, {useContext, useState, useEffect} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';
import UserNavbar from './Menu/UserNavbar';
import FavoriteSection from './Menu/FavoriteSection';
import GroupSection from './Menu/GroupSection';
import MessagesSection from './Menu/MessagesSection';
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

  const profileFetching = async () => {
    //Call the sever
    try {
      const response = await get(`/users/${user.sub}`, {});
      if (response.data.success) {
        setUserInfo(response.data.data);
      }
    } catch (ex) {}
  };
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    profileFetching();
  }, []);
  const [groupInfo, setGroupInfo] = useState({});
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const [isClickedAddGroup, setIsClickedAddGroup] = useState(false);
  const [isClickedUserOption, setIsClickedUserOption] = useState(false);
  const [isClickedGroupDetail, setIsClickedGroupDetail] = useState(true);
  const [isClickedViewProfile, setIsClickedViewProfile] = useState(false);
  const [isUpdatedFavoriteGroup, setIsUpdatedFavoriteGroup] = useState(false);
  return (
    <div className="home-container">
      <ProfileDialog
        viewProfile={isClickedViewProfile}
        avatar={userInfo.avatar}
        fullname={userInfo.fullname}
        gmail={userInfo.email}
        handleFetch={profileFetching}
        onClick={() => {
          setIsClickedViewProfile(false);
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
              {
                id: 'bbb',
                name: 'Logout',
                icon: <i className="fa fas fa-sign-out"></i>,
              },
            ]}
            viewProfile={isClickedViewProfile}
            onClickViewProfile={() => {
              setIsClickedViewProfile(true);
            }}
          />
          <FavoriteSection
            chooseGroupInfo={setGroupInfo}
            isUpdateFavoriteGroup={isUpdatedFavoriteGroup}
          />
          <GroupSection
            chooseGroupInfo={setGroupInfo}
            onClickOpenAddGroup={() => setIsClickedAddGroup(true)}
            onClickCloseAddGroup={() => setIsClickedAddGroup(false)}
            handleFetch={() => setIsUpdatedFavoriteGroup(!isUpdatedFavoriteGroup)}
            dialogStatus={isClickedAddGroup}
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
          setIsClickedGroupDetail={() => setIsClickedGroupDetail(true)}
          groupInfo={groupInfo}
          groupDetailStatus={isClickedGroupDetail}
          userInfo={userInfo}
        />
      </div>
    </div>
  );
};
export default Home;
