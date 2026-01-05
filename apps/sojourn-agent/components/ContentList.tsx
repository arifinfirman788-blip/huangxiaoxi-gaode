import React from 'react';

const tips = [
    { id: 1, title: '贵州必玩天花板', subtitle: '经典景点，不容错过！' },
    { id: 2, title: '贵州爆款线路', subtitle: '闭眼照抄直接出发' },
    { id: 3, title: '贵州秋日“绝美皮肤”', subtitle: '上线！' },
    { id: 4, title: '出发！去山野吸氧', subtitle: '' },
    { id: 5, title: '孩子最爱的贵州怎么玩？', subtitle: '' },
];

export const ContentList: React.FC = () => {
  return (
    <div className="mx-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4">
        <div className="px-5 py-4 border-b border-gray-50">
            <h3 className="font-bold text-gray-900 text-lg">贵州旅行的N种玩法</h3>
        </div>
        <div className="divide-y divide-gray-50">
            {tips.map((tip) => (
                <div key={tip.id} className="px-5 py-3.5 flex items-start space-x-3 active:bg-gray-50 transition-colors cursor-pointer group hover:bg-gray-50">
                    <span className="font-serif text-gray-300 font-bold mt-0.5 group-hover:text-orange-500 transition-colors text-lg italic">{tip.id}</span>
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-medium text-sm line-clamp-1 group-hover:text-orange-600 transition-colors">
                            {tip.title} 
                            {tip.subtitle && <span className="text-gray-300 font-normal mx-1">|</span>}
                            <span className="text-gray-500 font-normal text-xs">{tip.subtitle}</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};