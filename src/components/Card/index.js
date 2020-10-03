import React from 'react';
import HeaderCard from './HeaderCard';
import ImgCard from './ImgCard';
import FooterCard from './FooterCard';
import styles from './styles.module.css';

const Card = ({ url, name, title, img }) => {
  return (
    <div className={styles.card}>
      <a href={url}>
        <HeaderCard name={name} title={title} />
        <ImgCard img={img} title={title} />
        <FooterCard />
      </a>
    </div>
  );
};

export default Card;
