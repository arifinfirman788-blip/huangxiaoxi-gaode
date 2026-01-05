import React, { useState } from 'react';

interface SubPageProps {
  onBack: () => void;
  onNavigate?: (view: any) => void;
}

const Header: React.FC<{ title: string; onBack: () => void; rightIcon?: string; transparent?: boolean }> = ({ title, onBack, rightIcon = 'more_horiz', transparent }) => (
  <div className={`px-4 py-3 flex items-center justify-between sticky top-0 z-50 transition-colors ${transparent ? 'bg-transparent' : 'bg-white border-b border-gray-100'}`}>
    <div className="flex items-center">
        <button onClick={onBack} className={`p-2 -ml-2 rounded-full transition-colors ${transparent ? 'bg-white/20 text-gray-800 backdrop-blur-md hover:bg-white/30' : 'text-gray-800 hover:bg-gray-100'}`}>
            <span className="material-icons text-2xl">chevron_left</span>
        </button>
        <h1 className="font-bold text-gray-900 text-lg ml-1">{title}</h1>
    </div>
    <button className={`p-2 rounded-full ${transparent ? 'bg-white/20 text-gray-800 backdrop-blur-md' : 'text-gray-600 hover:bg-gray-50'}`}>
        <span className="material-icons">{rightIcon}</span>
    </button>
  </div>
);

// --- 旅居线路列表 (SojournRoutes) ---
export const SojournRoutes: React.FC<SubPageProps> = ({ onBack, onNavigate }) => {
  const [activeTheme, setActiveTheme] = useState('自然风光');
  const themes = ['自然风光', '民俗风情', '户外徒步', '城市探索'];

  const routes = [
    { 
        id: 1, 
        title: '望天天空云卷云舒', 
        subtitle: '贵阳-安顺 避暑7日深度游', 
        days: '7天', 
        spots: '6个景点', 
        image: '15', 
        cardColorHex: '#8B3A3A', 
        tags: ['亲子', '避暑'],
        participants: '2,341',
        avatars: ['10', '11', '12']
    },
    { 
        id: 2, 
        title: '去山野吸氧，寻找自我', 
        subtitle: '荔波小七孔 疗愈之旅', 
        days: '5天', 
        spots: '4个景点', 
        image: '16', 
        cardColorHex: '#2E5E58', 
        tags: ['徒步', '摄影'],
        participants: '1,890',
        avatars: ['20', '21', '22']
    },
    { 
        id: 3, 
        title: '苗寨里的慢时光', 
        subtitle: '黔东南非遗体验', 
        days: '6天', 
        spots: '5个景点', 
        image: '17', 
        cardColorHex: '#5D4037', 
        tags: ['人文', '美食'],
        participants: '3,502',
        avatars: ['40', '41', '42']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="旅居路线" onBack={onBack} />
      
      <div className="sticky top-[53px] z-40 bg-white shadow-sm pb-2">
         <div className="px-4 py-3 overflow-x-auto no-scrollbar flex space-x-3">
             {themes.map(t => (
                 <button 
                    key={t} 
                    onClick={() => setActiveTheme(t)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                        activeTheme === t 
                        ? 'bg-teal-600 text-white shadow-md shadow-teal-200' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                 >
                    {t}
                 </button>
             ))}
         </div>
      </div>
      
      <div className="px-4 py-4 space-y-6 pb-8">
        {routes.map((route) => (
          <div 
            key={route.id} 
            className="rounded-[24px] overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col transition-transform active:scale-[0.99] duration-300"
            style={{ backgroundColor: route.cardColorHex }}
          >
              <div 
                onClick={() => onNavigate && onNavigate('SOJOURN_ROUTE_DETAIL')} 
                className="relative h-[240px] w-full cursor-pointer group shrink-0"
              >
                 <img src={`https://picsum.photos/id/${route.image}/600/400`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={route.title} />
                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3"></div>
                 <div 
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    style={{ background: `linear-gradient(to bottom, transparent, ${route.cardColorHex} 90%)` }}
                 ></div>
                 
                 <div className="absolute top-4 right-4">
                     <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-white text-xs font-bold border border-white/20 shadow-sm">
                         {route.tags[0]}
                     </div>
                 </div>

                 <div className="absolute bottom-4 p-4 w-full text-white z-10">
                    <div className="flex justify-between items-end">
                        <div className="flex-1 mr-2">
                            <h2 className="text-xl font-bold mb-1 leading-tight shadow-sm drop-shadow-md">{route.title}</h2>
                            <p className="text-white/90 text-xs font-medium mb-2 line-clamp-1">{route.subtitle}</p>
                            <div className="flex items-center text-[10px] space-x-2 text-white/95">
                                 <span className="bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-md border border-white/10">{route.days}</span>
                                 <span className="bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-md border border-white/10">{route.spots}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end shrink-0">
                            <div className="flex -space-x-2 mb-1.5">
                                {route.avatars.map((av, idx) => (
                                    <img key={idx} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${av}`} className="w-6 h-6 rounded-full border border-white/40 bg-gray-200" alt="p" />
                                ))}
                            </div>
                            <div className="text-[10px] font-medium text-white/90 text-right drop-shadow-sm">
                                <span className="font-bold text-orange-300 text-sm mr-0.5">{route.participants}</span>
                                <br/>人已参加
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 旅居基地列表 (SojournBases) ---
export const SojournBases: React.FC<SubPageProps> = ({ onBack, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('重点镇');
  const tabs = ['重点镇', '重点村', '等级村寨', '度假区'];
  
  const bases = [
      { id: 1, name: '花溪青岩古镇基地', tags: ['提供早餐', '近景点'], score: 4.9, auth: '国家级重点镇', location: '贵阳市花溪区青岩镇', img: '28', desc: '坐落在半山腰的侗族木楼，推窗见云海' },
      { id: 2, name: '乌当偏坡布依村寨', tags: ['田园风光', '非遗'], score: 4.8, auth: '省级示范村', location: '贵阳市乌当区偏坡乡', img: '29', desc: '体验原生态布依族生活，品尝特色酸汤鱼' },
      { id: 3, name: '开阳十里画廊', tags: ['观景平台', '徒步'], score: 4.7, auth: '度假区', location: '贵阳市开阳县禾丰乡', img: '30', desc: '如诗如画的山水长卷，摄影爱好者的天堂' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="旅居基地" onBack={onBack} />
      
      <div className="bg-white px-4 py-2 flex items-center space-x-3 sticky top-[53px] z-40">
         <div className="flex items-center text-gray-800 font-bold text-sm">
             <span>贵阳</span>
             <span className="material-icons text-sm">arrow_drop_down</span>
         </div>
         <div className="flex-1 bg-gray-100 rounded-full flex items-center px-3 py-1.5">
             <span className="material-icons text-gray-400 text-lg">search</span>
             <input type="text" placeholder="搜索基地名..." className="bg-transparent border-none outline-none text-xs ml-2 flex-1 text-gray-700" />
         </div>
      </div>

      <div className="px-4 pt-3 pb-3 bg-gray-50 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2">
              {tabs.map(t => (
                  <button 
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${activeTab === t ? 'bg-teal-600 text-white shadow-md shadow-teal-200' : 'bg-white text-gray-600 border border-gray-200'}`}
                  >
                      {t}
                  </button>
              ))}
          </div>
      </div>
      
      <div className="p-4 space-y-4 pb-8">
         {bases.map((base) => (
             <div 
                key={base.id} 
                onClick={() => onNavigate && onNavigate('SOJOURN_BASE_DETAIL')}
                className="bg-white p-3 rounded-2xl shadow-sm border border-gray-50 flex space-x-3 active:scale-[0.99] transition-transform cursor-pointer"
             >
                 <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden">
                    <img src={`https://picsum.photos/id/${base.img}/200/200`} className="w-full h-full object-cover" alt={base.name} />
                    <div className="absolute top-1 left-1 bg-orange-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                        {base.score}分
                    </div>
                 </div>
                 
                 <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                     <div>
                        <div className="flex items-start justify-between">
                            <h3 className="font-bold text-gray-900 text-sm truncate pr-2">{base.name}</h3>
                            {base.auth && <span className="bg-blue-50 text-blue-600 text-[9px] px-1 py-0.5 rounded border border-blue-100 whitespace-nowrap">{base.auth}</span>}
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-2 mb-1.5">
                            {base.tags.map(t => (
                                <span key={t} className="text-[10px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">{t}</span>
                            ))}
                        </div>
                        <p className="text-[11px] text-gray-500 line-clamp-1 italic mt-1">"{base.desc}"</p>
                     </div>
                     
                     <div className="flex items-center text-xs text-gray-500 mt-1">
                         <span className="material-icons text-[14px] mr-1 text-gray-400">location_on</span>
                         <span className="truncate">{base.location}</span>
                     </div>
                 </div>
             </div>
         ))}
      </div>
    </div>
  );
};

// --- 旅居攻略 (SojournGuides) ---
export const SojournGuides: React.FC<SubPageProps> = ({ onBack }) => {
  const guides = [
      { id: 1, title: '贵阳本地人带你吃遍这些苍蝇馆子！', author: '吃货小美', likes: 1240, img: '54', type: '美食' },
      { id: 2, title: '避暑必看！贵州这5个小众秘境', author: '山野社长', likes: 892, img: '55', type: '避暑' },
      { id: 3, title: '带爸妈去贵州旅居，注意这几点', author: '孝心游', likes: 566, img: '56', type: '家庭' },
      { id: 4, title: '一个月仅需1500？低成本旅居', author: '省钱君', likes: 2300, img: '57', type: '省钱' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="旅居攻略" onBack={onBack} />
      
      <div className="bg-white border-b border-gray-100 sticky top-[53px] z-40">
          <div className="flex justify-around text-sm font-medium pt-2 pb-0">
              {['最新发布', '最受欢迎', '附近攻略', '专题'].map((t, i) => (
                  <div key={t} className={`pb-2 border-b-2 ${i === 1 ? 'border-teal-500 text-teal-600 font-bold' : 'border-transparent text-gray-500'}`}>
                      {t}
                  </div>
              ))}
          </div>
      </div>

      <div className="p-4 columns-2 gap-4 space-y-4 pb-20">
         {guides.map((guide) => (
             <div key={guide.id} className="break-inside-avoid bg-white rounded-xl shadow-sm overflow-hidden mb-4 group cursor-pointer border border-gray-100">
                 <div className="relative overflow-hidden">
                    <img src={`https://picsum.photos/id/${guide.img}/400/${guide.id % 2 === 0 ? 500 : 300}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="封面" />
                    <span className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">{guide.type}</span>
                 </div>
                 <div className="p-3">
                     <p className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 mb-2">{guide.title}</p>
                     <div className="flex items-center justify-between">
                         <div className="flex items-center">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${guide.author}`} className="w-4 h-4 rounded-full bg-gray-100 mr-1" alt="头像" />
                             <span className="text-[10px] text-gray-500 truncate max-w-[60px]">{guide.author}</span>
                         </div>
                         <div className="flex items-center text-gray-400">
                             <span className="material-icons text-[12px] mr-0.5">favorite_border</span>
                             <span className="text-[10px]">{guide.likes}</span>
                         </div>
                     </div>
                 </div>
             </div>
         ))}
      </div>

      <div className="fixed bottom-6 right-5">
          <button className="bg-teal-600 text-white rounded-full px-4 py-3 shadow-lg shadow-teal-600/30 flex items-center font-bold active:scale-95 transition-transform">
              <span className="material-icons text-xl mr-1">add_a_photo</span>
              发布攻略
          </button>
      </div>
    </div>
  );
};

// --- 旅居舒适度 (SojournComfort - Map Mode) ---
export const SojournComfort: React.FC<SubPageProps> = ({ onBack }) => {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-50">
          <Header title="舒适度指数" onBack={onBack} transparent />
      </div>
      
      <div className="flex-1 relative bg-blue-100" onClick={() => setSelectedPoint(null)}>
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
          
          <div 
            onClick={(e) => { e.stopPropagation(); setSelectedPoint(1); }}
            className="absolute top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
          >
              <div className="bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-lg animate-ping absolute"></div>
              <div className="bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-lg relative flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">优</span>
              </div>
              <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded shadow text-[10px] font-bold whitespace-nowrap">花溪公园</div>
          </div>

           <div 
            onClick={(e) => { e.stopPropagation(); setSelectedPoint(2); }}
            className="absolute top-[60%] right-[30%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
          >
              <div className="bg-red-500 w-4 h-4 rounded-full border-2 border-white shadow-lg relative flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">挤</span>
              </div>
              <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded shadow text-[10px] font-bold whitespace-nowrap">青岩古镇</div>
          </div>
      </div>

      {selectedPoint && (
          <div className="absolute bottom-8 left-4 right-4 bg-white rounded-2xl p-4 shadow-2xl animate-slide-up">
               <div className="flex justify-between items-start mb-3">
                   <div>
                       <h3 className="font-bold text-lg text-gray-900">{selectedPoint === 1 ? '花溪公园' : '青岩古镇'}</h3>
                       <div className="flex items-center text-xs text-gray-500 mt-0.5">
                           <span className="material-icons text-[14px] mr-1">location_on</span>
                           {selectedPoint === 1 ? '贵阳市花溪公园' : '贵阳市花溪区青岩镇'}
                       </div>
                   </div>
                   <div className={`px-2 py-1 rounded-lg text-xs font-bold ${selectedPoint === 1 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                       {selectedPoint === 1 ? '非常舒适 98' : '拥挤 45'}
                   </div>
               </div>
               
               <div className="grid grid-cols-2 gap-3 mb-3">
                   <div className="bg-gray-50 p-2 rounded-lg text-center">
                       <div className="text-[10px] text-gray-400">当前温度</div>
                       <div className="font-bold text-gray-800">{selectedPoint === 1 ? '24°C' : '28°C'}</div>
                   </div>
                   <div className="bg-gray-50 p-2 rounded-lg text-center">
                       <div className="text-[10px] text-gray-400">基地舒适度</div>
                       <div className="font-bold text-gray-800">88</div>
                   </div>
               </div>
               
               {selectedPoint === 2 && (
                   <div className="bg-teal-50 border border-teal-100 p-2 rounded-lg flex items-center justify-between">
                       <div className="flex items-center text-xs text-teal-800">
                           <span className="material-icons text-sm mr-2">recommend</span>
                           <span>推荐前往：花溪夜郎谷</span>
                       </div>
                       <button className="text-xs bg-teal-600 text-white px-2 py-1 rounded">详情</button>
                   </div>
               )}
          </div>
      )}
    </div>
  );
};
