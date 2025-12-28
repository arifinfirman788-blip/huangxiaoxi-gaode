import React, { useState } from 'react';
import { getAssetPath } from '@/utils/assets';

interface Props {
  onBack: () => void;
}

const ScreenCityLiupanshui: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('summer');

  const gourmetList = [
    { 
      name: '01 / 水城羊肉粉', 
      desc: '滚烫羊汤浇注米粉，黑山羊肉片薄如纸，一碗入魂。', 
      tag: '国家地理标志',
      img: getAssetPath('/guizhou-travel/yangroufen.jpg')
    },
    { 
      name: '02 / 水城烙锅', 
      desc: '中间凸起的特制砂锅，荤素皆可烙，蘸上五香辣椒面。', 
      tag: '西部一绝',
      img: getAssetPath('/guizhou-travel/laoguo.jpg')
    },
    { 
      name: '03 / 盘县火腿', 
      desc: '肉色红润，香味浓郁，形似琵琶，皮色腊黄。', 
      tag: '非遗美食',
      img: getAssetPath('/guizhou-travel/ham.jpg')
    },
    { 
      name: '04 / 荷叶糯米鸡', 
      desc: '荷叶包裹糯米与鸡肉，清香扑鼻，软糯可口。', 
      tag: '街头风味',
      img: getAssetPath('/guizhou-travel/nuomiji.jpg')
    }
  ];

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'; // General food fallback
  };

  const handleScenicImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'; // Nature fallback
  };

  return (
    <div className="h-full bg-slate-50 relative font-sans overflow-hidden">
      
      {/* Scrollable Content Area */}
      <div className="h-full overflow-y-auto no-scrollbar pb-24">
      
      {/* 1. Hero Promotion Section - Cool City Theme */}
        <div className="relative h-[480px] w-full flex-shrink-0 group overflow-hidden">
          <img 
            src={getAssetPath('/guizhou-travel/liupanshui_hero.jpg')}
            onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&fit=crop')}
            alt="中国凉都" 
            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
          />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/60 via-transparent to-slate-50"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-12 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 z-30 hover:bg-white/30 transition-all active:scale-95"
        >
          ‹
        </button>

        {/* Real-time Weather Widget */}
        <div className="absolute top-12 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 flex flex-col items-center z-20 shadow-lg animate-fade-in">
           <span className="text-3xl drop-shadow-md">☁️</span>
           <span className="text-white font-black text-xl mt-1 drop-shadow-md">19°C</span>
           <span className="text-white/80 text-[8px] uppercase tracking-widest font-bold">Cool Summer</span>
        </div>

        {/* Massive Title */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center w-full z-10">
          <div className="inline-block relative">
            <h1 className="text-[5rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter drop-shadow-2xl filter blur-[0.5px]">
              六盘水
            </h1>
            <div className="absolute -top-6 -right-8 bg-cyan-500 text-white text-[10px] font-black px-2 py-1 rounded-bl-xl rounded-tr-xl shadow-lg transform rotate-12">
              中国凉都
            </div>
          </div>
          <p className="text-cyan-100/80 text-sm font-bold tracking-[0.5em] uppercase mt-2">Liupanshui City</p>
        </div>

        <div className="absolute bottom-10 left-6 right-6 z-20">
          <div className="flex gap-2 mb-4">
             <span className="bg-white/20 backdrop-blur-md border border-white/10 text-white text-[9px] px-2 py-1 rounded-md">❄️ 南国冰雪城</span>
             <span className="bg-white/20 backdrop-blur-md border border-white/10 text-white text-[9px] px-2 py-1 rounded-md">🌡️ 均温19°C</span>
          </div>
          <h2 className="text-3xl font-black text-slate-800 leading-tight italic tracking-tighter">
            避暑胜地 · <span className="text-cyan-600">康养之都</span>
          </h2>
          <p className="mt-2 text-slate-500 text-xs font-medium leading-relaxed">
            这里的夏天不用空调，这里的冬天可以滑雪。一座被森林和湿地包围的生态花园城市。
          </p>
        </div>
      </div>

      {/* 2. Temperature Trend Chart (NEW FEATURE) */}
      <section className="px-4 -mt-6 relative z-30">
        <div className="bg-white rounded-[2rem] p-5 pt-8 shadow-xl border border-cyan-100 overflow-hidden">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-slate-800 font-black italic text-lg">清凉大PK</h3>
              <div className="flex gap-2 text-[9px] font-bold">
                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400"></span>六盘水</span>
                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400"></span>火炉城市</span>
              </div>
           </div>
           {/* Simple CSS Bar Chart Visualization */}
           <div className="flex items-end justify-between h-24 gap-2 px-2">
              {[
                { month: '6月', lps: 40, hot: 80 },
                { month: '7月', lps: 45, hot: 95 },
                { month: '8月', lps: 42, hot: 100 },
                { month: '9月', lps: 35, hot: 70 },
              ].map((data, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                   <div className="w-full flex gap-1 items-end justify-center h-[80%]">
                      <div style={{ height: `${data.lps}%` }} className="w-2 bg-cyan-400 rounded-t-sm relative group">
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity">19°</span>
                      </div>
                      <div style={{ height: `${data.hot}%` }} className="w-2 bg-orange-300/50 rounded-t-sm relative group">
                         <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">35°</span>
                      </div>
                   </div>
                   <span className="text-[9px] text-slate-400 font-bold">{data.month}</span>
                </div>
              ))}
           </div>
           <p className="text-[9px] text-slate-400 mt-3 text-center bg-slate-50 py-1.5 rounded-lg">
             💡 夏季平均气温仅19.7℃，比同纬度城市低10-15℃
           </p>
        </div>
      </section>

      {/* 3. Recommended Route Timeline (NEW FEATURE) */}
      <section className="px-6 mt-10">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-cyan-600 tracking-widest uppercase">Itinerary / 路线</span>
             <h3 className="text-2xl font-black text-slate-800 italic">48小时 · 玩转凉都</h3>
           </div>
        </div>
        
        <div className="space-y-0 pl-2">
           {[
             { time: 'Day 1 09:00', title: '梅花山索道', desc: '世界最长同路径山地索道，云端漫步。' },
             { time: 'Day 1 14:00', title: '水城古镇', desc: '品尝正宗烙锅，感受三线文化记忆。' },
             { time: 'Day 2 10:00', title: '乌蒙大草原', desc: '看牛羊成群，赏万亩高山杜鹃花海。' },
             { time: 'Day 2 16:00', title: '妥乐古银杏', desc: '世界古银杏之乡，金色童话世界。' },
           ].map((item, i) => (
             <div key={i} className="flex gap-4 relative pb-8 last:pb-0">
               <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 border-2 border-white shadow-md z-10"></div>
                  {i !== 3 && <div className="w-0.5 h-full bg-cyan-100 absolute top-3"></div>}
               </div>
               <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex-1 -mt-1.5 active:scale-95 transition-transform cursor-pointer">
                  <span className="text-[9px] font-bold text-cyan-500 bg-cyan-50 px-1.5 py-0.5 rounded-md">{item.time}</span>
                  <h4 className="text-sm font-black text-slate-800 mt-1">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">{item.desc}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* 4. [游 Tour] - Scenic Spots */}
      <section className="px-6 mt-10">
        <div className="flex items-end justify-between mb-6">
           <div>
             <span className="text-[10px] font-black text-indigo-600 tracking-widest uppercase">Explore / 探秘</span>
             <h3 className="text-2xl font-black text-slate-800 italic">山河秘境</h3>
           </div>
        </div>
        
        <div className="space-y-4">
          <div className="relative h-60 rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer">
            <img src={getAssetPath('/guizhou-travel/ski_resort.jpg')} onError={handleScenicImgError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-white text-[9px] font-black uppercase">Open for Skiing</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
               <h4 className="text-white text-2xl font-black italic tracking-tight">梅花山国际滑雪场</h4>
               <p className="text-white/80 text-[11px] mt-1.5 font-medium">西南最大的滑雪胜地，在云端飞驰的极致体验。</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-lg group">
               <img src={getAssetPath('/guizhou-travel/wumeng_grassland.jpg')} onError={handleScenicImgError} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
               <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-[13px] font-black leading-tight">乌蒙大草原</div>
                  <div className="text-white/70 text-[9px] mt-1">云端漫步</div>
               </div>
            </div>
            <div className="relative h-48 rounded-[2rem] overflow-hidden shadow-lg group">
               <img src={getAssetPath('/guizhou-travel/tuole_ginkgo.jpg')} onError={handleScenicImgError} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
               <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-[13px] font-black leading-tight">妥乐古银杏</div>
                  <div className="text-white/70 text-[9px] mt-1">金色童话</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. [吃 Eat] - Local Flavors */}
      <section className="mt-16 bg-white py-12 rounded-t-[3rem] -mb-16 pb-32 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]">
        <div className="px-6 flex items-end justify-between mb-8">
           <div>
             <span className="text-[10px] font-black text-amber-600 tracking-widest uppercase">Taste / 寻味</span>
             <h3 className="text-2xl font-black text-slate-900 italic">舌尖上的凉都</h3>
           </div>
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 pb-4">
          {gourmetList.map((food, i) => (
            <div key={i} className="min-w-[200px] bg-slate-50 rounded-[2rem] overflow-hidden group border border-slate-100">
              <div className="h-32 relative overflow-hidden">
                <img src={food.img} onError={handleImgError} alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-4">
                <div className="text-[9px] text-cyan-600 font-bold uppercase tracking-wider mb-1">{food.tag}</div>
                <h4 className="text-[13px] font-black text-slate-900 mb-1 leading-tight">
                  {food.name.split(' / ')[1] || food.name}
                </h4>
                <p className="text-[9px] text-slate-400 leading-relaxed line-clamp-2">
                  {food.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      </div> {/* End of Scrollable Content Area */}

      {/* 6. FAB - Ticket Booking (NEW FEATURE) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 flex justify-center pointer-events-none">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs px-8 py-3.5 rounded-full shadow-[0_10px_20px_rgba(6,182,212,0.4)] flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform animate-bounce-subtle pointer-events-auto">
           <span>🎫</span> 立即预订景区门票
        </button>
      </div>

    </div>
  );
};

export default ScreenCityLiupanshui;
