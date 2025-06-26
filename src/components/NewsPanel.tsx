import React, { useEffect, useState } from "react";
import { fetchNews } from "../api/liveData";

export default function NewsPanel({ stockCode }: { stockCode: string }) {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    fetchNews(stockCode).then(data => setNews(data.data));
  }, [stockCode]);

  if (!news) return <div>Loading news...</div>;

  return (
    <div className="p-4 bg-white rounded shadow mt-4">
      <h2 className="font-bold mb-2">뉴스</h2>
      <ul>
        {news.newsList.map((item: any, i: number) => (
          <li key={i} className="mb-2">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{item.title}</a>
            <div className="text-sm text-gray-600">{item.summary}</div>
            <div className="text-xs text-gray-400">{item.publishedAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}