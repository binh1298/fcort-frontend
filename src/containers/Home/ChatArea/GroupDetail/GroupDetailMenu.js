import React, {useContext} from 'react';
import './GroupDetailMenu.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import ListUsers from '../../../../component/ListUsers';

export const GroupDetailMenu = ({
  membersList,
  onClickDeleteMembersDialog,
  onClickAddMembersDialog,
  setGroupDetailUserTargetID,
}) => {
  const theme = useContext(ThemeContext);
  const stylesPlusIcon = {
    color: theme.palette.groupDetail.plusIconColor,
  };
  const stylesMinusIcon = {
    color: theme.palette.groupDetail.minusIConColor,
  };
  const stylesTitle = {
    color: theme.palette.groupDetail.titleColor,
  };
  return (
    <div className="group-detail-menu-wrapper">
      <div className="group-detail-menu-header">
        <p style={stylesTitle}>EVERYBODY</p>
        <i
          className="fa fas fa-plus"
          style={stylesPlusIcon}
          onClick={onClickAddMembersDialog}
        ></i>
      </div>
      <ListUsers listUsers={membersList} setUsersID={setGroupDetailUserTargetID}>
        <i
          className="fa fas fa-minus"
          onClick={onClickDeleteMembersDialog}
          style={stylesMinusIcon}
        ></i>
      </ListUsers>
    </div>
  );
};
export default GroupDetailMenu;
