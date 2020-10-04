import React from 'react';
import styles from './styles.module.css';

const HeaderCard = ({ name, title }) => {
  const regexp = /(.com.br|.com|.br|.net)/gi;

  return (
    <>
      <div>
        <p className={styles.author}>{name.replace(regexp, '')}</p>
      </div>
      <div className={styles.contetTitle}>
        <p className={styles.title}>{title.replace(regexp, '')}</p>
      </div>
    </>
  );
};

export default HeaderCard;
