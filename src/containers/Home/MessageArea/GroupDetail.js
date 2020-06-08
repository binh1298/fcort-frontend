import React, {useContext, useState} from 'react';
import './GroupDetail.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import GroupDetailHeader from './GroupDetailHeader';

export const GroupDetail = ({navbarStatus, chatTarget}) => {
  const theme = useContext(ThemeContext);
  const groupDetailStyles = {
    backgroundColor: theme.palette.groupDetail.backgroundColor,
  };
  const lineStyles = {
    borderColor: theme.palette.groupDetail.lineColor,
  };
  return (
    <div
      className={
        navbarStatus
          ? 'groupDetail-context groupDetailOn'
          : 'groupDetail-context groupDetailOff'
      }
      style={groupDetailStyles}
    >
      <div className="groupDetail-wrapper" style={lineStyles}>
        <GroupDetailHeader chatTarget={chatTarget} />
      </div>
    </div>
  );
};
export default GroupDetail;
