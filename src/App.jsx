import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Stats_Data } from "./data/mockData";
import StatusCard from "./components/StatusCard";
import TicketTable from "./components/TicketTable";

function App() {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar  */}
      <Sidebar />

      <main className="flex flex-1 flex-col">
        {/* Header  */}
        <Header />
        <div className="p-8 space-y-8">
          {/* Top Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Stats_Data.map((stat, index) => (
              <StatusCard key={index} {...stat} />
            ))}
          </div>

          {/* Ticket Table Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Recent Tickets</h2>
              <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
            </div>
            <TicketTable />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
