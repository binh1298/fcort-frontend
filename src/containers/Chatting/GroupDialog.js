import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import './GroupDialog.scss';
import ThemeContext from '../../contexts/ThemeContext';
import InputField from '../../component/InputField';
import DialogButton from '../../component/DialogButton';
import Dialog from '../../component/Dialog';
import {post} from '../../utils/ApiCaller';

export const GroupDialog = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useContext(ThemeContext);
  const stylesDialogGroupBox = {
    backgroundColor: theme.palette.dialog.boxBgColor,
  };
  const stylesDialogGroupTitle = {
    color: theme.palette.dialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.dialog.buttonColor,
    backgroundColor: theme.palette.dialog.buttonBgColor,
  };
  const stylesInputBorder = {
    borderColor: theme.palette.dialog.inputBorder,
  };
  const stylesInputBorderFocus = {
    borderColor: theme.palette.dialog.inputBorderFocus,
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
    <Dialog dialogStatus={props.dialogStatus} onClick={props.onClick}>
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
    </Dialog>
  );
};
export default GroupDialog;
