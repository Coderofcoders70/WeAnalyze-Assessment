import { Tickets_Data } from '../data/mockData';

const TicketTable = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Open': return 'bg-blue-100 text-blue-700';
      case 'In Progress': return 'bg-amber-100 text-amber-700';
      case 'Resolved': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getPriorityStyle = (priority) => {
    if (priority === 'High') return 'text-red-500';
    if (priority === 'Medium') return 'text-amber-500';
    return 'text-slate-500';
  };

  return (
    <div className="w-full">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Ticket ID</th>
              <th className="px-6 py-4 font-medium">Subject</th>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Priority</th>
              <th className="px-6 py-4 font-medium text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {Tickets_Data.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{ticket.id}</td>
                <td className="px-6 py-4 text-sm font-semibold">{ticket.subject}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{ticket.user}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <span className={getPriorityStyle(ticket.priority)}>{ticket.priority}</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 text-right">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Ticket Table  */}
      <div className="md:hidden divide-y divide-slate-100">
        {Tickets_Data.map((ticket) => (
          <div key={ticket.id} className="p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase tracking-tighter">{ticket.id}</span>
                <h3 className="text-sm font-bold text-slate-900 mt-0.5">{ticket.subject}</h3>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${getStatusStyle(ticket.status)}`}>
                {ticket.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-y-2 text-xs">
              <div>
                <p className="text-slate-400 mb-0.5">User</p>
                <p className="font-medium text-slate-700">{ticket.user}</p>
              </div>
              <div>
                <p className="text-slate-400 mb-0.5">Priority</p>
                <p className={`font-medium ${getPriorityStyle(ticket.priority)}`}>{ticket.priority}</p>
              </div>
              <div>
                <p className="text-slate-400 mb-0.5">Submission Date</p>
                <p className="font-medium text-slate-700">{ticket.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketTable;