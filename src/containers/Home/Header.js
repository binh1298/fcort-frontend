import React, {useContext, useState} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './Header.scss';

export const Header = (props) => {
  const theme = useContext(ThemeContext);
  const headerWrapperStyles = {
    borderColor: theme.palette.header.horizontalLine,
  };
  const inputStyles = {
    backgroundColor: theme.palette.header.searchBgColor,
  };
  const [iconColor, setIconColor] = useState({
    color: theme.palette.header.questionColor,
  });
  return (
    <div className="header-wrapper" style={headerWrapperStyles}>
      <h1>{props.chatTarget}</h1>
      <button className="toggle" onClick={props.onClick}>
        <i className="fa fas fa-bars"></i>
      </button>
      <form>
        <input type="text" placeholder="Search" style={inputStyles} />
        <button>
          <i className="fa fas fa-search"></i>
        </button>
      </form>
      <i
        className="fa fas fa-question-circle"
        style={iconColor}
        onMouseOver={() => setIconColor({color: theme.palette.header.questionFocus})}
        onMouseOut={() => setIconColor({color: theme.palette.header.questionColor})}
      ></i>
    </div>
  );
};
export default Header;
