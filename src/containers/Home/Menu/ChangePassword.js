import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import InputField from '../../../component/InputField';
import './ChangePassword.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import Dialog from '../../../component/Dialog';
import DialogButton from '../../../component/DialogButton';
import {post} from '../../../utils/ApiCaller';

export const ChangePassword = (props) => {
  const theme = useContext(ThemeContext);
  const stylesBoxBackround = {
    backgroundColor: theme.palette.profileDialog.boxColor,
  };
  const stylesProfileTitle = {
    color: theme.palette.profileDialog.titleColor,
  };
  const stylesDialogGroupButton = {
    color: theme.palette.dialog.buttonColor,
    backgroundColor: theme.palette.dialog.buttonBgColor,
  };
  const {register, handleSubmit, errors, setError, watch} = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(props.email);
      console.log(data.currentPassword);
      const response = await post(
        '/auth/login',
        {
          email: props.email,
          password: data.currentPassword,
        },
        {}
      );
      if (response.data.success) {
        console.log('Pro qua Anh oi!');
        console.log(props.email);
        const response = await post(
          '/auth/signup',
          {
            email: props.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
          },
          {}
        );
      }
    } catch (ex) {
      console.log(ex);
      if (ex.response && ex.response.status === 401) {
        setError('currentPassword', 'validate');
      }
    }
  };
  return (
    <Dialog dialogStatus={props.dialogStatus} onClick={props.onClickOff}>
      <div className="change-password__wrapper" style={stylesBoxBackround}>
        <h2 style={stylesProfileTitle}>Change Password</h2>
        <form className="change-password__form" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            register={register}
            icon={<i className="fa fas fa-lock"></i>}
            name="currentPassword"
            type="password"
            label="Current password"
            errors={errors}
          />
          <InputField
            register={register}
            icon={<i className="fa fas fa-lock"></i>}
            name="password"
            type="password"
            label="Password"
            errors={errors}
            valid={register({
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          <InputField
            register={register}
            icon={<i className="fa fas fa-lock"></i>}
            name="confirmPassword"
            type="password"
            label="Confirm password"
            errors={errors}
            valid={register({
              required: 'Confirm new password is required',
              validate: (value) =>
                value === watch('password') ||
                'Password and Confirm password must be the same.',
            })}
          />
          <DialogButton styles={stylesDialogGroupButton}>Save</DialogButton>
          <div style={{color: theme.palette.text.error}}>
            {Object.keys(errors)[0] === 'currentPassword' && 'Invalid current password.'}
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default ChangePassword;
