import React from 'react';
import { getAssetPath } from '@/utils/assets';

interface Props {
  onFeatureClick?: (id: string) => void;
  activeFeatureId?: string | null;
  onBannerDblClick?: () => void;
  onCityDblClick?: (city: string) => void;
}

const ScreenAssistant: React.FC<Props> = ({ 
  onFeatureClick, 
  activeFeatureId, 
  onBannerDblClick, 
  onCityDblClick 
}) => {
  const categories = [
    { id: 'cat_food', title: '美食', icon: '🍲', img: getAssetPath('/guizhou-travel/changwangmian.jpeg') },
    { id: 'cat_scenery', title: '美景', icon: '⛰️', img: getAssetPath('/guizhou-travel/8b28c747fb1bfeccd123c823c726afa5.jpeg') },
    { id: 'cat_stay', title: '美宿', icon: '🏨', img: getAssetPath('/guizhou-travel/fandian.png') },
  ];

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&fit=crop'; 
  };

  const row1 = [
  { name: '贵阳', x: 0, y: 0 },
  { name: '六盘水', x: 2, y: 0 },
  { name: '遵义', x: 1, y: 0 },
  { name: '安顺', x: 0, y: 1 },
];

const row2 = [
  { name: '毕节', x: 1, y: 1 },
  { name: '铜仁', x: 2, y: 1 },
  { name: '黔东南自治州', x: 1, y: 2 },
  { name: '黔南自治州', x: 2, y: 2 },
  { name: '黔西南自治州', x: 0, y: 2 },
];

  const getCityImg = (name: string) => {
    const cityMap: Record<string, string> = {
      '贵阳': getAssetPath('/guizhou-travel/guiyang.png'),
      '六盘水': getAssetPath('/guizhou-travel/liupanshui.png'),
      '遵义': getAssetPath('/guizhou-travel/zunyi.png'),
      '铜仁': getAssetPath('/guizhou-travel/tongren.png'),
      '黔东南自治州': getAssetPath('/guizhou-travel/qiandongnan.png'),
      '安顺': getAssetPath('/guizhou-travel/anshun.png'),
      '毕节': getAssetPath('/guizhou-travel/fGi0ZO0wi.png'),
      '黔南自治州': getAssetPath('/guizhou-travel/fGi1AwvnX.png'),
      '黔西南自治州': getAssetPath('/guizhou-travel/fGi09XqGM.png')
    };
    return cityMap[name] || 'https://img.lenyiin.com/app/hide.php?key=UHhBLzV6Mnc2VmU3a2hGRGsxMzJCdWNjRTMxQlEwMkZIRC8vY29ZPQ==';
  };

  const itineraryStrategies = [
    { 
      title: '蘑菇屋寻龙记6日', 
      desc: '6天5晚 | 贵阳市出发 | 9.6分',
      img: getAssetPath('/guizhou-travel/wechat_img_1.png'), 
      tag: '亲子研学' 
    },
    { 
      title: '【2026奢享贵州奇遇记】', 
      desc: '6天5晚 | 贵阳市出发',
      img: getAssetPath('/guizhou-travel/wechat_img_2.png'), 
      tag: '探秘宇宙' 
    }
  ];

  const getHighlightClass = (id: string) => {
    return activeFeatureId === id 
      ? 'ring-4 ring-blue-500/60 ring-inset shadow-[0_0_30px_rgba(59,130,246,0.5)] scale-[0.98] brightness-110 z-20' 
      : 'hover:brightness-105';
  };

  return (
    <div className="h-full bg-[#05307a] flex flex-col overflow-y-auto no-scrollbar pb-16 relative font-sans scroll-smooth">
      
      {/* 1. Top Banner */}
      <div 
        id="feature-trigger-banner"
        className={`relative w-full h-64 flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-500 ${getHighlightClass('banner')}`}
        onClick={() => onFeatureClick?.('banner')}
        onDoubleClick={onBannerDblClick}
      >
        <img 
          src="https://img.lenyiin.com/app/hide.php?key=S09hYzFjR21sWm5HTmhER0x2VldWdWNjRTMxQlEwMkZIRC8vY29ZPQ==" 
          alt="智慧游贵州" 
          className="w-full h-full object-cover"
          onError={handleImgError}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-[#05307a] z-10"></div>
        <div className="absolute top-12 left-4 flex items-center gap-1.5 opacity-80 z-20">
           <img src="https://www.amap.com/favicon.ico" className="w-3 h-3 rounded-full" />
           <span className="text-[9px] text-white font-bold tracking-widest italic uppercase">Provincial Platform</span>
        </div>
        <div className="absolute bottom-12 left-6 z-20">
          <h2 className="text-white text-3xl font-black italic tracking-tighter leading-tight drop-shadow-xl">智慧游贵州</h2>
        </div>
      </div>

      <div className="px-3 -mt-10 space-y-4 relative z-20 pb-12">
        
        {/* 2. AI ASSISTANT HUB */}
        <section 
          id="feature-trigger-ai_assistant"
          className={`bg-gradient-to-br from-blue-600/30 to-indigo-900/60 rounded-[2.5rem] border overflow-hidden shadow-2xl relative transition-all cursor-pointer p-6 space-y-4 ${activeFeatureId === 'ai_assistant' ? 'border-blue-400 ring-2 ring-blue-400 scale-[1.02] z-30' : 'border-white/10'}`}
          onClick={() => onFeatureClick?.('ai_assistant')}
        >
          <div className="flex items-center justify-between relative z-10">
            <div>
              <span className="bg-yellow-400 text-[#05307a] text-[8px] font-black px-1.5 py-0.5 rounded-sm uppercase italic">Official AI</span>
              <h3 className="text-white text-[18px] font-black italic mt-1">黄小西 · 智慧导游</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/40 p-1.5 shadow-inner">
               <img src="https://img.lenyiin.com/app/hide.php?key=YmlZb2x1cjNrRWRrRXlLK3RFT21vN1FvY0ZZOFVZK1VGcWl0bGw0PQ==" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 relative z-10 mt-2">
            {/* Tile 1: AI探索 */}
            <div 
              id="feature-trigger-ai_explore"
              className={`bg-white/10 rounded-2xl p-4 flex flex-col justify-between h-28 border border-white/10 active:scale-95 transition-all cursor-pointer ${activeFeatureId === 'ai_explore' ? 'bg-blue-600 border-blue-400 ring-2 ring-blue-400/50' : 'hover:bg-white/15'}`}
              onClick={(e) => { e.stopPropagation(); onFeatureClick?.('ai_explore'); }}
            >
               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl mb-1">🔭</div>
               <div>
                 <div className="text-white text-[14px] font-black italic">AI 探索</div>
                 <div className="text-white/60 text-[9px] font-bold mt-1">发现未知惊喜 · 沉浸式漫游</div>
               </div>
            </div>

            {/* Tile 2: AI助手 */}
            <div 
              id="feature-trigger-ai_helper"
              className={`bg-white/10 rounded-2xl p-4 flex flex-col justify-between h-28 border border-white/10 active:scale-95 transition-all cursor-pointer ${activeFeatureId === 'ai_helper' ? 'bg-blue-600 border-blue-400 ring-2 ring-blue-400/50' : 'hover:bg-white/15'}`}
              onClick={(e) => { e.stopPropagation(); onFeatureClick?.('ai_helper'); }}
            >
               <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-xl mb-1">🤖</div>
               <div>
                 <div className="text-white text-[14px] font-black italic">AI 助手</div>
                 <div className="text-white/60 text-[9px] font-bold mt-1">您的贴身管家 · 智能问答</div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. One-Click Reach */}
        <section 
          id="feature-trigger-city_reach"
          className={`px-4 mt-6 animate-fade-in-up delay-300 transition-all cursor-pointer ${activeFeatureId === 'city_reach' ? 'scale-[1.02]' : ''}`}
          onClick={() => onFeatureClick?.('city_reach')}
        >
          <div className="px-2 mb-4">
            <h2 className="text-white text-[17px] font-black italic tracking-tighter drop-shadow-md">贵州全省一键直达</h2>
          </div>
          <div className="bg-white rounded-[1.5rem] shadow-2xl overflow-hidden border border-white/20">
            {/* 第一行: 4个 */}
            <div className="grid grid-cols-4 py-6 px-1">
              {row1.map((city) => (
                <div key={city.name} className="flex flex-col items-center gap-3 active:scale-95 transition-transform" onDoubleClick={() => onCityDblClick?.(city.name)}>
                  <div 
                    className="w-12 h-12 bg-no-repeat bg-contain"
                    style={{ 
                      backgroundImage: `url(${getCityImg(city.name)})`,
                      backgroundSize: (getCityImg(city.name).includes('thumb.php') || getCityImg(city.name).includes('/guizhou-travel/')) ? 'contain' : '300% 300%',
                      backgroundPosition: (getCityImg(city.name).includes('thumb.php') || getCityImg(city.name).includes('/guizhou-travel/')) ? 'center' : `${city.x * 50}% ${city.y * 50}%`,
                      mixBlendMode: 'multiply'
                    }}
                  />
                  <span className="text-gray-900 text-[11px] font-bold tracking-tight">{city.name}</span>
                </div>
              ))}
            </div>

            {/* 分割线 */}
            <div className="h-[1px] bg-blue-50/80 mx-4"></div>

            {/* 第二行: 5个 */}
            <div className="grid grid-cols-5 py-6 px-1">
              {row2.map((city) => (
                <div key={city.name} className="flex flex-col items-center gap-3 active:scale-95 transition-transform" onDoubleClick={() => onCityDblClick?.(city.name)}>
                  <div 
                    className="w-11 h-11 bg-no-repeat bg-contain"
                    style={{ 
                      backgroundImage: `url(${getCityImg(city.name)})`,
                      backgroundSize: (getCityImg(city.name).includes('thumb.php') || getCityImg(city.name).includes('/guizhou-travel/')) ? 'contain' : '300% 300%',
                      backgroundPosition: (getCityImg(city.name).includes('thumb.php') || getCityImg(city.name).includes('/guizhou-travel/')) ? 'center' : `${city.x * 50}% ${city.y * 50}%`,
                      mixBlendMode: 'multiply'
                    }}
                  />
                  <span className="text-gray-900 text-[9px] font-bold tracking-tighter text-center leading-tight">
                    {city.name.replace('自治州', '\n自治州')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Lifestyle & Info */}
        <section className="bg-gradient-to-br from-blue-800/40 to-blue-900/20 rounded-[2.5rem] p-5 border border-white/5 space-y-5">
           <div className="grid grid-cols-2 gap-3">
              <div 
                id="feature-trigger-cat_tips" 
                className={`group relative overflow-hidden p-4 rounded-3xl border transition-all cursor-pointer ${activeFeatureId === 'cat_tips' ? 'border-amber-400 ring-2 ring-amber-400/50 bg-amber-500/20' : 'border-white/10 bg-gradient-to-br from-amber-500/10 to-transparent hover:bg-amber-500/20'}`} 
                onClick={() => onFeatureClick?.('cat_tips')}
              >
                 <div className="flex flex-col gap-2 relative z-10">
                   <div className="flex items-center justify-between">
                     <span className="text-amber-400 text-[10px] font-black italic tracking-widest uppercase">Tips</span>
                     <span className="text-lg">💡</span>
                   </div>
                   <div className="text-white text-[14px] font-black italic">游黔贴士</div>
                   <div className="text-white/40 text-[7px] font-bold uppercase tracking-tighter">Travel Smart & Safe</div>
                 </div>
                 <div className="absolute -right-2 -bottom-2 text-4xl opacity-5 group-hover:scale-110 transition-transform">💡</div>
              </div>

              <div 
                id="feature-trigger-cat_news" 
                className={`group relative overflow-hidden p-4 rounded-3xl border transition-all cursor-pointer ${activeFeatureId === 'cat_news' ? 'border-blue-400 ring-2 ring-blue-400/50 bg-blue-500/20' : 'border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent hover:bg-blue-500/20'}`} 
                onClick={() => onFeatureClick?.('cat_news')}
              >
                 <div className="flex flex-col gap-2 relative z-10">
                   <div className="flex items-center justify-between">
                     <span className="text-blue-400 text-[10px] font-black italic tracking-widest uppercase">News</span>
                     <span className="text-lg">📰</span>
                   </div>
                   <div className="text-white text-[14px] font-black italic">旅游资讯</div>
                   <div className="text-white/40 text-[7px] font-bold uppercase tracking-tighter">Live Updates & Info</div>
                 </div>
                 <div className="absolute -right-2 -bottom-2 text-4xl opacity-5 group-hover:scale-110 transition-transform">📰</div>
              </div>
           </div>
           <div id="feature-trigger-lifestyle_channels" className={`flex gap-3 overflow-x-auto no-scrollbar p-1.5 rounded-2xl transition-all cursor-pointer ${activeFeatureId === 'lifestyle_channels' ? 'bg-blue-500/10 ring-2 ring-blue-500/30' : ''}`} onClick={() => onFeatureClick?.('lifestyle_channels')}>
              {categories.map((cat) => (
                <div key={cat.id} className="min-w-[85px] flex flex-col items-center group">
                  <div className="w-full h-16 rounded-2xl overflow-hidden relative border border-white/10 shadow-lg transition-transform group-hover:scale-105">
                    <img src={cat.img} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white/30 text-[8px] font-black mt-2 italic uppercase tracking-tighter">{cat.title}</span>
                </div>
              ))}
           </div>
        </section>

        {/* 5. Street Rank */}
        <section 
          id="feature-trigger-nightlife"
          className={`relative h-44 rounded-[2.5rem] overflow-hidden shadow-2xl border transition-all cursor-pointer ${activeFeatureId === 'nightlife' ? 'border-amber-400 ring-2 ring-amber-400' : 'border-white/5'}`}
          onClick={() => onFeatureClick?.('nightlife')}
        >
           <img src={getAssetPath('/guizhou-travel/b1eadaddc2e4a2ae349504b7d394389f.jpeg')} className="w-full h-full object-cover opacity-70 transition-transform duration-[2000ms] hover:scale-110" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#05307a] via-transparent to-transparent z-10"></div>
           <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-500 text-white text-[8px] font-black px-2 py-0.5 rounded-sm shadow-md uppercase tracking-tighter">高德扫街榜</span>
                <span className="text-white/60 text-[9px] font-bold italic uppercase tracking-widest">Official Rank</span>
              </div>
              <h4 className="text-white text-2xl font-black italic drop-shadow-lg flex items-center gap-2">
                寻找多彩烟火气
                <span className="text-amber-400 text-sm italic">TOP</span>
              </h4>
              <p className="text-white/70 text-[10px] font-medium mt-1 italic">发现最地道的贵州美味 · 官方实时推荐</p>
           </div>
        </section>

        {/* 6. Itinerary Strategy */}
        <section 
          id="feature-trigger-itinerary_strategy"
          className={`px-4 py-5 rounded-[2.5rem] border transition-all cursor-pointer bg-white/5 ${activeFeatureId === 'itinerary_strategy' ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/5'}`}
          onClick={() => onFeatureClick?.('itinerary_strategy')}
        >
          <div className="flex items-center justify-between mb-4 px-1">
             <h3 className="text-white text-[12px] font-black italic tracking-wider">城市攻略 · 一键跟玩</h3>
             <span className="text-blue-400 text-[8px] font-black uppercase">Navigation Sync</span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
             {itineraryStrategies.map((strat, i) => (
               <div key={i} className="min-w-[150px] space-y-3 group">
                 <div className="h-28 rounded-2xl overflow-hidden relative border border-white/5 shadow-xl transition-transform group-hover:translate-y-[-2px]">
                   <img src={strat.img} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-2 left-2 bg-blue-600/90 backdrop-blur-md px-2 py-0.5 rounded text-[7px] text-white font-black italic">{strat.tag}</div>
                 </div>
                 <div className="px-1 space-y-1">
                   <div className="text-white text-[11px] font-black line-clamp-1 italic opacity-80">{strat.title}</div>
                   <div className="text-white/40 text-[8px] font-bold italic">{strat.desc}</div>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* 7. 3D Scenery MAX */}
        <section 
          id="feature-trigger-3d_scenery"
          className={`bg-gradient-to-br from-blue-700/40 to-blue-900/20 rounded-[2.5rem] p-8 border transition-all cursor-pointer relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ${activeFeatureId === '3d_scenery' ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/5'}`}
          onClick={() => onFeatureClick?.('3d_scenery')}
        >
           <img src={getAssetPath('/guizhou-travel/6dae127fd663ec0fb73ac40403205392.jpeg')} className="absolute inset-0 w-full h-full object-cover opacity-40" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#05307a] via-transparent to-transparent z-10"></div>
           <div className="flex gap-6 items-center relative z-20">
              <div className="flex-1">
                 <span className="px-2 py-0.5 bg-orange-500 text-white text-[7px] font-black rounded-sm mb-2 inline-block uppercase italic shadow-lg">Digital Twin</span>
                 <h4 className="text-white text-2xl font-black italic tracking-tighter">黄果树 3D 奇境</h4>
                 <button className="mt-4 bg-yellow-400 text-[#05307a] text-[9px] font-black px-5 py-2.5 rounded-full shadow-2xl uppercase italic tracking-tighter active:scale-95 transition-transform">立即进入 ›</button>
              </div>
           </div>
           <div className="absolute inset-0 opacity-10 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        </section>

      </div>
    </div>
  );
};

export default ScreenAssistant;
