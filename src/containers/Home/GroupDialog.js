import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import './GroupDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';
import InputField from '../../component/InputField';
import DialogButton from '../../component/DialogButton';
import {post} from '../../utils/ApiCaller';

export const GroupDialog = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useContext(ThemeContext);
  const stylesGroupDialogBg = {
    backgroundColor: theme.palette.groupDialog.backgroundColor,
  };
  const stylesDialogGroupBox = {
    backgroundColor: theme.palette.groupDialog.boxBgColor,
  };
  const stylesDialogGroupTitle = {
    color: theme.palette.groupDialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.groupDialog.buttonColor,
    backgroundColor: theme.palette.groupDialog.buttonBgColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.groupDialog.inputBorder,
  };
  const stylesInputBorderFocus = {
    borderColor: theme.palette.groupDialog.inputBorderFocus,
  };
  const stylesConfictNameError = {
    color: theme.palette.text.error,
    textAlign: 'center',
  };
  const {register, handleSubmit, errors, setError} = useForm();
  const onSubmit = async (data) => {
    //Call the server
    try {
      const response = await post(
        '/groups',
        {
          name: data.groupName,
        },
        {}
      );
      if (response.data.success) {
        await props.handleFetch();
        props.onClick();
      }
    } catch (ex) {
      if (ex.response) {
        setError('groupsName');
      }
    }
  };
  return (
    <div className={props.addGroup ? 'dialogOn' : 'dialogOff'}>
      <div
        className="groupDialog-background"
        style={stylesGroupDialogBg}
        onClick={props.onClick}
      ></div>
      <div className="dialogGroupBox" style={stylesDialogGroupBox}>
        <p className="dialogGroupTitle" style={stylesDialogGroupTitle}>
          Add a new group
        </p>
        <form
          className={isFocused ? 'inputGroupName focus' : 'inputGroupName'}
          onSubmit={handleSubmit(onSubmit)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <InputField
            register={register}
            icon={<i className="fa fas fa-users"></i>}
            name="groupName"
            type="text"
            label="Group Name"
            errors={errors}
            valid={register({
              required: 'Group name is required',
              maxLength: {
                value: 69,
                message: 'Group name must be less than 69 characters',
              },
            })}
          />
          <DialogButton styles={stylesDialogGroupButton}>Create</DialogButton>
          <div style={stylesConfictNameError}>
            {Object.keys(errors)[0] === 'groupsName' &&
              'This group name is already taken.'}
          </div>
        </form>
      </div>
    </div>
  );
};
export default GroupDialog;
