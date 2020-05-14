import React, {useContext} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import avatar from '../../assets/images/avatar.png';

export const Home = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.navbar.background,
    color: theme.palette.navbar.color,
  };

  return (
    <div className="home-container">
      <div className="navbar" style={styles}>
        <h1>Fcord</h1>
      </div>
    </div>
  );
};
export default Home;
