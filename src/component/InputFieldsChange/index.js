import React, {useState, useEffect} from 'react';
import './style.scss';

const InputFieldsChange = ({
  label,
  type,
  placeholder,
  style,
  name,
  register,
  errors,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentText, setCurrentText] = useState();
  useEffect(() => {
    setCurrentText(value);
  }, [value]);
  return (
    <div>
      <div className="fields-change">
        <h4 style={style}>{label}</h4>
        <div className={isFocused ? 'input-wrapper focus' : 'input-wrapper'}>
          <input
            name={name}
            value={currentText}
            type={type}
            onChange={(e) => {
              setCurrentText(e.target.value);
            }}
            ref={register({required: true})}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {currentText ? (
            <i className="fa fa-check" id={'icon-text-valid'}></i>
          ) : (
            <i className="fa fa-times" id={'icon-text-invalid'}></i>
          )}
        </div>
        {errors[name] && <span>{placeholder} is required!</span>}
      </div>
    </div>
  );
};
export default InputFieldsChange;
