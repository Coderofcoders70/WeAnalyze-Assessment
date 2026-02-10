import { Search, Bell, User, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-16 md:h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={onMenuClick} className="lg:hidden text-slate-500 p-1">
          <Menu size={24} />
        </button>

        <div className="relative w-full max-w-xs md:max-w-sm">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6 ml-4">
        <button className="relative text-slate-500 hover:text-blue-600">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-2 md:gap-3 pl-3 md:pl-6 border-l border-slate-200">
          <div className="hidden sm:block text-right">
            <p className="text-xs md:text-sm font-semibold leading-none">Admin</p>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
            <User size={18} className="text-slate-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;