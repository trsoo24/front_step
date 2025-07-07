import React, { useState, useEffect } from "react";
import styles from "./NewsCarousel.module.css";
import { getApiUrl, API_ENDPOINTS } from '../config/api';

// API 응답에 맞는 뉴스 데이터 타입 정의
interface NewsItem {
  title: string;
  description: string;
  urlToImage?: string;
}

const NewsCarousel = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  // API 호출 함수
  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(getApiUrl(API_ENDPOINTS.NEWS));
      if (!response.ok) {
        throw new Error('뉴스 데이터를 가져오는데 실패했습니다');
      }
      const data = await response.json();
      // 배열이 아니면 articles 등에서 꺼내기
      if (Array.isArray(data)) {
        setNews(data);
      } else if (Array.isArray(data.articles)) {
        setNews(data.articles);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error('뉴스 데이터 로딩 실패:', error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const topNews = news.slice(0, 4); // 상위 4개 뉴스
  const textNews = news.slice(4);   // 텍스트만 뉴스

  // 하단 텍스트 뉴스 2줄로 분할
  const textRows = [
    textNews.slice(0, Math.ceil(textNews.length / 2)),
    textNews.slice(Math.ceil(textNews.length / 2)),
  ];

  if (loading) {
    return (
      <div className="my-4 flex justify-center">
        <div className="text-gray-500">뉴스 로딩 중...</div>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>주요 뉴스</h2>
        <a href="#" className={styles.more}>더 보기</a>
      </div>
      <div className={styles.cardGrid}>
        {topNews.map((item, idx) => (
          <div key={item.title + idx} className={styles.card}>
            {item.urlToImage && (
              <img src={item.urlToImage} alt={item.title} className={styles.cardImg} />
            )}
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardSummary}>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.textRows}>
        {textRows.map((row, i) => (
          <div key={i} className={styles.textRow}>
            {row.map((item, idx) => (
              <div key={item.title + idx} className={styles.textItem}>
                {item.title}
                <span className={styles.textSummary}>{item.description}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCarousel; 