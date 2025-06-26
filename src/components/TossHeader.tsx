import styles from './TossHeader.module.css';

const TossHeader = () => (
  <header className={styles.container}>
    {/* 좌측: 로고 */}
    <div className={styles.left}>
      <span className={styles.logo}> </span>
      <span className={styles.brand}>연준증권</span>
    </div>
    {/* 중앙: 메뉴 */}
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink}>뉴스</a>
      <a href="#" className={styles.menuLink}>시황/업데이트</a>
      <a href="#" className={styles.menuLink}>내 계좌</a>
    </nav>
    {/* 중앙: 검색창 */}
    <div className={styles.search}>
      <input
        type="text"
        placeholder="종목 검색"
        className={styles.searchInput}
      />
    </div>
    {/* 우측: 로그인 버튼 */}
    <button className={styles.loginBtn}>로그인</button>
  </header>
);

export default TossHeader; 