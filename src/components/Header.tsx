import React from "react";

const Header = () => (
  <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 py-3 md:py-4 bg-gray-900/80 backdrop-blur shadow-lg z-50 border-b border-gray-800">
    <div className="flex items-center gap-2 md:gap-3">
      <span className="text-2xl md:text-3xl">💰</span>
      <span className="font-extrabold text-lg md:text-2xl text-white tracking-tight">가보자고</span>
    </div>
    <div className="flex-1 flex justify-center mx-2">
      <input
        type="text"
        placeholder="주식명 또는 코드를 검색하세요"
        className="w-40 md:w-96 px-3 md:px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
      />
    </div>
    <div className="flex items-center gap-2 md:gap-4">
      <button className="text-xl md:text-2xl text-white hover:text-yellow-400 transition" title="알림">
        🔔
      </button>
    </div>
  </header>
);

export default Header; 