import React, { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import axios from "axios";

const Dashboard = () => {
  const [balance, setBalance] = useState<string | number>("로딩중...");
  const [profit, setProfit] = useState<string | number>("로딩중...");
  const [orders, setOrders] = useState<number | string>("로딩중...");
  const [favorites, setFavorites] = useState<number | string>("로딩중...");

  useEffect(() => {
    // 예시: 실제 API 엔드포인트로 교체
    axios.get("/api/test/account/balance/12345678")
      .then(res => setBalance(res.data.data?.balance ?? "N/A"))
      .catch(() => setBalance("에러"));

    // 아래는 더미 데이터, 실제 API로 교체 필요
    setProfit("+3.2%");
    setOrders(2);
    setFavorites(5);
  }, []);

  return (
    <main className="flex flex-col items-center gap-10 pt-36 pb-16 min-h-[90vh] bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">자 드가자</h1>
        <p className="text-gray-400">스마트 자동매매 플랫폼</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        <DashboardCard title="내 잔고" value={balance} icon={<span>💰</span>} />
        <DashboardCard title="오늘의 수익률" value={profit} icon={<span>📈</span>} />
        <DashboardCard title="실행 중인 주문" value={orders} icon={<span>📝</span>} />
        <DashboardCard title="관심 종목" value={favorites} icon={<span>⭐</span>} />
      </div>
      <div className="mt-10 text-gray-500 text-base font-medium">실시간 시세 및 API 연동은 곧 추가됩니다 <span className="ml-1">🚀</span></div>
    </main>
  );
};

export default Dashboard; 