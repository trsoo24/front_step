import React, { useEffect, useState } from "react";
import axios from "axios";

const MarketOverview = () => {
  const [overview, setOverview] = useState<string>("로딩중...");

  useEffect(() => {
    // 실제 API 연동 필요
    axios.get("/api/test/stock/price/005930")
      .then(res => setOverview(JSON.stringify(res.data.data)))
      .catch(() => setOverview("시장 개요를 불러올 수 없습니다."));
  }, []);

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 w-full min-w-[220px] max-w-[400px] border border-gray-700">
      <div className="text-lg font-bold text-white mb-3">시장 개요</div>
      <div className="text-gray-300 text-sm whitespace-pre-line break-all">{overview}</div>
    </div>
  );
};

export default MarketOverview; 