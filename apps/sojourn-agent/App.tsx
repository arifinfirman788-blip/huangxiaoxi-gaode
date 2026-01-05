import React, { useState } from 'react';
import { HomeHeader } from './components/HomeHeader';
import { HeroSection } from './components/HeroSection';
import { ContentList } from './components/ContentList';
import { QuickActions } from './components/QuickActions';
import { SojournCard } from './components/SojournCard';
import { ChatInterface } from './components/ChatInterface';
import { SojournRoutes, SojournBases, SojournGuides, SojournComfort } from './components/SojournFeatures';
import { SojournBaseDetail, RouteDetail } from './components/Details';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');

  const goBackToHome = () => setView('HOME');
  const goBackToChat = () => setView('SOJOURN_CHAT');

  // Navigation Handlers
  if (view === 'SOJOURN_CHAT') {
    return <ChatInterface onBack={goBackToHome} onNavigate={setView} />;
  }
  if (view === 'SOJOURN_ROUTES') {
    // Return to Chat Interface
    return <SojournRoutes onBack={goBackToChat} onNavigate={setView} />;
  }
  if (view === 'SOJOURN_ROUTE_DETAIL') {
      return <RouteDetail onBack={() => setView('SOJOURN_ROUTES')} />;
  }
  if (view === 'SOJOURN_BASES') {
    // Return to Chat Interface
    return <SojournBases onBack={goBackToChat} onNavigate={setView} />;
  }
  if (view === 'SOJOURN_BASE_DETAIL') {
      return <SojournBaseDetail onBack={() => setView('SOJOURN_BASES')} />;
  }
  if (view === 'SOJOURN_GUIDES') {
    // Return to Chat Interface
    return <SojournGuides onBack={goBackToChat} />;
  }
  if (view === 'SOJOURN_COMFORT') {
    // Return to Chat Interface
    return <SojournComfort onBack={goBackToChat} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen max-w-md mx-auto relative shadow-2xl flex flex-col">
      <HomeHeader />
      
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* 1. Hero Section (Logo + Weather + Avatar) */}
        <HeroSection />
        
        {/* 2. Content List (N Ways to Play) */}
        <ContentList />

        {/* 3. Quick Actions */}
        <QuickActions />
        
        {/* 4. Sojourn Entry (Red Box) */}
        <div className="px-4 pb-4">
           <SojournCard onClick={() => setView('SOJOURN_CHAT')} />
        </div>
      </div>

      {/* 5. Bottom Chat Input (Fixed) */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-30 bg-white border-t border-gray-100">
        <div className="bg-gray-100 rounded-full p-1.5 flex items-center">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-800 border border-gray-200 shadow-sm">
                <span className="material-icons text-xl">mic</span>
            </div>
            <input 
                type="text" 
                placeholder="请输入您感兴趣的主题" 
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 px-3 placeholder-gray-400"
                disabled
            />
            <button className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center text-white">
                <span className="material-icons text-lg transform -rotate-45 relative top-[-1px] left-[-2px]">send</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default App;