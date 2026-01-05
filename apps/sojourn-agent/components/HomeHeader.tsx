import React from 'react';

export const HomeHeader: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter">对话</h1>
        <div className="flex flex-col items-start -space-y-1">
             <div className="flex items-center">
                 <span className="text-sm font-bold text-gray-600">伴游</span>
                 <span className="bg-blue-100 text-blue-600 text-[9px] px-1 rounded ml-1 font-bold">AI</span>
             </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="p-1"><span className="material-icons text-gray-600 text-xl">translate</span></button>
        <button className="p-1"><span className="material-icons text-gray-600 text-xl">menu</span></button>
        <div className="flex items-center border border-gray-200 rounded-full px-2 py-0.5 space-x-2 bg-white shadow-sm">
            <span className="material-icons text-gray-600 text-lg">more_horiz</span>
            <div className="w-[1px] h-3 bg-gray-300"></div>
            <span className="material-icons text-gray-600 text-lg">remove_circle_outline</span>
        </div>
      </div>
    </div>
  );
};