import { getApiUrl, API_ENDPOINTS } from '../config/api';

// 인증 관련 API 함수들

interface LoginData {
  username: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  realName: string;
  phone?: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  data?: any;
  error_message?: string;
}

// 로그인 API 호출
export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  try {
    const response = await fetch(getApiUrl(API_ENDPOINTS.LOGIN), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || '로그인에 실패했습니다.');
    }

    // 토큰을 로컬 스토리지에 저장
    if (result.token) {
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('userInfo', JSON.stringify(result.user));
    }

    return result;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};

// 회원가입 API 호출
export const signupUser = async (data: SignupData): Promise<AuthResponse> => {
  try {
    const response = await fetch(getApiUrl(API_ENDPOINTS.SIGNUP), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || '회원가입에 실패했습니다.');
    }

    return result;
  } catch (error) {
    console.error('회원가입 에러:', error);
    throw error;
  }
};

// 로그아웃 함수
export const logoutUser = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userInfo');
};

// 사용자 정보 가져오기
export const getUserInfo = () => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : null;
};

// 로그인 상태 확인
export const isLoggedIn = () => {
  return !!localStorage.getItem('authToken');
};

export const checkUsernameAvailable = async (username: string): Promise<{ available: boolean }> => {
  const res = await fetch(`${getApiUrl(API_ENDPOINTS.CHECK_USERNAME)}?username=${encodeURIComponent(username)}`);
  if (!res.ok) throw new Error('중복 확인에 실패했습니다.');
  return await res.json();
}; 