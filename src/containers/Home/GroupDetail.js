import React, {useContext} from 'react';
import './GroupDetail.scss';
import ThemeContext from '../../contexts/ThemeContext';

export const GroupDetail = (props) => {
  const theme = useContext(ThemeContext);
  const lineStyles = {
    borderColor: theme.palette.groupDetail.lineColor,
  };
  return (
    <div className={props.navbarStatus ? 'groupDetailOn' : 'groupDetailOff'}>
      <div className="groupDetail-background" onClick={props.onClick}></div>
      <div className="groupDetail-wrapper" style={lineStyles}></div>
    </div>
  );
};
export default GroupDetail;
