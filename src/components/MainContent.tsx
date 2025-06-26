import React, { useState } from "react";

const tabs = ["차트", "호가", "뉴스", "거래원", "토론"];

const tabContents: Record<string, React.ReactNode> = {
  "차트": (
    <div className="h-80 flex items-center justify-center bg-gray-100 rounded-xl border border-gray-200">
      <span className="text-gray-400 text-xl">차트 영역 (추후 연동)</span>
    </div>
  ),
  "호가": (
    <div className="h-80 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200">
      <span className="text-gray-400 text-xl">호가 정보 (임시)</span>
    </div>
  ),
  "뉴스": (
    <div className="h-80 flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-gray-200">
      <span className="text-gray-400 text-xl mb-2">관련 뉴스 (임시)</span>
      <ul className="text-gray-500 text-base list-disc pl-6">
        <li>토스증권, 신기능 출시</li>
        <li>주식 시장 동향 분석</li>
        <li>투자자 인터뷰</li>
      </ul>
    </div>
  ),
  "거래원": (
    <div className="h-80 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200">
      <span className="text-gray-400 text-xl">거래원 정보 (임시)</span>
    </div>
  ),
  "토론": (
    <div className="h-80 flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-gray-200">
      <span className="text-gray-400 text-xl mb-2">토론방 (임시)</span>
      <div className="text-gray-500 text-base">아직 등록된 글이 없습니다.</div>
    </div>
  ),
};

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("차트");

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-4">
      {/* 종목명, 가격, 등락률 */}
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        <span className="text-2xl font-bold text-gray-900">토스증권</span>
        <span className="text-xl font-semibold text-blue-600">69,900원</span>
        <span className="text-base font-medium text-red-500">+1,000 (+1.45%)</span>
      </div>
      {/* 탭 메뉴 */}
      <div className="flex gap-6 border-b border-gray-200 mb-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-2 text-lg font-semibold transition border-b-2 ${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* 탭별 내용 */}
      <div className="flex justify-center w-full">
        <div className="w-full flex flex-col items-center">
          {tabContents[activeTab]}
        </div>
      </div>
    </section>
  );
};

export default MainContent; 