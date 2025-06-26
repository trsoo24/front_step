import React from "react";
import styles from "./SidebarButtons.module.css";

interface SidebarButtonsProps {
  onOpenSidebar: () => void;
  sidebarOpen: boolean;
}

const SidebarButtons: React.FC<SidebarButtonsProps> = ({ onOpenSidebar, sidebarOpen }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={onOpenSidebar}
        className={`${styles.button} ${sidebarOpen ? styles.buttonActive : ''}`}
      >
        <span className={styles.icon}>★</span>
        <span className={styles.buttonLabel}>관심</span>
      </button>
      <button
        className={styles.button}
        disabled
      >
        <span className={styles.icon}>💼</span>
        <span className={styles.buttonLabel}>내 투자</span>
      </button>
      <button
        className={styles.button}
        disabled
      >
        <span className={styles.icon}>🕒</span>
        <span className={styles.buttonLabel}>최근 본</span>
      </button>
    </div>
  );
};

export default SidebarButtons; 