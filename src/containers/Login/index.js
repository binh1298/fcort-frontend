/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss';
import logoFcode from '../../assets/images/logoFcode.png';
import logoFcort from '../../assets/images/logoFcort.png';
import background from '../../assets/images/backgroundLoginSingup.png';
import InputField from '../../component/InputField';

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
            />
            <a href="#">Forgot Password</a>

            <input type="submit" className="login-button" value="Login" />
       
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
