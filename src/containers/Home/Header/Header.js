import React, {useContext, useState} from 'react';
import ThemeContext from '../../../contexts/ThemeContext';
import './Header.scss';

export const Header = (props) => {
  const theme = useContext(ThemeContext);
  const headerWrapperStyles = {
    borderColor: theme.palette.header.horizontalLine,
  };
  const inputStyles = {
    backgroundColor: theme.palette.header.searchBgColor,
  };
  const groupDetailIconStyles = {
    color: theme.palette.header.exclamationIcon,
  };
  return (
    <div className="header-wrapper" style={headerWrapperStyles}>
      <p>
        {props.icon}
        {props.chatTarget.name}
      </p>
      <button className="toggle" onClick={props.onClickMenu}>
        <i className="fa fas fa-bars"></i>
      </button>
      <form>
        <input type="text" placeholder="Search" style={inputStyles} />
        <button>
          <i className="fa fas fa-search"></i>
        </button>
      </form>
      <i
        className={
          props.groupDetailStatus
            ? 'fa fa-exclamation-circle groupDetailIconOn'
            : 'fa fa-exclamation-circle'
        }
        onClick={props.onClickGroupDetail}
        style={groupDetailIconStyles}
      ></i>
    </div>
  );
};
export default Header;
