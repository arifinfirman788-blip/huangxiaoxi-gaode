import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-2 pb-6 px-4">
      <div className="flex justify-between items-start relative z-10">
        <div className="mt-1 w-2/3">
             {/* Logo / Title Area */}
            <div className="flex items-center mb-3">
                 <div className="border border-red-500 text-red-500 font-bold p-0.5 text-[10px] mr-2 leading-none text-center rounded-sm">河山<br/>贵州</div>
                 <div className="flex flex-col">
                    <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 tracking-tight" style={{ fontFamily: '"Noto Sans SC", sans-serif' }}>
                        黄小西
                    </h1>
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase -mt-1">HUANG XIAOXI</span>
                 </div>
            </div>

            {/* Weather Info */}
            <div className="flex flex-col text-gray-500 text-xs font-medium space-y-1 mb-2">
                <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                         <span className="material-icons text-[14px] mr-0.5">location_on</span>
                         <span>贵阳市</span>
                    </div>
                </div>
                <div>2025/11/03 小雨 8°C</div>
            </div>
            
            {/* Audio Ticker */}
            <div className="flex items-center text-blue-600 bg-white/60 backdrop-blur-sm py-1 pr-2 rounded-full w-max max-w-full">
                 <span className="material-icons text-sm mr-1 animate-pulse">volume_up</span>
                 <span className="text-xs truncate w-32">贵州省各地市气象预警，出行...</span>
                 <span className="material-icons text-sm text-gray-400">chevron_right</span>
            </div>
        </div>

        {/* 3D Avatar */}
        <div className="absolute -right-4 top-0 w-40 h-40 z-0 opacity-90">
            {/* Using a placeholder that looks like a 3D character */}
            <img 
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" 
                alt="黄小西" 
                className="w-full h-full object-cover mix-blend-multiply"
                style={{ clipPath: 'circle(65% at 50% 40%)' }}
            />
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-full h-full opacity-5 pointer-events-none">
           <img src="https://picsum.photos/id/10/800/400" className="w-full h-full object-cover grayscale" />
      </div>
    </div>
  );
};