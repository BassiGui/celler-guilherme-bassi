import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Beer } from '../Assets/beer-svgrepo-com.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Beer />
      <p>Guilherme Bassi. Frontend Developer</p>
    </footer>
  );
};

export default Footer;
