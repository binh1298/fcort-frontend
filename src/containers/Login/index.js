/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss';
import Input from '../../component/InputField';
import logoFcode from '../../assets/images/logoFcode.png';
import logoFcort from '../../assets/images/logoFcort.png';
import background from '../../assets/images/backgroundLoginSingup.png';

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
    <div className="login-container" style={styles}>
      <img className="wave" src={background} />
      <div className="login-content">
        <div className="login-logo">
          <img src={logoFcort} />
        </div>
        <div className="login-form">
          <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <img className="logo-fcode" src={logoFcode} />
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
            <a href="#">Forgot Password</a>

            <input type="submit" className="login-button" value="Login" />
            <Link to="/signup">Create new account</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
