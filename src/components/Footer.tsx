import React from "react";

const Footer = () => (
  <footer className="w-full py-8 px-4 bg-gray-900 border-t border-gray-800 mt-10 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
    <div>
      <b>오토트레이드원</b> &copy; 2025. 모든 권리 보유.<br/>
      본 서비스는 자동 거래 신뢰성을 통해 트레이더에게 안정감을 경험하게 합니다. 실시간 시세와 API 연동 등 관련 정보는 기반한 정보를 나타냅니다.
    </div>
    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
      <div>
        <b>플랫폼</b><br/>
        계기판<br/>계정 설정<br/>거래 전략<br/>알림<br/>성과 분석
      </div>
      <div>
        <b>자주찾는</b><br/>
        토큰 관리<br/>산식 시뮬 레퍼<br/>자료실<br/>자주묻는질문<br/>서비스 약관<br/>위험 안내 동의
      </div>
    </div>
  </footer>
);

export default Footer; 