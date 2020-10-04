import React, { useState } from 'react';
import HeaderCard from './HeaderCard';
import ImgCard from './ImgCard';
import FooterCard from './FooterCard';
import styles from './styles.module.css';

const Card = ({ url, name, title, img }) => {
  return (
    <div className={styles.card + ' animeUp'}>
      <a href={url} target='_blanck'>
        <HeaderCard name={name} title={title} />
        <ImgCard img={img} title={title} />
        <FooterCard />
      </a>
    </div>
  );
};

export default Card;
