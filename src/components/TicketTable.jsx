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
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
            <th className="px-6 py-4 font-medium">Ticket ID</th>
            <th className="px-6 py-4 font-medium">Subject</th>
            <th className="px-6 py-4 font-medium">User</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Priority</th>
            <th className="px-6 py-4 font-medium">Date</th>
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
              <td className="px-6 py-4 text-sm text-slate-500">{ticket.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;