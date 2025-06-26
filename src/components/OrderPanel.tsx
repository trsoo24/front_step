import React, { useState } from "react";

const OrderPanel = () => {
  const [type, setType] = useState("매수");
  const [price, setPrice] = useState(69900);
  const [amount, setAmount] = useState(1);

  return (
    <aside className="fixed md:top-20 md:right-0 md:h-[calc(100vh-5rem)] md:w-80 w-full bottom-0 left-0 md:left-auto bg-white border-t md:border-t-0 md:border-l border-gray-200 shadow-2xl flex flex-col p-4 md:p-6 z-40 rounded-t-2xl md:rounded-l-2xl">
      {/* 매수/매도 탭 */}
      <div className="flex gap-2 mb-4 md:mb-6">
        {['매수', '매도'].map((t) => (
          <button
            key={t}
            className={`flex-1 py-2 rounded-lg font-bold text-lg transition ${
              type === t ? (t === '매수' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setType(t)}
          >
            {t}
          </button>
        ))}
      </div>
      {/* 가격 입력 */}
      <label className="block mb-1 text-gray-700 font-semibold">가격</label>
      <input
        type="number"
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
        className="w-full mb-3 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {/* 수량 입력 */}
      <label className="block mb-1 text-gray-700 font-semibold">수량</label>
      <input
        type="number"
        value={amount}
        min={1}
        onChange={e => setAmount(Number(e.target.value))}
        className="w-full mb-4 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {/* 주문 버튼 */}
      <button
        className={`w-full py-3 rounded-xl font-bold text-lg shadow transition ${
          type === '매수' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
      >
        {type}하기
      </button>
    </aside>
  );
};

export default OrderPanel; 