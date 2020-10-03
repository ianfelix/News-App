import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import styles from './styles.module.css';

const News = () => {
  const [news, setNews] = useState([]);

  const API_KEY = 'd17bbb4cefbd4a78844f473907e29475';
  const category = 'technology';
  const country = 'br';

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(
        `top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`,
      );
      const data = response.data;
      setNews(data.articles);
      console.log(data.articles);
    };
    fetchData();
  }, []);

  if (news === null) return null;
  return (
    <section className={styles.content}>
      <div className={styles.containerGrid}>
        {news.map(({ url, source, title, urlToImage }) => (
          <div key={url} className={styles.card}>
            <p className={styles.author}>{source.name}</p>
            <p className={styles.title}>{title}</p>
            <a href={url} target='_blanck'>
              <img src={urlToImage} alt={title} className={styles.cardImg} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
