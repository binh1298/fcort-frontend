/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import imgUrl from './imgUrl';
import './style.scss';
import Input from './Input';
export const Login = (props) => {
  const styles = {
    backgroundColor: props.color,
  };
  const {register, handleSubmit, watch, errors} = useForm();
  const onSubmit = (data) => {
    //Call the sever

    console.log(data);
    console.log('Submitted');
  };
  function handleFocus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
  }

  function handleBlur() {
    let parent = this.parentNode.parentNode;
    if (this.value == '') {
      parent.classList.remove('focus');
    }
  }
  useEffect(() => {
    const inputs = document.querySelectorAll('.input');
    inputs.forEach((input) => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });
  }, []);

  return (
    <div className="body" style={styles}>
      <img className="wave" src={imgUrl.background} />
      <div className="container">
        <div className="img">
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
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
