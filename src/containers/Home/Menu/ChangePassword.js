import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import InputField from '../../../component/InputField';
import './ChangePassword.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import Dialog from '../../../component/Dialog';
import DialogButton from '../../../component/DialogButton';
import {post, put} from '../../../utils/ApiCaller';
import {LOCALSTORAGE_TOKEN_NAME} from '../../../configurations';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';
import usePersistedState from '../../../utils/usePersistedState';
const users = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME);

export const ChangePassword = ({
  dialogStatus,
  email,
  changePasswordOff,
  viewProfileOn,
}) => {
  const [user, setUser] = usePersistedState(LOCALSTORAGE_TOKEN_NAME);
  const [token, setToken] = usePersistedState(LOCALSTORAGE_TOKEN_NAME, '');
  const [checkChangePassword, setCheckChangePassword] = useState(false);
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
      const response = await post(
        '/auth/login',
        {
          email: email,
          password: data.currentPassword,
        },
        {}
      );
      if (response.data.success) {
        try {
          const res = await put(
            `/users/${users.sub}`,
            {
              password: data.password,
            },
            {}
          );
          if (res.data.success) {
            setCheckChangePassword(true);
          }
        } catch (ex) {
          console.log(ex);
        }
      }
    } catch (ex) {
      console.log(ex);
      if (ex.response && ex.response.status === 401) {
        setError('currentPassword', 'validate');
      }
    }
  };
  const handleOnClick = () => {
    changePasswordOff();
    viewProfileOn();
  };
  return (
    <Dialog dialogStatus={dialogStatus} onClick={handleOnClick}>
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
          <div className="change-password__submit">
            <div style={{color: theme.palette.text.error}}>
              {Object.keys(errors)[0] === 'currentPassword' &&
                'Invalid current password.'}
            </div>
            {checkChangePassword && (
              <span>
                Successful <i className="fa fa-check"></i>
              </span>
            )}
            <DialogButton styles={stylesDialogGroupButton}>Save</DialogButton>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default ChangePassword;
