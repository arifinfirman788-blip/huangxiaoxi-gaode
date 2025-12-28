import React from 'react';
import { getAssetPath } from '@/utils/assets';

interface Props {
  onBack: () => void;
  onFeatureClick?: (id: string) => void;
  activeFeatureId?: string | null;
}

const ScreenCityGuiyang: React.FC<Props> = ({ onBack, onFeatureClick, activeFeatureId }) => {
  const quickActions = [
    { 
      name: '景区购票', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ), 
      color: 'text-orange-600', 
      borderColor: 'border-orange-200', 
      bgColor: 'bg-orange-50/30' 
    },
    { 
      name: '酒店住宿', 
      id: 'guiyang_hotels',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      color: 'text-blue-600', 
      borderColor: 'border-blue-200', 
      bgColor: 'bg-blue-50/30' 
    },
    { 
      name: '城市线路', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ), 
      color: 'text-emerald-600', 
      borderColor: 'border-emerald-200', 
      bgColor: 'bg-emerald-50/30' 
    },
    { 
      name: '餐饮美食', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      color: 'text-red-600', 
      borderColor: 'border-red-200', 
      bgColor: 'bg-red-50/30' 
    },
    { 
      name: '品质好物', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ), 
      color: 'text-purple-600', 
      borderColor: 'border-purple-200', 
      bgColor: 'bg-purple-50/30' 
    },
  ];

  const newsItems = [
    "“爽爽贵阳”年度文旅推介会成功举办",
    "贵阳地铁3号线正式开通运营，串联核心景区",
    "青云市集入选全国夜间消费聚集区名单",
    "避暑季来临，贵阳多景区推出门票优惠政策"
  ];

  const routeList = [
    { 
      name: '“森”呼吸·康养之旅', 
      desc: '黔灵山公园 - 观山湖公园 - 贵阳森林公园', 
      time: '1-2天', 
      img: getAssetPath('/guizhou-travel/qianlings.png'),
      tag: '康养生态'
    },
    { 
      name: '“筑”精魂·文化之旅', 
      desc: '甲秀楼 - 翠微园 - 阳明祠 - 省博物馆', 
      time: '1-2天', 
      img: getAssetPath('/guizhou-travel/jiaxiulou.jpeg'),
      tag: '人文历史'
    },
    { 
      name: '“寻”古韵·时光之旅', 
      desc: '青岩古镇 - 花溪湿地 - 夜郎谷', 
      time: '2天', 
      img: getAssetPath('/guizhou-travel/qingyanguzhen.png'),
      tag: '古镇探秘'
    }
  ];

  const gourmetList = [
    { 
      name: '01 / 肠旺面 · 晨起的仪式', 
      desc: '血嫩、面脆、哨香，这一口鲜辣开启了筑城的清晨。', 
      tag: '百年非遗',
      img: getAssetPath('/guizhou-travel/changwangmian.jpeg')
    },
    { 
      name: '02 / 酸汤鱼 · 苗岭的馈赠', 
      desc: '凯里红酸汤配上鲜嫩江鱼，木姜子的异香直抵灵魂。', 
      tag: '贵州名片',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
    },
    { 
      name: '03 / 丝娃娃 · 裹入黔中山水', 
      desc: '十八种时蔬在薄如蝉翼的面皮中重逢，注入灵魂酸汤。', 
      tag: '地道风味',
      img: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?w=400&h=300&fit=crop'
    },
    { 
      name: '04 / 青岩豆腐 · 岁月留香', 
      desc: '古法炭火烘烤，外焦里嫩，蘸上特制辣椒水，满口生香。', 
      tag: '古镇记忆',
      img: getAssetPath('/guizhou-travel/qingyanguzhen.png')
    }
  ];

  return (
    <div className="h-full bg-slate-50 flex flex-col overflow-y-auto no-scrollbar pb-16 relative">
      
      {/* 1. Dynamic Hero Section */}
      <div className="relative h-[320px] w-full flex-shrink-0">
        <img 
          src={getAssetPath('/guizhou-travel/banner.jpg')} 
          alt="爽爽贵阳" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-50"></div>
        
        <button 
          onClick={onBack}
          className="absolute top-12 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 z-20"
        >
          ‹
        </button>

        {/* Search Bar - Floating Glassmorphism */}
        <div 
          id="feature-trigger-guiyang_search"
          onClick={() => onFeatureClick?.('guiyang_search')}
          className={`absolute bottom-16 left-6 right-6 z-20 transition-all duration-300 ${
            activeFeatureId === 'guiyang_search' ? 'ring-4 ring-emerald-500 rounded-2xl scale-[0.98]' : ''
          }`}
        >
          <div className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0">
              🔍
            </div>
            <input 
              type="text" 
              placeholder="搜索景区、门票、美食..." 
              className="bg-transparent border-none outline-none text-sm font-medium text-slate-700 w-full placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* 2. Quick Actions - Refined Style & Compact */}
      <section className="px-6 -mt-8 relative z-30">
        <div 
          id="feature-trigger-guiyang_gold_area"
          onClick={() => onFeatureClick?.('guiyang_gold_area')}
          className={`bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-4 shadow-xl border border-white/50 transition-all duration-300 ${
            activeFeatureId === 'guiyang_gold_area' ? 'ring-4 ring-blue-500 border-blue-500 scale-[0.98]' : ''
          }`}
        >
          <div className="grid grid-cols-5 gap-2">
            {quickActions.map((action, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-2 group cursor-pointer"
                onClick={(e) => {
                  if (action.id) {
                    e.stopPropagation();
                    onFeatureClick?.(action.id);
                  }
                }}
              >
                <div className={`w-12 h-12 ${action.bgColor} border ${action.borderColor} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:shadow-md group-active:scale-95 ${action.color}`}>
                  {action.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-500 tracking-tighter whitespace-nowrap group-hover:text-slate-800 transition-colors">
                  {action.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. News Ticker - Compact */}
      <section className="px-6 mt-3">
        <div 
          id="feature-trigger-guiyang_news"
          onClick={() => onFeatureClick?.('guiyang_news')}
          className={`bg-emerald-50/50 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 border transition-all duration-300 ${
            activeFeatureId === 'guiyang_news' ? 'ring-4 ring-emerald-500 border-emerald-500 scale-[0.98]' : 'border-emerald-100/50'
          }`}
        >
          <div className="flex items-center gap-2 shrink-0 border-r border-emerald-200/50 pr-3">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-emerald-800 tracking-wider">最新动态</span>
          </div>
          <div className="flex-1 h-5 overflow-hidden">
            <div className="animate-scroll-y flex flex-col gap-1">
              {newsItems.map((news, i) => (
                <p key={i} className="text-[11px] text-emerald-900/70 font-medium truncate leading-5">
                  {news}
                </p>
              ))}
            </div>
          </div>
          <span className="text-emerald-300 text-xs">›</span>
        </div>
      </section>

      {/* 4. Bento Grid - Impression, Attractions, Activities - Compact */}
      <section className="px-6 mt-2 mb-2">
        <div className="grid grid-cols-2 gap-2 h-[280px] overflow-hidden">
          {/* Left: City Impression (Tall) */}
          <div 
            id="feature-trigger-guiyang_impression"
            onClick={() => onFeatureClick?.('guiyang_impression')}
            className={`bg-[#f0f9f6] rounded-[0.8rem] p-2 flex flex-col border shadow-sm overflow-hidden group relative transition-all duration-300 ${
              activeFeatureId === 'guiyang_impression' ? 'ring-2 ring-emerald-500 border-transparent shadow-lg scale-[1.02]' : 'border-emerald-100'
            }`}
          >
            <div className="flex items-center justify-between mb-1 shrink-0">
              <h3 className="text-[10px] font-black text-slate-800">城市印象</h3>
            </div>
            <div className="flex-1 relative rounded-md overflow-hidden">
              <img 
                src={getAssetPath('/guizhou-travel/banner.jpg')} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="城市印象"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-2">
                <h4 className="text-white text-[12px] font-black italic drop-shadow-lg">爽爽贵阳</h4>
                <span className="text-white/80 text-[8px] uppercase tracking-widest">GUIYANG</span>
              </div>
            </div>
          </div>

          {/* Right: Attractions & Activities (Stacked) */}
          <div className="flex flex-col gap-2 h-full">
            {/* 1. Popular Attractions */}
            <div 
              id="feature-trigger-guiyang_attractions"
              onClick={() => onFeatureClick?.('guiyang_attractions')}
              className={`h-[40%] bg-[#fff9f0] rounded-[0.8rem] p-2 flex flex-col border shadow-sm overflow-hidden group relative transition-all duration-300 min-h-0 ${
                activeFeatureId === 'guiyang_attractions' ? 'ring-2 ring-orange-500 border-transparent shadow-lg scale-[1.02]' : 'border-orange-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1 shrink-0">
                <h3 className="text-[10px] font-black text-slate-800">热门景点</h3>
                <span className="text-[8px] text-slate-400 flex items-center">更多 <span className="text-[10px] ml-0.5">›</span></span>
              </div>
              <div className="flex-1 relative rounded-sm overflow-hidden min-h-0">
                <img 
                  src={getAssetPath('/guizhou-travel/jiaxiulou.jpeg')} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="热门景点"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-1.5">
                  <span className="text-white text-[9px] font-bold">甲秀楼 · 翠微园</span>
                </div>
              </div>
            </div>

            {/* 2. Event Calendar */}
            <div 
              id="feature-trigger-guiyang_activities"
              onClick={() => onFeatureClick?.('guiyang_activities')}
              className={`flex-1 bg-[#f0f4f9] rounded-[0.8rem] p-2 flex flex-col border shadow-sm overflow-hidden group relative transition-all duration-300 min-h-0 ${
                activeFeatureId === 'guiyang_activities' ? 'ring-2 ring-blue-500 border-transparent shadow-lg scale-[1.02]' : 'border-blue-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1 shrink-0">
                <h3 className="text-[10px] font-black text-slate-800">文旅活动</h3>
                <span className="text-[8px] text-slate-400 flex items-center">更多 <span className="text-[10px] ml-0.5">›</span></span>
              </div>
              <div className="flex-1 relative rounded-sm overflow-hidden min-h-0">
                <img 
                  src={getAssetPath('/guizhou-travel/qingyunshiji.jpg')} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="文旅活动"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-1.5">
                  <span className="text-white text-[9px] font-bold">青云市集 · 霓虹夜</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. [线路 Route] - Recommended Routes (HORIZONTAL CARDS) */}
      <section className="mt-6">
        <div 
          id="feature-trigger-guiyang_routes"
          onClick={() => onFeatureClick?.('guiyang_routes')}
          className={`px-6 flex items-end justify-between mb-6 transition-all duration-300 ${
            activeFeatureId === 'guiyang_routes' ? 'scale-105' : ''
          }`}
        >
           <div>
             <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Routes / 线路</span>
             <h3 className="text-2xl font-black text-slate-800 italic">经典线路 · 玩转筑城</h3>
           </div>
           <button className="text-[10px] font-black text-slate-400">全部路线 ›</button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-5 px-6 pb-4">
          {routeList.map((route, i) => (
            <div key={i} className="min-w-[280px] bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group cursor-pointer active:scale-[0.98] transition-all">
              <div className="h-44 relative overflow-hidden">
                <img src={route.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={route.name} />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] text-white font-black border border-white/20 uppercase tracking-widest">
                    {route.tag}
                  </span>
                  <span className="bg-emerald-600/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] text-white font-black border border-white/20 uppercase tracking-widest">
                    {route.time}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-black text-slate-900">{route.name}</h4>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    →
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed h-8 line-clamp-2">{route.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. [传承 Culture] - Cultural Heritage */}
      <section className="px-6 mt-4">
        <div 
          id="feature-trigger-guiyang_culture"
          onClick={() => onFeatureClick?.('guiyang_culture')}
          className={`flex items-end justify-between mb-6 transition-all duration-300 ${
            activeFeatureId === 'guiyang_culture' ? 'scale-105' : ''
          }`}
        >
           <div>
             <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Tradition / 传承</span>
             <h3 className="text-2xl font-black text-slate-800 italic">文化底蕴 · 筑城传承</h3>
           </div>
        </div>
        
        <div className="space-y-8">
          {/* Yangming Culture */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="w-1.5 h-12 bg-blue-600 rounded-full shrink-0"></div>
              <div>
                <h4 className="text-lg font-black text-slate-900">阳明心学 · 知行合一</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
                  明武宗正德三年，王阳明在贵阳龙场悟道，开启了“心即理”与“知行合一”的思想先河。修文龙场，至今仍是海内外心学信徒的朝圣之地。
                </p>
              </div>
            </div>
            <div className="h-40 rounded-[2rem] overflow-hidden">
              <img src={getAssetPath('/guizhou-travel/yangmingxinxue.png')} className="w-full h-full object-cover grayscale opacity-80" alt="文化传承" />
            </div>
          </div>

          {/* Intangible Heritage Narrative */}
          <div className="bg-[#f9fafb] p-6 rounded-[2rem] border border-slate-100">
            <h4 className="text-base font-black text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              非遗记忆：黔中匠心
            </h4>
            <p className="text-[10px] text-slate-500 mt-3 leading-relaxed font-serif italic">
              从南明河畔的悠扬古琴，到街头巷尾的蜡染旗袍。贵阳不仅保留了中原文化的端庄，更融入了云贵高原特有的民族张力。在这片土地，每一条古巷都藏着一段未完待续的故事。
            </p>
          </div>
        </div>
      </section>

      {/* 4. [吃 Eat] - Gourmet Promotion (HORIZONTAL CARDS) */}
      <section className="mt-16">
        <div 
          id="feature-trigger-guiyang_food_map"
          onClick={() => onFeatureClick?.('guiyang_food_map')}
          className={`px-6 flex items-end justify-between mb-6 transition-all duration-300 ${
            activeFeatureId === 'guiyang_food_map' ? 'scale-105' : ''
          }`}
        >
           <div>
             <span className="text-[10px] font-black text-amber-700 tracking-widest uppercase">Flavor / 烟火</span>
             <h3 className="text-2xl font-black text-slate-900 italic">舌尖盛宴 · 寻味林城</h3>
           </div>
           <span className="text-[10px] text-amber-600 font-bold border-b border-amber-200 pb-0.5">美食地图</span>
        </div>
        
        <div className="flex overflow-x-auto no-scrollbar gap-5 px-6 pb-4">
          {gourmetList.map((food, i) => (
            <div key={i} className="min-w-[280px] bg-white rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-50 overflow-hidden group">
              <div className="h-44 relative overflow-hidden">
                <img src={food.img} alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[9px] text-white font-black border border-white/20 uppercase tracking-widest">
                  {food.tag}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-[15px] font-black text-slate-900 whitespace-nowrap mb-2 tracking-tight">
                  {food.name}
                </h4>
                <p className="text-[10px] text-slate-500 leading-relaxed font-medium italic h-8 line-clamp-2">
                  {food.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. [游 Tour] - Scenic Landmarks */}
      <section className="px-6 mt-16">
        <div 
          id="feature-trigger-guiyang_spots"
          onClick={() => onFeatureClick?.('guiyang_spots')}
          className={`flex items-end justify-between mb-6 transition-all duration-300 ${
            activeFeatureId === 'guiyang_spots' ? 'scale-105' : ''
          }`}
        >
           <div>
             <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Explore / 寻踪</span>
             <h3 className="text-2xl font-black text-slate-800 italic">山水寻迹 · 必游之景</h3>
           </div>
           <button className="text-[10px] font-black text-slate-400">全部景点 ›</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 rounded-[2.5rem] bg-slate-100 overflow-hidden relative group">
             <img src={getAssetPath('/guizhou-travel/qianlings.png')} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="黔灵山" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
               <h4 className="text-white font-black text-lg">黔灵山</h4>
               <span className="text-white/80 text-[10px] font-medium mt-1">黔南第一山</span>
             </div>
          </div>
          <div className="space-y-4">
            <div className="h-32 rounded-[2rem] bg-slate-100 overflow-hidden relative group">
              <img src={getAssetPath('/guizhou-travel/qingyanguzhen.png')} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="青岩古镇" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
               <h4 className="text-white font-black text-sm">青岩古镇</h4>
             </div>
            </div>
            <div className="h-28 rounded-[2rem] bg-slate-100 overflow-hidden relative group">
              <img src={getAssetPath('/guizhou-travel/jiaxiulou.jpeg')} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="甲秀楼" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
               <h4 className="text-white font-black text-sm">甲秀楼</h4>
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. [住 Stay] - Hotel Recommendation (NEW SECTION) */}
      <section className="px-6 mt-16">
        <div 
          id="feature-trigger-guiyang_hotels"
          onClick={() => onFeatureClick?.('guiyang_hotels')}
          className={`flex items-end justify-between mb-6 transition-all duration-300 ${
            activeFeatureId === 'guiyang_hotels' ? 'scale-105' : ''
          }`}
        >
           <div>
             <span className="text-[10px] font-black text-indigo-600 tracking-widest uppercase">Stay / 栖居</span>
             <h3 className="text-2xl font-black text-slate-800 italic">山水之间 · 枕梦筑城</h3>
           </div>
           <button className="text-[10px] font-black text-slate-400">更多住宿 ›</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
           {/* Hotel 1 */}
           <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-slate-100 group">
              <div className="h-32 rounded-[1.5rem] overflow-hidden mb-3 relative">
                 <img src={getAssetPath('/guizhou-travel/fandian.png')} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="安纳塔拉" />
                 <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg">
                    <span className="text-amber-400 text-[10px] font-black">4.9分</span>
                 </div>
              </div>
              <h4 className="text-sm font-black text-slate-900 mb-1">贵阳安纳塔拉度假酒店</h4>
              <p className="text-[10px] text-slate-400 mb-2 line-clamp-1">双龙航空港经济区中铁国际生态城</p>
              <div className="flex items-center gap-2">
                 <span className="bg-indigo-50 text-indigo-600 text-[9px] font-bold px-1.5 py-0.5 rounded">森林康养</span>
                 <span className="text-rose-500 text-xs font-black">¥1299<span className="text-[9px] text-slate-400 font-normal">起</span></span>
              </div>
           </div>

           {/* Hotel 2 */}
           <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-slate-100 group">
              <div className="h-32 rounded-[1.5rem] overflow-hidden mb-3 relative">
                 <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="喜来登" />
                 <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg">
                    <span className="text-amber-400 text-[10px] font-black">4.8分</span>
                 </div>
              </div>
              <h4 className="text-sm font-black text-slate-900 mb-1">贵阳喜来登贵航酒店</h4>
              <p className="text-[10px] text-slate-400 mb-2 line-clamp-1">南明区中华南路49号</p>
              <div className="flex items-center gap-2">
                 <span className="bg-indigo-50 text-indigo-600 text-[9px] font-bold px-1.5 py-0.5 rounded">市中心</span>
                 <span className="text-rose-500 text-xs font-black">¥799<span className="text-[9px] text-slate-400 font-normal">起</span></span>
              </div>
           </div>
        </div>
      </section>

      {/* 7. [娱 Fun] - Entertainment */}
      <section className="px-6 mt-16 mb-20">
        <div 
          id="feature-trigger-guiyang_entertainment"
          onClick={() => onFeatureClick?.('guiyang_entertainment')}
          className={`flex items-end justify-between mb-6 transition-all duration-300 ${
            activeFeatureId === 'guiyang_entertainment' ? 'scale-105' : ''
          }`}
        >
           <div>
             <span className="text-[10px] font-black text-purple-600 tracking-widest uppercase">Night / 夜游</span>
             <h3 className="text-2xl font-black text-slate-800 italic">多彩贵阳 · 越夜越美</h3>
           </div>
        </div>
        
        <div className="rounded-[2.5rem] p-6 relative overflow-hidden h-48 group">
          <img 
            src={getAssetPath('/guizhou-travel/qingyunshiji.jpg')} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            alt="青云市集"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-start">
            <h4 className="text-xl font-black text-white mb-3 tracking-wide drop-shadow-md">青云市集 · 深夜食堂</h4>
            <p className="text-[11px] text-slate-200 font-medium leading-relaxed w-2/3 mb-6 drop-shadow-sm">
              霓虹闪烁的集装箱街区，汇聚了贵阳所有的网红美食与潮玩店铺。
            </p>
            <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2.5 rounded-full text-[10px] font-black hover:bg-white hover:text-purple-900 transition-all duration-300 uppercase tracking-wider">
              查看攻略
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScreenCityGuiyang;
