import React from 'react';

export const RouteRecommendation: React.FC = () => {
  return (
    <div className="px-5 mt-2 mb-24">
       <div className="flex justify-between items-end mb-4">
           <h3 className="text-lg font-black text-gray-900">路线推荐</h3>
           <span className="text-xs font-bold text-gray-400 mb-1">全部</span>
       </div>

       <div className="relative h-28 rounded-2xl overflow-hidden shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
           <img src="https://picsum.photos/id/28/800/300" className="w-full h-full object-cover" alt="Route" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
           
           <div className="absolute bottom-3 left-4 text-white">
               <div className="flex items-center space-x-2 mb-1">
                   <span className="bg-teal-400 text-teal-900 text-[10px] font-black px-1.5 py-0.5 rounded">男+女</span>
                   <span className="bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] border border-white/20">结伴</span>
               </div>
               <span className="font-bold text-sm tracking-wide">山野露营·观星之旅</span>
           </div>

           <div className="absolute right-4 bottom-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-icons text-teal-500 text-sm">arrow_forward</span>
           </div>
       </div>
    </div>
  );
};