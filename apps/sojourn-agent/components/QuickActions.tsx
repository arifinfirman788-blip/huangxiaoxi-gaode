import React from 'react';

const actions = [
    { label: '旅行规划', icon: 'explore', color: 'text-teal-600', bg: 'bg-teal-50' },
    { label: '快捷订购', icon: 'shopping_cart', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: '文娱活动', icon: 'local_activity', color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: '打卡留言', icon: 'camera_alt', color: 'text-red-600', bg: 'bg-red-50' },
];

export const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-3 px-4 mb-2">
        {actions.map((action, idx) => (
            <button key={idx} className={`${action.bg} py-3 rounded-xl flex flex-col items-center justify-center space-y-1.5 active:opacity-70 active:scale-95 transition-all shadow-sm`}>
                <span className={`material-icons ${action.color} text-xl`}>{action.icon}</span>
                <span className={`text-[11px] font-bold ${action.color}`}>{action.label}</span>
            </button>
        ))}
    </div>
  );
};