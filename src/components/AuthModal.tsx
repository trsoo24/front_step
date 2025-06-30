import { useState } from 'react';
import styles from './AuthModal.module.css';
import { loginUser, signupUser, checkUsernameAvailable } from '../api/auth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: (userInfo?: any) => void;
}

const initialForm = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  realName: '',
  phone: '',
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(initialForm);
  const [usernameCheck, setUsernameCheck] = useState<'idle' | 'checking' | 'available' | 'unavailable'>('idle');
  const [usernameMsg, setUsernameMsg] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsernameCheck('idle');
      setUsernameMsg('');
    }
    if (name === 'phone') {
      let onlyNum = value.replace(/[^0-9]/g, '');
      let formatted = onlyNum;
      if (onlyNum.length <= 3) {
        formatted = onlyNum;
      } else if (onlyNum.length <= 7) {
        formatted = onlyNum.replace(/(\d{3})(\d{0,4})/, '$1-$2');
      } else {
        formatted = onlyNum.replace(/(\d{3})(\d{3,4})(\d{0,4})/, '$1-$2-$3');
      }
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (error) setError('');
  };

  // 회원가입 유효성 검사
  const validateSignup = () => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,50}$/;
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/;
    const phoneRegex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;

    if (!formData.username || !usernameRegex.test(formData.username)) {
      return '아이디는 3~50자, 영문/숫자/언더스코어만 가능합니다.';
    }
    if (!formData.email || !emailRegex.test(formData.email) || formData.email.length > 100) {
      return '올바른 이메일 형식(100자 이하)으로 입력해주세요.';
    }
    if (!formData.password || !passwordRegex.test(formData.password)) {
      return '비밀번호는 8~100자, 영문 대소문자/숫자/특수문자를 모두 포함해야 합니다.';
    }
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      return '비밀번호가 일치하지 않습니다.';
    }
    if (!formData.realName || formData.realName.length > 100) {
      return '실명을 입력해주세요. (100자 이하)';
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      return '전화번호는 01x-xxx(x)-xxxx 형식으로 입력해주세요.';
    }
    return '';
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateSignup();
    if (err) {
      setError(err);
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const result = await signupUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        realName: formData.realName,
        phone: formData.phone,
      });
      if (result.success) {
        alert('회원가입에 성공했습니다! 로그인해주세요.');
        setActiveTab('login');
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          realName: '',
          phone: '',
        });
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : '회원가입에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const result = await loginUser({
        username: formData.username,
        password: formData.password,
      });
      if (result.success) {
        console.log('로그인 성공 userInfo:', result.data);
        onClose(result.data);
        setFormData(initialForm);
      } else {
        setError(result.error_message || '존재하지 않는 아이디입니다. 혹은 비밀번호를 확인해주세요.');
      }
    } catch (error: any) {
      setError('서버와의 통신에 문제가 있습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTabChange = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
    setError('');
    if (tab === 'login') {
      setFormData(prev => ({
        ...prev,
        username: '',
        password: '',
      }));
    } else if (tab === 'signup') {
      setFormData(prev => ({
        ...prev,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        realName: '',
        phone: '',
      }));
    }
  };

  // 아이디 중복 확인
  const handleUsernameCheck = async () => {
    if (!formData.username) return;
    setUsernameCheck('checking');
    setUsernameMsg('');
    try {
      const res = await checkUsernameAvailable(formData.username);
      if (res.available) {
        setUsernameCheck('available');
        setUsernameMsg('사용 가능한 아이디입니다.');
      } else {
        setUsernameCheck('unavailable');
        setUsernameMsg('이미 사용 중인 아이디입니다.');
      }
    } catch {
      setUsernameCheck('unavailable');
      setUsernameMsg('중복 확인에 실패했습니다.');
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>연준증권</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'login' ? styles.active : ''}`}
            onClick={() => handleTabChange('login')}
          >
            로그인
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'signup' ? styles.active : ''}`}
            onClick={() => handleTabChange('signup')}
          >
            회원가입
          </button>
        </div>

        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>아이디</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="아이디"
                required
                disabled={isLoading}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>비밀번호</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="비밀번호"
                required
                disabled={isLoading}
              />
              {error && (
                <div className={styles.inputError}>{error}</div>
              )}
            </div>
            <div className={styles.helperLinks}>
              <button type="button" className={styles.helperLink}>
                아이디 찾기
              </button>
              <span className={styles.divider}>|</span>
              <button type="button" className={styles.helperLink}>
                비밀번호 찾기
              </button>
            </div>
            <button
              type="submit"
              className={`${styles.submitBtn} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        )}

        {activeTab === 'signup' && (
          <>
            {error && (
              <div className={styles.errorMessage}>{error}</div>
            )}
            <form onSubmit={handleSignup} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>아이디</label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="아이디 (영문, 숫자, 언더스코어 3~50자)"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className={styles.checkBtn}
                    onClick={handleUsernameCheck}
                    disabled={isLoading || !formData.username || usernameCheck === 'checking'}
                  >
                    {usernameCheck === 'checking' ? '확인 중...' : '중복 확인'}
                  </button>
                </div>
                {usernameCheck !== 'idle' && usernameMsg && (
                  <div className={usernameCheck === 'available' ? styles.usernameAvailable : styles.usernameUnavailable}>
                    {usernameMsg}
                  </div>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>이메일</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="이메일"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>비밀번호</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="비밀번호 (영문 대소문자, 숫자, 특수문자 포함 8~100자)"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>비밀번호 확인</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="비밀번호 확인"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>실명</label>
                <input
                  type="text"
                  name="realName"
                  value={formData.realName}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="실명 (100자 이하)"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>전화번호</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="01x-xxxx-xxxx"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className={`${styles.submitBtn} ${isLoading ? styles.loading : ''}`}
                disabled={isLoading}
              >
                {isLoading ? '회원가입 중...' : '회원가입'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal; 