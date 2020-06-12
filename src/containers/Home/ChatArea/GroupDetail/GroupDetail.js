import React, {useContext, useState, useEffect} from 'react';
import './GroupDetail.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import GroupDetailHeader from './GroupDetailHeader';
import GroupDetailMenu from './GroupDetailMenu';
import LocalStorageUtils from '../../../../utils/LocalStorageUtils';

export const GroupDetail = ({navbarStatus, chatTarget, membersList}) => {
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
        <GroupDetailMenu membersList={membersList} />
      </div>
    </div>
  );
};
export default GroupDetail;
