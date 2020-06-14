import React, {useContext} from 'react';
import './GroupDetailMenu.scss';
import ThemeContext from '../../../../contexts/ThemeContext';
import ListUsers from '../../../../component/ListUsers';

export const GroupDetailMenu = ({
  membersList,
  onClickDeleteMembersDialog,
  setGroupDetailUserTargetID,
}) => {
  const theme = useContext(ThemeContext);
  const stylesPlusIcon = {
    color: theme.palette.groupDetail.plusIconColor,
  };
  const stylesMinusIcon = {
    color: theme.palette.groupDetail.minusIConColor,
  };
  return (
    <div className="groupDetailMenu-wrapper">
      <div className="groupDetailMenu-header">
        <p>EVERYBODY</p>
        <i className="fa fas fa-plus" style={stylesPlusIcon}></i>
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
