import React from 'react';
import styles from './Button.module.css';

const Button = ({ secondColor, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${secondColor ? styles.buttonSecondary : styles.button}`}
    >
      {children}
    </button>
  );
};

export default Button;
