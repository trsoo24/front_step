export async function fetchNews(stockCode: string) {
    return Promise.resolve({
      data: {
        newsList: [
          { title: "뉴스 제목1", url: "#", summary: "요약1", publishedAt: "2024-07-01" },
          { title: "뉴스 제목2", url: "#", summary: "요약2", publishedAt: "2024-07-01" }
        ]
      }
    });
  }
  
  export async function fetchOrderbook(stockCode: string) {
    return Promise.resolve({
      data: {
        bids: [{ price: 1000, quantity: 10 }],
        asks: [{ price: 1010, quantity: 5 }]
      }
    });
  }
  
  export async function fetchEvent(stockCode: string) {
    return Promise.resolve({
      data: {
        eventList: [
          { type: "공시", description: "공시 내용", eventTime: "2024-07-01", url: "#" }
        ]
      }
    });
  }