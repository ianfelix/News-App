import React from 'react';

import styles from './styles.module.css';

const ImgCard = ({ img, title }) => {
  return (
    <>
      <img className={styles.imgCard} src={img} alt={title} />
    </>
  );
};

export default ImgCard;
