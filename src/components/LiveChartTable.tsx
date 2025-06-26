import React, { useState } from "react";
import styles from "./LiveChartTable.module.css";

const data = [
  { rank: 1, name: "NVDL", price: "90,507원", change: "+4,761원 (5.5%)", volume: "2.7억원" },
  { rank: 2, name: "엔비디아", price: "167,092원", change: "+4,278원 (2.6%)", volume: "4.7억원" },
  { rank: 3, name: "화이화 일렉트릭", price: "17,593원", change: "-83원 (0.4%)", volume: "4,502만원" },
  { rank: 4, name: "삼성전자", price: "13,910원", change: "+0.3%", volume: "3.1억원" },
  { rank: 5, name: "테슬라", price: "343,912원", change: "-2.9%", volume: "2.2억원" },
  { rank: 6, name: "두산에너빌리티", price: "21,000원", change: "+1.2%", volume: "1.9억원" },
  { rank: 7, name: "포스코", price: "94,978원", change: "-1.6%", volume: "1.7억원" },
  { rank: 8, name: "SK하이닉스", price: "212,500원", change: "+0.0%", volume: "1.5억원" },
  { rank: 9, name: "씨젠", price: "22,700원", change: "+0.8%", volume: "1.2억원" },
  { rank: 10, name: "TSMC", price: "237,163원", change: "+3.0%", volume: "1.0억원" },
];

const tabs = [
  "거래대금", "급상승", "급하락","인기", "개인", "기관", "외국인", "관심"
];

function getChangeColor(change: string) {
  if (change.startsWith('+')) return styles.changeUp;
  if (change.startsWith('-')) return styles.changeDown;
  return styles.price;
}

const LiveChartTable = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>실시간 차트</h3>
          <span className={styles.update}>업데이트 07:21 기준</span>
        </div>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>순위</th>
              <th className={styles.th}>종목</th>
              <th className={`${styles.th} ${styles.tdRight}`}>현재가</th>
              <th className={`${styles.th} ${styles.tdRight}`}>등락률</th>
              <th className={`${styles.th} ${styles.tdRight}`}>거래대금</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.rank} className={styles.tr}>
                <td className={styles.rank}>{row.rank}</td>
                <td className={styles.name}>{row.name}</td>
                <td className={`${styles.price} ${styles.tdRight}`}>{row.price}</td>
                <td className={`${getChangeColor(row.change)} ${styles.tdRight}`}>{row.change}</td>
                <td className={`${styles.volume} ${styles.tdRight}`}>{row.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveChartTable; 