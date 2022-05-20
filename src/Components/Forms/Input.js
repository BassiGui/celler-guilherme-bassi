import React from 'react';
import style from './Input.module.css';

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  erro,
  onBlur,
  placeholder,
}) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={style.input}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {erro && <p className={style.erro}>{erro}</p>}
    </div>
  );
};

export default Input;
