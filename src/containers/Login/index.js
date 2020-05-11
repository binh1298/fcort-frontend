/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import ThemeContext from '../../contexts/ThemeContext';
import imgUrl from './imgUrl';
import './style.scss';
import Input from '../../component/InputField';
export const Login = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.text.inputField,
  };

  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    //Call the sever

    console.log(data);
    console.log('Submitted');
  };

  return (
    <div className="container" style={styles}>
      <img className="wave" src={imgUrl.background} />
      <div className="login-content">
        <div className="login-logo">
          <img src={imgUrl.logo} />
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img src={imgUrl.logoFcode} />
            <h2 className="title">Welcome</h2>
            <Input
              register={register}
              name="username"
              type="text"
              label="Username"
              errors={errors}
            />
            <Input
              register={register}
              name="password"
              type="password"
              label="Password"
              errors={errors}
            />
            <a href="#">Forgot Password?</a>
            <input type="submit" className="login-button" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
