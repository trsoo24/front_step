import { useState, useEffect } from 'react';
import styles from './TossHeader.module.css';
import AuthModal from './AuthModal';
import { isLoggedIn, getUserInfo, logoutUser } from '../api/auth';

const TossHeader = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (!userInfo && isLoggedIn()) {
      // localStorage에서 즉시 읽어오기
      const info = getUserInfo();
      if (info) setUserInfo(info);
    }
    if (userInfo) {
      console.log('헤더 userInfo:', userInfo);
    }
  }, [userInfo]);

  const checkLoginStatus = () => {
    const loggedIn = isLoggedIn();
    setIsUserLoggedIn(loggedIn);
    if (loggedIn) {
      setUserInfo(getUserInfo());
    } else {
      setUserInfo(null);
    }
  };

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = (loginSuccessUser?: any) => {
    setIsAuthModalOpen(false);
    if (loginSuccessUser) {
      setUserInfo(loginSuccessUser);
      setIsUserLoggedIn(true);
    } else {
      checkLoginStatus();
    }
  };

  const handleLogout = () => {
    logoutUser();
    checkLoginStatus();
    alert('로그아웃되었습니다.');
  };

  return (
    <>
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
        {/* 우측: 로그인/사용자 정보 */}
        {isUserLoggedIn && userInfo ? (
          <div className={styles.userSection}>
            <span className={styles.userName}>
              {(userInfo.realName || userInfo.name || userInfo.username || '사용자')} 님, 안녕하세요!
            </span>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <button className={styles.loginBtn} onClick={handleLoginClick}>
            로그인
          </button>
        )}
      </header>
      
      {/* 인증 모달 */}
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default TossHeader; 