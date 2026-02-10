import Sidebar from "./components/Sidebar";
import { Search, Bell, User } from 'lucide-react';

function Header() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search tickets..."
          className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        <button>
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div>
            <p>Admin</p>
          </div>
          <div>
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  )
}

function App() {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar  */}
      <Sidebar />

      <main className="flex flex-1 flex-col">
        {/* Header  */}
        <Header />
        {/* Status Cards  */}

        {/* Ticket Table  */}
      </main>

    </div>
  )
}

export default App
