/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import imgUrl from './imgUrl';
import './style.css';

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
        <div className="login-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img src={imgUrl.logoFcode} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  name="username"
                  className="input"
                  //value={username}
                  ref={register({required: true})}
                />
                {errors.username && <h5>Username is required</h5>}
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  name="password"
                  className="input"
                  ref={register({required: true})}
                />
                {errors.password && <h5>Password is required</h5>}
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
