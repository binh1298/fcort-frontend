/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import imgUrl from './imgUrl';
import './style.css';

export const Login = (props) => {
  const styles = {
    backgroundColor: props.color,
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    //Call the sever
    console.log(username);
    console.log(password);
    console.log('submitted');
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
          <form onSubmit={handleSubmit}>
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
                  className="input"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
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
                  className="input"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
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
