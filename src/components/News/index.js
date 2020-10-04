import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card';
import styles from './styles.module.css';

const News = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'd17bbb4cefbd4a78844f473907e29475';
  const category = 'technology';
  const country = 'br';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`,
        );
        const data = response.data;
        setNews(data.articles);
        console.log(data.articles);
      } catch (erro) {
        setError('Falha na requisição da API ' + erro);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div className={styles.animeLoading}></div>;
  if (error) return <p style={{ color: 'white' }}>{error}</p>;
  if (news === null) return null;
  return (
    <section className={styles.content}>
      <div className={styles.containerGrid}>
        {news.map(({ url, source, title, urlToImage, publishedAt }) => (
          <Card
            key={url}
            url={url}
            name={source.name}
            title={title}
            img={urlToImage}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
