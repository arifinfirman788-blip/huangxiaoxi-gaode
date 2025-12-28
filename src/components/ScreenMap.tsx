import React from 'react';

const ScreenMap: React.FC = () => {
  return (
    <div className="h-full w-full relative bg-[#e5f1f9] overflow-hidden flex flex-col">
      {/* Background Fake Map */}
      <div 
        className="absolute inset-0 grayscale opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url(/guizhou-travel/8b28c747fb1bfeccd123c823c726afa5.jpeg)' }}
      ></div>

      {/* Map Controls */}
      <div className="absolute top-12 right-4 flex flex-col gap-3 z-10">
        <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </div>

      {/* Top Search & Back UI */}
      <div className="absolute top-10 left-4 right-4 z-20 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="flex-1 h-10 bg-white rounded-full shadow-md flex items-center px-4 justify-between">
          <span className="font-bold text-lg text-[#333]">贵州</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      {/* Map Pin with Bubble Card */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Bubble Card */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-xl shadow-xl border border-blue-100 flex items-center gap-1.5 animate-bounce">
            <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
               <span className="text-white text-[8px] font-black">GZ</span>
            </div>
            <span className="text-[12px] font-black text-blue-700 whitespace-nowrap">一键游贵州</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
          </div>

          <div className="w-10 h-10 bg-[#ff4d4f] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[11px] font-bold text-[#ff4d4f] whitespace-nowrap shadow-sm">
            贵州省
          </div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="mt-auto relative z-30 bg-white rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {/* Banner */}
        <div className="bg-[#fff7ea] px-4 py-2.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#e60012] flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
            <div className="text-white font-bold text-[7px] leading-tight text-center scale-90">多彩<br/>贵州</div>
          </div>
          <div className="flex-1 flex items-center gap-1 overflow-hidden">
            <span className="text-[12px] font-bold text-[#333] whitespace-nowrap">贵州省</span>
            <span className="text-gray-300 text-[10px]">|</span>
            <span className="text-[11px] text-[#333] truncate font-medium">多彩黄小西伴你游贵州上线了</span>
          </div>
          <div className="flex items-center gap-0.5 text-[#9a6a38] text-[11px] whitespace-nowrap flex-shrink-0 font-bold">
            点击前往
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Main Info Card */}
        <div className="p-4 pb-6 bg-white">
          <h2 className="text-[22px] font-bold text-[#333] mb-2">贵州省</h2>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center">
              <span className="inline-flex items-center gap-1 bg-[#fdf2e2] text-[#9a6a38] px-1.5 py-0.5 rounded text-[11px] font-medium">
                <span className="w-3.5 h-3.5 bg-[#f39800] text-white rounded-sm flex items-center justify-center text-[9px] font-bold italic">V</span>
                贵州省文化和旅游厅认证
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-1 justify-around">
              <div className="flex flex-col items-center gap-1">
                <div className="w-6 h-6 text-[#333]"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
                <span className="text-[11px] text-[#666]">周边</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-6 h-6 text-[#333]"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684z" /></svg></div>
                <span className="text-[11px] text-[#666]">分享</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#f2f4f7] text-[#333] px-6 py-2.5 rounded-full text-[15px] font-bold">导航</button>
              <button className="bg-[#0091ff] text-white px-7 py-2.5 rounded-full text-[15px] font-bold">路线</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenMap;
