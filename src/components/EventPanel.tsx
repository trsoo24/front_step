import React, { useEffect, useState } from "react";
import { fetchEvent } from "../api/liveData";

const EventPanel = ({ stockCode }: { stockCode: string }) => {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    fetchEvent(stockCode).then(data => setEvent(data.data));
  }, [stockCode]);

  if (!event) return <div>Loading events...</div>;

  return (
    <div className="p-4 bg-white rounded shadow mt-4">
      <h2 className="font-bold mb-2">이벤트/공시</h2>
      <ul>
        {event.eventList.map((item: any, i: number) => (
          <li key={i} className="mb-2">
            <span className="font-semibold">{item.type}</span>: {item.description}
            <div className="text-xs text-gray-400">{item.eventTime}</div>
            {item.url && (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">바로가기</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventPanel;