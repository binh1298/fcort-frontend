import React, {useEffect} from 'react';
import './style.scss';
const Input = ({register, name, label, type, errors, valid}) => {
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
    <div className="input-container">
      <div className="input-icon">
        {name === 'username' ? (
          <i className="fa fas fa-user"></i>
        ) : (
          <i className="fa fas fa-lock"></i>
        )}
      </div>
      <div className="input-field">
        <h5>{label}</h5>
        <input
          type={type}
          name={name}
          className="input"
          ref={valid || register({required: `${label} is required`})}
        />
        {errors[name] && <span>{errors[name].message}</span>}
      </div>
    </div>
  );
};

export default Input;
