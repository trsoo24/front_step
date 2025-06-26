import React, { useState, useEffect } from "react";
import styles from "./NewsCarousel.module.css";

// 임시 데이터 - 추후 API 호출로 교체
const mockNews = [
  { id: 1, title: "'기술주 매도→모두 매도' S&P500 거의 모든 섹터 하락", summary: "44분 전 · 매일경제", src: "https://imgnews.pstatic.net/image/003/2025/06/25/NISI20250514_0001842489_web_20250514170415_20250625145918892.jpg?type=w860" },
  { id: 2, title: "[0719개장체크] 美 증시, 차익실현 매물 속 금리 인하 기대감 지속", summary: "25분 전 · 인포스탁데일리", src: "https://imgnews.pstatic.net/image/421/2025/06/25/0008332357_001_20250625144328676.jpg?type=w860" },
  { id: 3, title: "국제유가, 미 노동시장 냉각 신호에 소폭 하락…WTI 0.1%↓", summary: "50분 전 · 이투데이", src: "https://imgnews.pstatic.net/image/421/2025/06/25/0008332273_001_20250625142650787.jpg?type=w860" },
  { id: 4, title: "조정 국면·금리인하 횟수에 관심…주식·채권↓ 달러↑", summary: "1시간 전 · 연합뉴스", src: "https://imgnews.pstatic.net/image/029/2025/06/25/0002963852_001_20250625142622557.jpg?type=w860" },
  { id: 5, title: "TSMC 호실적에 엔비디아 2.6% 반등…'AI 랠리' 재점화", summary: "1시간 전 · 이데일리", src: "" },
  { id: 6, title: "비트코인, 6만4000달러대 '약세'…리플은 10% 급등", summary: "28분 전 · 조선비즈", src: "" },
  { id: 7, title: "오픈AI, 기존보다 60% 싼 'GPT-4o 미니' 출시", summary: "2시간 전 · 이데일리", src: "" },
  { id: 8, title: "달러, 유로 약세에 반등…ECB '9월 인하' 시사", summary: "2시간 전 · 연합뉴스", src: "" },
];

const NewsCarousel = () => {
  const [news, setNews] = useState(mockNews);
  const [loading, setLoading] = useState(false);

  // 추후 API 호출 함수
  const fetchNews = async () => {
    setLoading(true);
    try {
      // TODO: 실제 API 호출로 교체
      setNews(mockNews);
    } catch (error) {
      console.error('뉴스 데이터 로딩 실패:', error);
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
        {topNews.map((item) => (
          <div key={item.id} className={styles.card}>
            {item.src && (
              <img src={item.src} alt={item.title} className={styles.cardImg} />
            )}
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardSummary}>{item.summary}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.textRows}>
        {textRows.map((row, i) => (
          <div key={i} className={styles.textRow}>
            {row.map((item) => (
              <div key={item.id} className={styles.textItem}>
                {item.title}
                <span className={styles.textSummary}>{item.summary}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCarousel; 