import React, { useEffect, useState } from "react";
import axios from "axios";

const Alert = () => {
  const [alerts, setAlerts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제 API 연동 필요
    axios.get("/api/test/health")
      .then(res => setAlerts([res.data.data]))
      .catch(() => setAlerts(["알림을 불러올 수 없습니다."]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-6 w-full min-w-[220px] max-w-[400px] border border-gray-700">
      <div className="text-lg font-bold text-white mb-3">최근 알림</div>
      {loading ? (
        <div className="text-gray-400">로딩중...</div>
      ) : (
        <ul className="text-gray-300 text-sm space-y-2">
          {alerts.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      )}
    </div>
  );
};

export default Alert; 