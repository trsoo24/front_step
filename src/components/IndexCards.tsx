import React from "react";
import styles from "./IndexCards.module.css";

const indices = [
  { name: "코스피", value: "2,824.35", change: "+0.00%", icon: "🇰🇷", graph: <svg width="120" height="40"><polyline points="0,30 15,20 30,24 45,16 60,28 75,12 90,20 105,18 120,20" fill="none" stroke="#3b82f6" strokeWidth="2"/></svg> },
  { name: "코스닥", value: "822.48", change: "+0.00%", icon: "🇰🇷", graph: <svg width="120" height="40"><polyline points="0,25 15,22 30,28 45,20 60,24 75,16 90,20 105,18 120,22" fill="none" stroke="#10b981" strokeWidth="2"/></svg> },
  { name: "나스닥", value: "17,871.22", change: "-0.70%", icon: "🇺🇸", graph: <svg width="120" height="40"><polyline points="0,20 15,18 30,24 45,16 60,20 75,12 90,16 105,14 120,16" fill="none" stroke="#ef4444" strokeWidth="2"/></svg> },
  { name: "S&P500", value: "5,544.00", change: "+0.00%", icon: "🇺🇸", graph: <svg width="120" height="40"><polyline points="0,30 15,28 30,26 45,24 60,22 75,20 90,18 105,16 120,14" fill="none" stroke="#6366f1" strokeWidth="2"/></svg> },
];

const IndexCards = () => (
  <div className={styles.container}>
    {indices.map(idx => (
      <div key={idx.name} className={styles.card}>
        <span className={styles.icon}>{idx.icon}</span>
        <span className={styles.title}>{idx.name}</span>
        <div className={styles.graph}>{idx.graph}</div>
        <span className={styles.value}>{idx.value}</span>
        <span className={
          idx.change.startsWith('-') ? styles.changeDown : styles.changeUp
        }>
          {idx.change}
        </span>
      </div>
    ))}
  </div>
);

export default IndexCards; 