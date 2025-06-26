import React from "react";

const QuickAction = () => (
  <div className="bg-gray-800 rounded-2xl shadow-xl p-6 w-full min-w-[220px] max-w-[400px] border border-gray-700 flex flex-col gap-3">
    <div className="text-lg font-bold text-white mb-3">빠른 작업</div>
    <button className="w-full py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition">+ 새로운 전략 만들기</button>
    <button className="w-full py-2 rounded-lg bg-gray-700 text-gray-200 font-semibold hover:bg-gray-600 transition">내 전략 보기</button>
    <button className="w-full py-2 rounded-lg bg-gray-700 text-gray-200 font-semibold hover:bg-gray-600 transition">계정 설정</button>
  </div>
);

export default QuickAction; 