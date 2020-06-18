import React, {useContext} from 'react';
import './style.scss';
import ThemeContext from '../../contexts/ThemeContext';

export const SearchBar = () => {
  const theme = useContext(ThemeContext);
  const stylesSearchInput = {
    backgroundColor: theme.palette.searchBar.backgroundColor,
  };
  return (
    <div className="searchBar-wrapper">
      <form>
        <input type="text" placeholder="Search" style={stylesSearchInput} />
        <i className="fa fas fa-search"></i>
      </form>
    </div>
  );
};
export default SearchBar;
