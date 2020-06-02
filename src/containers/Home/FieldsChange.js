import React, {useState} from 'react';
import './FieldsChange.scss';

const FieldsChange = ({
  label,
  type,
  placeholder,
  style,
  name,
  onHandleChange,
  id,
  value,
  register,
  errors,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <div className="fields-change">
        <h4 style={style}>{label}</h4>
        <div className={isFocused ? 'input-wrapper focus' : 'input-wrapper'}>
          <input
            name={name}
            value={value}
            type={type}
            onChange={(e) => {
              onHandleChange(e.target.value);
            }}
            ref={register({required: true})}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <i className="fa fa-check" id={'true' + id}></i>
          <i className="fa fa-times" id={'false' + id}></i>
        </div>
        {errors[name] && <span>{placeholder} is required!</span>}
      </div>
    </div>
  );
};
export default FieldsChange;
