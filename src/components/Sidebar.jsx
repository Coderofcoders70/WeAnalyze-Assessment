import { LayoutDashboard, Ticket, Users, BarChart3, Settings, HelpCircle, X } from 'lucide-react';

const Sidebar = ({ isOpen, setOpen }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Ticket size={20} />, label: 'Tickets', active: false },
    { icon: <Users size={20} />, label: 'Customers', active: false },
    { icon: <BarChart3 size={20} />, label: 'Capacity', active: false },
    { icon: <Settings size={20} />, label: 'Settings', active: false },
    { icon: <HelpCircle size={20} />, label: 'Support', active: false },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden" 
          onClick={() => setOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-blue-600 font-bold text-2xl flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg shrink-0"></div> 
            WeAnalyz
          </h1>
          <button className="lg:hidden text-slate-500" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${item.active ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}>
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;