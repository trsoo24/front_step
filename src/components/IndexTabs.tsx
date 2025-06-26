import React, { useState } from "react";
import styles from "./IndexTabs.module.css";

const tabs = ["국내", "해외", "ETF"];

const IndexTabs = () => {
  const [active, setActive] = useState(tabs[0]);
  return (
    <div className={styles.container}>
      {tabs.map(tab => (
        <button
          key={tab}
          className={`${styles.tab} ${active === tab ? styles.tabActive : ''}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default IndexTabs; 