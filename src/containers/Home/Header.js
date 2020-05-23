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
  return (
    <div className="header-wrapper" style={headerWrapperStyles}>
      <p>
        {props.icon}
        {props.chatTarget}
      </p>
      <button className="toggle" onClick={props.onClick}>
        <i className="fa fas fa-bars"></i>
      </button>
      <form>
        <input type="text" placeholder="Search" style={inputStyles} />
        <button>
          <i className="fa fas fa-search"></i>
        </button>
      </form>
      <i className="fa fas fa-question-circle"></i>
    </div>
  );
};
export default Header;
