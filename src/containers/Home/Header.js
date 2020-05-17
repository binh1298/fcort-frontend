import React, {useContext, useState, useEffect} from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './Header.scss';

export const Header = () => {
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
  function handleClick() {
    let parent = this.parentNode.parentNode.parentNode;
    parent.childNodes[0].classList.toggle('toggle-target');
  }
  useEffect(() => {
    const toggle = document.getElementsByClassName('toggle');
    toggle[0].addEventListener('click', handleClick);
  }, []);
  return (
    <div className="header-wrapper" style={headerWrapperStyles}>
      <button className="toggle">
        <i className="fa fas fa-bars fa-lg"></i>
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
