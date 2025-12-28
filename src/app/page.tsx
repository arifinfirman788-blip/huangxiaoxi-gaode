'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ScreenType } from '@/types';
import { DEFAULT_DETAILS, DEFAULT_GOALS, DEFAULT_QUESTIONS, FeatureDetail, ProviderType } from '@/constants/defaultData';
import MobilePreview from '@/components/MobilePreview';
import ScreenSearch from '@/components/ScreenSearch';
import ScreenMap from '@/components/ScreenMap';
import ScreenAssistant from '@/components/ScreenAssistant';
import ScreenCulture from '@/components/ScreenCulture';
import ScreenCityGuiyang from '@/components/ScreenCityGuiyang';
import ScreenCityLiupanshui from '@/components/ScreenCityLiupanshui';

const STORAGE_KEY_DETAILS = 'gz_amap_v12_annotations';
const STORAGE_KEY_QS = 'guizhou_amap_v4_questions';
const STORAGE_KEY_GOALS = 'guizhou_amap_v4_goals';

const PROVIDER_CONFIG: Record<ProviderType, { bg: string, text: string, border: string, dot: string }> = {
  '高德地图': { bg: 'bg-blue-600/20', text: 'text-blue-400', border: 'border-blue-500/30', dot: 'bg-blue-500' },
  '黄小西': { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30', dot: 'bg-amber-500' },
  '贵州文旅': { bg: 'bg-emerald-600/20', text: 'text-emerald-400', border: 'border-emerald-500/30', dot: 'bg-emerald-500' }
};

const AutoHeightTextarea: React.FC<{
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: string;
}> = ({ value, onChange, placeholder, className, minHeight = "40px" }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const adjustHeight = () => {
    const node = textareaRef.current;
    if (node) {
      node.style.height = 'auto';
      node.style.height = `${node.scrollHeight}px`;
    }
  };
  useEffect(() => { adjustHeight(); }, [value]);
  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onInput={adjustHeight}
      className={`w-full bg-transparent border-none focus:outline-none resize-none overflow-hidden py-0.5 transition-all block ${className}`}
      style={{ minHeight }}
      spellCheck={false}
      placeholder={placeholder}
    />
  );
};

export default function Home() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>(ScreenType.ASSISTANT);
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);
  const [rightMode, setRightMode] = useState<'GOALS' | 'ANNOTATION'>('GOALS');
  const [isViewAll, setIsViewAll] = useState(false);
  const [linePath, setLinePath] = useState<string>('');
  
  const containerRef = useRef<HTMLDivElement>(null);

  const [details, setDetails] = useState<FeatureDetail[]>(DEFAULT_DETAILS);
  const [goals, setGoals] = useState<string[]>(DEFAULT_GOALS);
  const [questions, setQuestions] = useState<string[]>(DEFAULT_QUESTIONS);

  // Initial load from localStorage
  useEffect(() => {
    const savedDetails = localStorage.getItem(STORAGE_KEY_DETAILS);
    const savedGoals = localStorage.getItem(STORAGE_KEY_GOALS);
    const savedQs = localStorage.getItem(STORAGE_KEY_QS);

    const nextDetails = savedDetails ? JSON.parse(savedDetails) : DEFAULT_DETAILS;
    const nextGoals = savedGoals ? JSON.parse(savedGoals) : DEFAULT_GOALS;
    const nextQuestions = savedQs ? JSON.parse(savedQs) : DEFAULT_QUESTIONS;

    queueMicrotask(() => {
      setDetails(nextDetails);
      setGoals(nextGoals);
      setQuestions(nextQuestions);
    });
  }, []);

  const handlePersistence = () => {
    const configData = {
      DEFAULT_DETAILS: details,
      DEFAULT_GOALS: goals,
      DEFAULT_QUESTIONS: questions
    };
    
    const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'defaultData_update.json';
    a.click();
    URL.revokeObjectURL(url);
    
    alert('已导出最新配置 JSON。请将其发送给 AI 助手，以永久更新程序源代码！\n\n(Next time you open, browser will still use your local changes. Sending to AI makes it permanent in the code.)');
  };

  const handleReset = () => {
    if (confirm('确定要重置所有修改吗？这将恢复到程序定义的初始状态。')) {
      localStorage.removeItem(STORAGE_KEY_DETAILS);
      localStorage.removeItem(STORAGE_KEY_GOALS);
      localStorage.removeItem(STORAGE_KEY_QS);
      setDetails(DEFAULT_DETAILS);
      setGoals(DEFAULT_GOALS);
      setQuestions(DEFAULT_QUESTIONS);
      window.location.reload();
    }
  };

  const handleUpdateDetail = (id: string, field: keyof FeatureDetail, val: string) => {
    const newDetails = details.map(d => d.id === id ? { ...d, [field]: val } : d);
    setDetails(newDetails);
    localStorage.setItem(STORAGE_KEY_DETAILS, JSON.stringify(newDetails));
  };

  const syncView = (id: string) => {
    setSelectedFeatureId(id);
    const leftEl = document.getElementById(`feature-trigger-${id}`);
    if (leftEl) {
      leftEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  };

  const onFeatureAction = (id: string) => {
    setRightMode('ANNOTATION');
    syncView(id);
    if (isViewAll) {
      setTimeout(() => {
        const element = document.getElementById(`annotation-${id}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  };

  useLayoutEffect(() => {
    const updateLine = () => {
      if (!selectedFeatureId || rightMode !== 'ANNOTATION') {
        setLinePath('');
        return;
      }

      const leftEl = document.getElementById(`feature-trigger-${selectedFeatureId}`);
      const rightEl = document.getElementById(`annotation-${selectedFeatureId}`);
      const container = containerRef.current;

      if (leftEl && rightEl && container) {
        const lRect = leftEl.getBoundingClientRect();
        const rRect = rightEl.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();

        const x1 = lRect.right - cRect.left;
        const y1 = lRect.top + (lRect.height / 2) - cRect.top;
        const x2 = rRect.left - cRect.left;
        const y2 = rRect.top + (rRect.height / 2) - cRect.top;

        const phoneFrame = leftEl.closest('.no-scrollbar');
        if (phoneFrame) {
          const pRect = phoneFrame.getBoundingClientRect();
          if (lRect.top < pRect.top - 50 || lRect.bottom > pRect.bottom + 50) {
            setLinePath('');
            return;
          }
        }

        const cp1x = x1 + (x2 - x1) * 0.4;
        const cp2x = x1 + (x2 - x1) * 0.6;
        setLinePath(`M ${x1} ${y1} C ${cp1x} ${y1}, ${cp2x} ${y2}, ${x2} ${y2}`);
      }
    };

    window.addEventListener('resize', updateLine);
    document.addEventListener('scroll', updateLine, true);
    let rafId: number;
    const loop = () => { updateLine(); rafId = requestAnimationFrame(loop); };
    rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('resize', updateLine);
      document.removeEventListener('scroll', updateLine, true);
      cancelAnimationFrame(rafId);
    };
  }, [selectedFeatureId, rightMode, isViewAll, activeScreen]);

  const ProviderBadge = ({ provider, id, small = false }: { provider: ProviderType, id: string, small?: boolean }) => {
    const config = PROVIDER_CONFIG[provider];
    return (
      <div className={`relative flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${config.bg} ${config.border} ${small ? 'scale-95 origin-left' : ''}`}>
        <div className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`}></div>
        <select 
           value={provider}
           onClick={(e) => e.stopPropagation()}
           onChange={(e) => handleUpdateDetail(id, 'provider', e.target.value as any)}
           className={`bg-transparent outline-none cursor-pointer font-black tracking-widest uppercase italic appearance-none ${config.text} ${small ? 'text-[9px]' : 'text-[11px]'}`}
        >
           <option value="高德地图" className="bg-[#0f172a] text-blue-400">高德地图</option>
           <option value="黄小西" className="bg-[#0f172a] text-amber-400">黄小西</option>
           <option value="贵州文旅" className="bg-[#0f172a] text-emerald-400">贵州文旅</option>
        </select>
        <div className={`pointer-events-none text-[8px] opacity-40 ml-0.5 ${config.text}`}>▼</div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8 flex flex-col items-center selection:bg-blue-500/30 font-sans overflow-x-hidden relative">
      {/* 连线层 */}
      <svg className="absolute inset-0 pointer-events-none z-50 w-full h-full min-h-screen">
        {linePath && (
          <g>
            <path d={linePath} fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="6" />
            <path d={linePath} fill="none" stroke="url(#line-grad)" strokeWidth="2.5" className="animate-line-dash" />
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <circle cx={Number(linePath.split(' ')[1])} cy={Number(linePath.split(' ')[2])} r="4" fill="#3b82f6" />
            <circle cx={Number(linePath.split(',').pop()?.trim().split(' ')[0])} cy={Number(linePath.split(',').pop()?.trim().split(' ')[1])} r="4" fill="#a855f7" />
          </g>
        )}
      </svg>

      <header className="max-w-7xl w-full mb-8 relative z-10 flex flex-col md:flex-row items-end justify-between gap-6 border-b border-white/5 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black tracking-widest uppercase italic">
             GAODE GZ INFRASTRUCTURE V12.0
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none italic">
            多彩贵州 <span className="text-blue-500 not-italic">×</span> 高德地图
          </h1>
          <p className="text-slate-400 text-sm font-medium opacity-50">省、市、景三级联动数字化对接方案图</p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-2">
            <button 
              onClick={handlePersistence}
              className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2"
              title="导出当前配置以更新源码"
            >
              💾 写入程序
            </button>
            <button 
              onClick={handleReset}
              className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border border-rose-500/30 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2"
              title="重置为源码默认值"
            >
              🔄 重置默认
            </button>
          </div>
          
          <nav className="flex bg-white/5 backdrop-blur-2xl p-1 rounded-2xl border border-white/10">
          {[ScreenType.SEARCH, ScreenType.MAP, ScreenType.ASSISTANT, ScreenType.CITY_GUIYANG].map((type) => (
            <button
              key={type}
              onClick={() => { setActiveScreen(type); setSelectedFeatureId(null); setRightMode('GOALS'); setIsViewAll(false); }}
              className={`px-8 py-3 rounded-xl text-[10px] font-black transition-all duration-500 whitespace-nowrap uppercase tracking-widest ${
                activeScreen === type ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {type === ScreenType.SEARCH && '搜索接入'}
              {type === ScreenType.MAP && '地图气泡'}
              {type === ScreenType.ASSISTANT && '省级中心'}
              {type === ScreenType.CITY_GUIYANG && '市级中心'}
            </button>
          ))}
          </nav>
        </div>
      </header>

      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* 左侧：手机演示 */}
        <div className="lg:col-span-4 flex justify-center sticky top-8 z-20">
          <MobilePreview>
            {activeScreen === ScreenType.ASSISTANT && (
              <ScreenAssistant 
                onFeatureClick={onFeatureAction}
                activeFeatureId={selectedFeatureId}
                onBannerDblClick={() => setActiveScreen(ScreenType.CULTURE)}
                onCityDblClick={(city) => {
                  if (city === '贵阳') setActiveScreen(ScreenType.CITY_GUIYANG);
                  if (city === '六盘水') setActiveScreen(ScreenType.CITY_LIUPANSHUI);
                }}
              />
            )}
            {activeScreen === ScreenType.SEARCH && <ScreenSearch />}
            {activeScreen === ScreenType.MAP && <ScreenMap />}
            {activeScreen === ScreenType.CULTURE && (
              <div className="h-full relative">
                <button onClick={() => setActiveScreen(ScreenType.ASSISTANT)} className="absolute top-12 left-6 z-[60] w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white border border-white/20">‹</button>
                <ScreenCulture />
              </div>
            )}
            {activeScreen === ScreenType.CITY_GUIYANG && (
              <ScreenCityGuiyang 
                onBack={() => setActiveScreen(ScreenType.ASSISTANT)} 
                onFeatureClick={onFeatureAction}
                activeFeatureId={selectedFeatureId}
              />
            )}
            {activeScreen === ScreenType.CITY_LIUPANSHUI && (
              <ScreenCityLiupanshui onBack={() => setActiveScreen(ScreenType.ASSISTANT)} />
            )}
          </MobilePreview>
        </div>

        {/* 右侧：说明面板 */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between sticky top-0 bg-[#0f172a]/90 backdrop-blur-xl px-4 py-4 z-30 rounded-2xl border border-white/5 shadow-2xl">
            <h2 className="text-xl font-black italic tracking-tight flex items-center gap-3">
               <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
               {rightMode === 'GOALS' ? '战略核心目标' : (isViewAll ? '功能模块矩阵' : '方案细节定义')}
            </h2>
            <div className="flex gap-2">
              {rightMode === 'ANNOTATION' && (
                <button 
                  onClick={() => { setIsViewAll(!isViewAll); setSelectedFeatureId(null); }}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black border transition-all uppercase tracking-widest ${isViewAll ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/30' : 'bg-blue-600/10 border-blue-500/20 text-blue-400'}`}
                >
                  {isViewAll ? '收起矩阵' : '九宫格模式'}
                </button>
              )}
              <button 
                onClick={() => { setRightMode(rightMode === 'GOALS' ? 'ANNOTATION' : 'GOALS'); setSelectedFeatureId(null); setIsViewAll(false); }}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full text-[10px] font-black border border-white/5 transition-all uppercase tracking-widest"
              >
                {rightMode === 'GOALS' ? '技术细节' : '战略看板'}
              </button>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isViewAll ? 'grid grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'} pb-32`}>
            {rightMode === 'GOALS' ? (
              <div className="space-y-4 animate-in w-full col-span-full">
                <section className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 shadow-inner">
                  <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">🎯 Strategic Goals</h3>
                  <div className="space-y-3">
                    {goals.map((g, i) => (
                      <div key={i} className="flex gap-4 items-start bg-white/5 p-5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors">
                        <span className="text-blue-500 font-black italic text-xl opacity-30">0{i+1}</span>
                        <AutoHeightTextarea value={g} onChange={(v) => {
                          const n = [...goals]; n[i] = v; setGoals(n);
                          localStorage.setItem(STORAGE_KEY_GOALS, JSON.stringify(n));
                        }} className="text-slate-200 font-bold text-base leading-snug" minHeight="24px" />
                      </div>
                    ))}
                  </div>
                </section>
                <section className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 shadow-inner">
                  <h3 className="text-[10px] font-black text-amber-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">⚠️ Technical Checklist</h3>
                  <div className="space-y-3">
                    {questions.map((q, i) => (
                      <div key={i} className="flex gap-4 items-start bg-white/5 p-5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-colors">
                        <span className="text-amber-500 font-black italic text-xl opacity-30">Q{i+1}</span>
                        <AutoHeightTextarea value={q} onChange={(v) => {
                          const n = [...questions]; n[i] = v; setQuestions(n);
                          localStorage.setItem(STORAGE_KEY_QS, JSON.stringify(n));
                        }} className="text-slate-200 font-bold text-base leading-snug" minHeight="24px" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              details.filter(d => {
                const matchesSearch = isViewAll || d.id === selectedFeatureId || !selectedFeatureId;
                const matchesScreen = !d.screen || d.screen === activeScreen;
                return matchesSearch && matchesScreen;
              }).map((detail) => (
                <div 
                  key={detail.id}
                  id={`annotation-${detail.id}`}
                  onClick={() => syncView(detail.id)}
                  className={`group relative transition-all duration-500 cursor-pointer rounded-[2.5rem] border flex flex-col ${
                    isViewAll ? 'p-5 h-full min-h-[160px] justify-between' : 'p-6 gap-4'
                  } ${
                    selectedFeatureId === detail.id 
                    ? 'bg-gradient-to-br from-blue-600/30 to-indigo-900/50 border-blue-500/60 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] ring-8 ring-blue-500/10' 
                    : 'bg-white/5 border-white/5 opacity-70 hover:opacity-100 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <ProviderBadge provider={detail.provider} id={detail.id} small={isViewAll} />
                    {selectedFeatureId === detail.id && (
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    )}
                  </div>
                  
                  <AutoHeightTextarea 
                    value={detail.title} 
                    onChange={(v) => handleUpdateDetail(detail.id, 'title', v)} 
                    className={`font-black tracking-tighter italic text-white leading-tight ${isViewAll ? 'text-base' : 'text-3xl'}`}
                    minHeight={isViewAll ? "24px" : "36px"}
                  />
                  
                  <div className={`bg-black/30 rounded-2xl border border-white/5 shadow-inner ${isViewAll ? 'p-3' : 'p-5'}`}>
                    <AutoHeightTextarea 
                      value={detail.description} 
                      onChange={(v) => handleUpdateDetail(detail.id, 'description', v)} 
                      className={`text-slate-300 font-semibold leading-relaxed italic ${isViewAll ? 'text-[11px]' : 'text-sm'}`}
                      minHeight={isViewAll ? "40px" : "60px"}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <footer className="mt-8 mb-8 text-slate-700 text-[8px] font-black tracking-[1em] uppercase opacity-30 text-center w-full">
        GAODE MAPS × 多彩贵州 · ALL RIGHTS RESERVED 2024
      </footer>
    </div>
  );
}
