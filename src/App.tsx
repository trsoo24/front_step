import { useState } from "react";
import TossHeader from "./components/TossHeader";
import IndexTabs from "./components/IndexTabs";
import IndexCards from "./components/IndexCards";
import NewsCarousel from "./components/NewsCarousel";
import LiveChartTable from "./components/LiveChartTable";
import WatchlistPanel from "./components/WatchlistPanel";
import SidebarButtons from "./components/SidebarButtons";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 관심 버튼 클릭 시 토글
  const handleSidebarToggle = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col relative">
      <TossHeader />
      {/* 사이드바 버튼을 최상위에 두고, fixed right-0 명확하게 */}
      <SidebarButtons onOpenSidebar={handleSidebarToggle} sidebarOpen={sidebarOpen} />
      <div className={`transition-all duration-300 ${sidebarOpen ? "mr-[22vw]" : "mr-0"}`}>
        <main className="flex-1 w-full px-4 py-8">
          <div className="space-y-10">
            <IndexTabs />
            <div className="my-6" />
            <IndexCards />
            <div className="my-6" />
            <NewsCarousel />
            <div className="my-6" />
            <LiveChartTable />
          </div>
        </main>
      </div>
      {/* 오른쪽 사이드바 */}
      {sidebarOpen && <WatchlistPanel onClose={handleSidebarToggle} />}
    </div>
  );
}

export default App;
