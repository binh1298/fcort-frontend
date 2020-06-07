import React, {useContext, useState} from 'react';
import './GroupDetail.scss';
import ThemeContext from '../../contexts/ThemeContext';
import GroupDetailHeader from './GroupDetailHeader';

export const GroupDetail = ({navbarStatus, onClick, chatTarget}) => {
  const theme = useContext(ThemeContext);
  const lineStyles = {
    borderColor: theme.palette.groupDetail.lineColor,
  };
  return (
    <div className={navbarStatus ? 'groupDetailOn' : 'groupDetailOff'}>
      <div className="groupDetail-background" onClick={onClick}></div>
      <div className="groupDetail-wrapper" style={lineStyles}>
        <GroupDetailHeader chatTarget={chatTarget} />
      </div>
    </div>
  );
};
export default GroupDetail;
