import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Beer } from '../Assets/beer-svgrepo-com.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Beer celler - Home" className={styles.logo}>
          <Beer />
        </Link>
        <Link
          to="/add-new-beer"
          className={styles.plusIcon}
          title="add a new kind of beer"
        >
          +
        </Link>
      </nav>
    </header>
  );
};

export default Header;
