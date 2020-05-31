/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss';
import logoFcode from '../../assets/images/logoFcode.png';
import logoFcort from '../../assets/images/logoFcort.png';
import background from '../../assets/images/backgroundLoginSingup.png';
import InputField from '../../component/InputField';
import { post } from '../../utils/ApiCaller';
export const SignUp = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.text.inputField,
  };

  const { register, handleSubmit, errors, watch, setError } = useForm();
  const onSubmit = async (data) => {
    //Call the sever
    try {
      const response = await post(
        '/users/signup',
        {
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        {}
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data.data.message);
        setError('username', 'validate');
      }
    }
    console.log('Submitted');
  };

  return (
    <div className="sign-up-container" style={styles}>
      <img className="wave" src={background} />
      <div className="sign-up-content">
        <div className="sign-up-logo">
          <img src={logoFcort} />
        </div>
        <div className="sign-up-form">
          <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <img src={logoFcode} />
            <h2 className="title">Sign Up</h2>
            <InputField
              register={register}
              icon={<i className="fa fas fa-user"></i>}
              name="email"
              type="text"
              label="Email"
              errors={errors}
              valid={register({
                required: `Email is required`,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
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
                required: 'Confirm password is required',
                validate: (value) =>
                  value === watch('password') ||
                  'Password and Confirm password must be the same.',
              })}
            />
            <input type="submit" className="submit-button" value="Submit" />
            <div style={{ color: theme.palette.text.error }}>
              {Object.keys(errors)[0] === 'username' && 'This email is already taken.'}
            </div>
            <Link to="/">Already have an account? Sign In</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
