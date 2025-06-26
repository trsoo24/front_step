import React, { useEffect, useState } from "react";
import { fetchOrderbook } from "../api/liveData";

export default function OrderbookPanel({ stockCode }: { stockCode: string }) {
  const [orderbook, setOrderbook] = useState<any>(null);

  useEffect(() => {
    fetchOrderbook(stockCode).then(data => setOrderbook(data.data));
  }, [stockCode]);

  if (!orderbook) return <div>Loading orderbook...</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold mb-2">호가창</h2>
      <div className="flex gap-8">
        <div>
          <div className="font-semibold">매수호가</div>
          {orderbook.bids.map((bid: any, i: number) => (
            <div key={i} className="text-green-600">{bid.price} ({bid.quantity})</div>
          ))}
        </div>
        <div>
          <div className="font-semibold">매도호가</div>
          {orderbook.asks.map((ask: any, i: number) => (
            <div key={i} className="text-red-600">{ask.price} ({ask.quantity})</div>
          ))}
        </div>
      </div>
    </div>
  );
}