import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatusCard = ({ title, value, change }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
          isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;