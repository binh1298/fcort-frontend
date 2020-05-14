import React, {useContext} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';
import avatar from '../../assets/images/avatar.png';
import UserNavbar from './UserNavbar';

export const Home = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.navbar.background,
    color: theme.palette.navbar.color,
  };

  return (
    <div className="home-container">
      <div className="navbar" style={styles}>
        <h1>
          <i className="fa fas fa-tv fa-lg"></i>Fcord
        </h1>
        <UserNavbar avatar={avatar} userName="ThienDuc" />
      </div>
      <div className="section"></div>
    </div>
  );
};
export default Home;
