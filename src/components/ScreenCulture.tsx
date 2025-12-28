import React from 'react';

const ScreenCulture: React.FC = () => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('picsum.photos')) {
      target.src = `https://picsum.photos/seed/${Math.random()}/800/1200`;
    }
  };

  return (
    <div className="h-full bg-white relative flex flex-col overflow-hidden">
      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* 1. Hero Cover - Artistic Image */}
        <div className="relative h-[480px] w-full flex-shrink-0">
          <img 
            src="https://img.lenyiin.com/app/hide.php?key=S09hYzFjR21sWm5HTmhER0x2VldWdWNjRTMxQlEwMkZIRC8vY29ZPQ==" 
            alt="Guizhou Landscape"
            className="w-full h-full object-cover"
            onError={handleImgError}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
          
          {/* Floating Vertical Text (Traditional Vibe) */}
          <div className="absolute top-12 right-6 writing-vertical-lr text-white">
            <h1 className="text-4xl font-serif font-black tracking-[0.5em] drop-shadow-lg">
              多彩贵州
            </h1>
            <p className="mt-4 text-sm font-medium tracking-widest opacity-80">
              NATURAL SPLENDOR
            </p>
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-10 left-6 right-6">
            <div className="inline-block px-3 py-1 bg-amber-500 text-white text-[10px] font-black tracking-widest uppercase mb-3">
              Discovery / 探索
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              走进<span className="text-blue-600">地球绿宝石</span><br/>探寻失落的秘境
            </h2>
          </div>
        </div>

        {/* 2. Content Sections */}
        <div className="px-6 py-10 space-y-16 pb-32">
          
          {/* Customs Section */}
          <div className="space-y-6">
            <div className="flex items-end justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase">Humanities</span>
                <h3 className="text-2xl font-black text-slate-800">人文风俗</h3>
              </div>
              <span className="text-[10px] text-slate-400 font-bold">VIEW ALL / 01</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              贵州是一个多民族共居的省份，苗族的银饰、侗族的大歌、布依族的蜡染，构成了这片土地最绚烂的人文底色。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="h-40 rounded-3xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=400&fit=crop" className="w-full h-full object-cover" onError={handleImgError} />
                </div>
                <h4 className="text-xs font-bold text-slate-700">西江千户苗寨</h4>
              </div>
              <div className="space-y-3 pt-6">
                <div className="h-40 rounded-3xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&h=400&fit=crop" className="w-full h-full object-cover" onError={handleImgError} />
                </div>
                <h4 className="text-xs font-bold text-slate-700">侗乡大歌</h4>
              </div>
            </div>
          </div>

          {/* Sights Section */}
          <div className="space-y-6">
            <div className="flex items-end justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-black text-emerald-500 tracking-widest uppercase">Nature</span>
                <h3 className="text-2xl font-black text-slate-800">绝美景点</h3>
              </div>
            </div>
            <div className="relative h-60 rounded-[2.5rem] overflow-hidden group shadow-xl">
               <img src="/guizhou-travel/8b28c747fb1bfeccd123c823c726afa5.jpeg" className="w-full h-full object-cover" onError={handleImgError} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-6 left-6">
                  <div className="text-white text-xl font-black italic tracking-tighter">黄果树瀑布</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Absolute Bottom Area - Button Only */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md px-4 pb-10 pt-4">
        {/* Entry Button */}
        <button className="w-full group relative flex items-center justify-center h-14 overflow-hidden rounded-full shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all active:scale-95">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x"></div>
          <div className="relative flex items-center gap-3">
             <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden">
               <img src="https://img.lenyiin.com/app/hide.php?key=YmlZb2x1cjNrRWRrRXlLK3RFT21vN1FvY0ZZOFVZK1VGcWl0bGw0PQ==" className="w-full h-full object-cover" alt="AI" />
             </div>
             <span className="text-white text-sm font-black tracking-widest uppercase">进入多彩黄小西</span>
             <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </div>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}} />
    </div>
  );
};

export default ScreenCulture;
