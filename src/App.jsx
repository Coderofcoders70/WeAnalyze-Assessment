import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Stats_Data } from './data/mockData';
import StatusCard from './components/StatusCard';
import TicketTable from './components/TicketTable';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />

      <main className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <div className="p-4 md:p-8 space-y-6 md:space-y-8">
          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Stats_Data.map((stat, index) => (
              <StatusCard key={index} {...stat} />
            ))}
          </div>

          {/* Ticket Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-4 md:p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-base md:text-lg font-semibold">Recent Tickets</h2>
              <button className="text-xs md:text-sm text-blue-600 font-medium hover:underline">View All</button>
            </div>
            <TicketTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;