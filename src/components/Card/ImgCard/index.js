import React from 'react';
import imgNotFound from '../../../assets/images/image-not-found.jpg';
import styles from './styles.module.css';

const ImgCard = ({ img, title }) => {
  return (
    <div className={styles.imgContent}>
      {img ? (
        <img className={styles.imgCard} src={img} alt={title} />
      ) : (
        <img className={styles.imgCard} src={imgNotFound} alt={title} />
      )}
    </div>
  );
};

export default ImgCard;
