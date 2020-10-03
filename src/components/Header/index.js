import React from 'react';
import styles from './styles.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.gridContainer}>
        <div className={styles.logoName}>RealNews</div>
      </header>
    </>
  );
};

export default Header;
