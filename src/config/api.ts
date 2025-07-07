// API 설정
export const API_CONFIG = {
  BASE_URL: 'http://localhost:8080',
  TIMEOUT: 10000, // 10초
};

// API 엔드포인트들
export const API_ENDPOINTS = {
  // 인증 관련
  LOGIN: '/api/users/login',
  SIGNUP: '/api/users/signup',
  CHECK_USERNAME: '/api/users/check-username',
  
  // 뉴스 관련
  NEWS: '/api/news',
  
  // 기타 엔드포인트들...
};

// 전체 API URL 생성 함수
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
}; 