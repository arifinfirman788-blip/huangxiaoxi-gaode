
import React from 'react';

const ScreenSearch: React.FC = () => {
  const items = [
    { title: '贵阳市', sub: '地级市 贵州省', icon: '🏙️' },
    { title: '贵阳北站', sub: '高铁站 观山湖区', icon: '🚄' },
    { title: '龙洞堡国际机场', sub: '机场 南明区', icon: '✈️' },
    { title: '甲秀楼', sub: '景点 翠微路', icon: '🏛️' },
    { title: '贵州 多彩黄小西伴你游贵州', sub: '官方认证', icon: '📍', highlight: true },
    { title: '花溪公园', sub: '公园 花溪大道', icon: '🌲' },
    { title: '青岩古镇', sub: '4A景区 花溪区', icon: '🏮' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Fake Header */}
      <div className="pt-10 px-4 pb-4 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">‹</span>
          </div>
          <div className="flex-1 bg-gray-100 h-10 rounded-full flex items-center px-4 gap-2">
            <span className="text-gray-400 text-sm">🔍 贵州</span>
          </div>
          <span className="text-blue-600 text-sm font-medium">搜索</span>
        </div>
      </div>

      {/* Suggestion List */}
      <div className="flex-1 overflow-y-auto pb-6">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`px-4 py-3 flex items-start gap-4 border-b border-gray-100 transition-colors ${item.highlight ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'}`}
          >
            <div className="text-xl mt-1">{item.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`font-medium ${item.highlight ? 'text-blue-600' : 'text-gray-800'}`}>
                  {item.title}
                </span>
                {item.highlight && (
                  <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] rounded border border-amber-200 font-bold">
                    官方认证
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
            </div>
            <div className="text-gray-300 text-sm self-center">↗</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenSearch;
