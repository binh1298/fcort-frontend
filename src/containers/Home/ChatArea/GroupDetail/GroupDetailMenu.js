import React, {useContext} from 'react';
import './GroupDetailMenu.scss';
import ThemeContext from '../../../../contexts/ThemeContext';

export const GroupDetailMenu = (props) => {
  const theme = useContext(ThemeContext);
  const plusIconstyles = {
    color: theme.palette.groupDetail.plusIconColor,
  };
  return (
    <div className="groupDetailMenu-wrapper">
      <div className="groupDetailMenu-header">
        <p>EVERYBODY</p>
        <i className="fa fas fa-plus" style={plusIconstyles}></i>
      </div>
    </div>
  );
};
export default GroupDetailMenu;
