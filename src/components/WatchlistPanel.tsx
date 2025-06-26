import React from "react";
import styles from "./WatchlistPanel.module.css";

const stocks = [
  { name: "삼성전자", price: "13,910원", change: "+0.3%", icon: "🟦" },
  { name: "엔비디아", price: "167,092원", change: "+2.6%", icon: "🟩" },
  { name: "테슬라", price: "343,912원", change: "-2.9%", icon: "🟥" },
  { name: "두산에너빌리티", price: "21,000원", change: "+1.2%", icon: "🟧" },
  { name: "포스코", price: "94,978원", change: "-1.6%", icon: "🟪" },
  { name: "SK하이닉스", price: "212,500원", change: "+0.0%", icon: "⬛" },
  { name: "씨젠", price: "22,700원", change: "+0.8%", icon: "🟫" },
  { name: "엔첩", price: "48,117원", change: "-1.1%", icon: "🟦" },
  { name: "TSMC", price: "237,163원", change: "+3.0%", icon: "🟩" },
  { name: "컴투스", price: "245,194원", change: "-1.9%", icon: "🟥" },
];

function getChangeColor(change: string) {
  if (change.startsWith('+')) return styles.changeUp;
  if (change.startsWith('-')) return styles.changeDown;
  return styles.change;
}

const WatchlistPanel = ({ onClose }: { onClose: () => void }) => (
  <aside className={styles.container}>
    <div className={styles.header}>
      <h3 className={styles.title}>관심 주식 TOP 10</h3>
      <button onClick={onClose} className={styles.closeBtn}>×</button>
    </div>
    <div className={styles.list}>
      {stocks.map((stock, idx) => (
        <div key={idx} className={styles.item}>
          <div className={styles.left}>
            <span className={styles.stockIcon}>{stock.icon}</span>
            <span className={styles.stockName}>{stock.name}</span>
          </div>
          <div className={styles.right}>
            <span className={styles.price}>{stock.price}</span>
            <span className={getChangeColor(stock.change)}>{stock.change}</span>
            <button className={styles.heartBtn}>♡</button>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

export default WatchlistPanel; 