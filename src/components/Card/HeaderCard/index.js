import React from 'react';
import styles from './styles.module.css';

const HeaderCard = ({ name, title }) => {
  return (
    <div>
      <p className={styles.author}>{name}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default HeaderCard;
