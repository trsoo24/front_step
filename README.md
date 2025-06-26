# 📈 토스증권 스타일 주식 대시보드

> 실시간 주식 정보와 뉴스를 한눈에 볼 수 있는 현대적인 웹 대시보드

![React](https://img.shields.io/badge/React-18.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.0-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ 주요 기능

### 📊 실시간 주식 정보
- **코스피, 코스닥, 나스닥, S&P 500** 실시간 지수 표시
- 각 지수별 **미니 차트** 제공
- **등락률** 실시간 업데이트

### 📰 주요 뉴스
- **상위 4개 뉴스** 이미지와 함께 표시
- **추가 뉴스 목록** 텍스트로 간편하게 확인
- **시간/언론사** 정보 포함

### 📈 실시간 차트
- **거래대금, 거래량, 급상승, 급락락** 등 다양한 기준으로 정렬
- **TOP 10 종목** 실시간 순위 표시
- **업데이트 시간** 표시

### ⭐ 관심 주식 관리
- **우측 사이드바**로 관심 주식 목록 관리
- **실시간 가격** 및 **등락률** 표시
- **반응형 레이아웃**으로 화면 크기에 맞춰 조정

## 🚀 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안정성 확보
- **Vite** - 빠른 개발 환경 및 빌드 도구
- **CSS Modules** - 컴포넌트별 스타일 관리

### Styling
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **CSS Modules** - 스타일 충돌 방지 및 모듈화

### Development Tools
- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 전처리
- **TypeScript** - 정적 타입 검사

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/trsoo24/front_step.git
cd stock-dashboard
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

### 4. 빌드
```bash
npm run build
```

## 🏗️ 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── IndexCards.tsx              # 주식 지수 카드
│   ├── IndexCards.module.css
│   ├── LiveChartTable.tsx          # 실시간 차트 테이블
│   ├── LiveChartTable.module.css
│   ├── NewsCarousel.tsx            # 뉴스 캐러셀
│   ├── NewsCarousel.module.css
│   ├── TossHeader.tsx              # 헤더
│   ├── TossHeader.module.css
│   ├── WatchlistPanel.tsx          # 관심 주식 패널
│   ├── WatchlistPanel.module.css
│   ├── SidebarButtons.tsx          # 사이드바 버튼
│   ├── SidebarButtons.module.css
│   └── IndexTabs.tsx               # 탭 메뉴
│       └── IndexTabs.module.css
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx           # 앱 진입점
└── index.css          # 전역 스타일
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary Blue**: `#3b82f6` (아이덴티티 컬러)
- **Success Green**: `#10b981` (상승)
- **Danger Red**: `#ef4444` (하락)
- **Neutral Gray**: `#6b7280` (중립)

### 레이아웃
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 지원
- **CSS Grid & Flexbox**: 현대적인 레이아웃 시스템
- **CSS Modules**: 컴포넌트별 스타일 격리

## 🔧 주요 컴포넌트

### IndexCards
주요 주식 지수(코스피, 코스닥, 나스닥, S&P 500)를 카드 형태로 표시
- 실시간 지수 값
- 미니 차트
- 등락률 표시

### NewsCarousel
주요 뉴스를 캐러셀 형태로 표시
- 상위 4개 뉴스 (이미지 포함)
- 추가 뉴스 목록 (텍스트)
- 시간/언론사 정보

### LiveChartTable
실시간 주식 차트를 테이블 형태로 표시
- 다양한 정렬 기준 (거래대금, 거래량 등)
- TOP 10 종목 순위
- 실시간 업데이트 시간

### WatchlistPanel
관심 주식 관리를 위한 사이드 패널
- 관심 주식 목록
- 실시간 가격 정보
- 등락률 표시

## 🌟 특징

### 🎯 사용자 경험
- **직관적인 인터페이스**: 토스 스타일의 깔끔한 디자인
- **실시간 업데이트**: 주식 정보의 실시간 반영
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험

### 🔧 개발자 경험
- **TypeScript**: 타입 안정성으로 개발 생산성 향상
- **CSS Modules**: 스타일 충돌 없는 모듈화된 CSS
- **컴포넌트 기반**: 재사용 가능한 컴포넌트 구조

### 📱 반응형 지원
- **모바일**: 320px 이상
- **태블릿**: 768px 이상
- **데스크탑**: 1024px 이상

## 🚀 향후 계획

### 단기 계획
- [ ] 실시간 API 연동
- [ ] 차트 라이브러리 추가 (Chart.js, D3.js)
- [ ] 다크 모드 지원
- [ ] 알림 기능 추가

### 장기 계획
- [ ] PWA 지원
- [ ] 실시간 웹소켓 연결
- [ ] 사용자 인증 시스템
- [ ] 포트폴리오 관리 기능

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요!

- **이메일**: trsoo24@naver.com
- **GitHub**: [@trsoo24](https://github.com/trsoo24)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
