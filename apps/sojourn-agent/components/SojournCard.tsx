import React from 'react';

interface SojournCardProps {
  onClick: () => void;
}

export const SojournCard: React.FC<SojournCardProps> = ({ onClick }) => {
  return (
    <div 
      className="w-full mt-4 cursor-pointer relative group overflow-hidden rounded-xl shadow-md transition-transform active:scale-95"
      onClick={onClick}
    >
      {/* Background Image - Using a scenic Guizhou-like landscape */}
      <div className="absolute inset-0 bg-red-50">
         <img 
            src="https://picsum.photos/seed/guiyang_travel/800/400" 
            alt="贵州风景" 
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop
              target.src = 'https://picsum.photos/800/400?grayscale'; // Fallback
            }}
         />
         {/* Overlay Gradient for text readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-orange-900/30"></div>
      </div>

      {/* Card Content mimicking the visual style in the red box */}
      <div className="relative z-10 p-5 h-32 flex flex-col justify-center">
        <div className="flex flex-col items-start">
            {/* Styled Typography to match 'Guiyang Sojourn Cool Tour Guide' */}
            <h2 className="text-3xl font-black text-white italic tracking-wide drop-shadow-md transform -rotate-1 origin-left" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                贵阳旅居
            </h2>
            <div className="flex items-baseline space-x-2">
                <h2 className="text-3xl font-black text-white italic tracking-wide drop-shadow-md transform -rotate-1 origin-left" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    爽游指南!
                </h2>
                <span className="text-white/90 text-sm font-medium animate-pulse border border-white/50 px-2 py-0.5 rounded-full bg-black/20 backdrop-blur-sm">
                    点击进入 →
                </span>
            </div>
        </div>
        
        {/* Decorative squiggle/underline simulation */}
        <div className="absolute bottom-4 left-5 w-24 h-1 bg-yellow-400 rounded-full shadow-lg transform -rotate-1"></div>
      </div>
    </div>
  );
};