
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MobilePreview: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative w-[340px] h-[700px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Notch - Modern Pill Style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-[1.5rem] z-30 flex items-center justify-center shadow-sm">
        <div className="w-10 h-1 bg-slate-900/50 rounded-full mr-1"></div>
        <div className="w-2 h-2 bg-slate-900/50 rounded-full"></div>
      </div>
      
      {/* Speaker/Sensors Detail */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-slate-900/20 rounded-full z-40"></div>

      {/* Content */}
      <div className="w-full h-full bg-slate-50 text-slate-900 overflow-y-auto no-scrollbar relative">
        {children}
      </div>

      {/* Home Indicator - Subtle Glass */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-black/10 backdrop-blur rounded-full z-40"></div>
    </div>
  );
};

export default MobilePreview;
