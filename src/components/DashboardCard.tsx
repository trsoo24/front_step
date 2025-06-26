import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const DashboardCard = ({ title, value, icon }: DashboardCardProps) => (
  <div className="bg-gray-800 rounded-2xl shadow-xl p-7 flex flex-col items-center gap-3 w-full min-w-[180px] max-w-[240px] border border-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
    <div className="text-4xl mb-1 drop-shadow-sm">{icon}</div>
    <div className="text-base font-semibold text-gray-400 mb-1">{title}</div>
    <div className="text-2xl font-extrabold text-blue-400 tracking-tight">{value}</div>
  </div>
);

export default DashboardCard; 