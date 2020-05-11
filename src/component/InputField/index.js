import React, {useEffect} from 'react';
import './style.scss';
const Input = ({register, name, label, type, errors}) => {
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
    <div className="input-div">
      <div className="icon">
        {name === 'username' ? (
          <i className="fa fas fa-user"></i>
        ) : (
          <i className="fa fas fa-lock"></i>
        )}
      </div>
      <div className="div">
        <h5>{label}</h5>
        <input
          type={type}
          name={name}
          className="input"
          ref={register({required: true})}
        />
        {errors[name] && <h5>{label} is required</h5>}
      </div>
    </div>
  );
};

export default Input;
