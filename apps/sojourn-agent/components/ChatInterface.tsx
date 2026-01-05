import React, { useState, useRef, useEffect } from 'react';
import { Message, ViewState } from '../types';
import { streamGeminiResponse } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface ChatInterfaceProps {
  onBack: () => void;
  onNavigate: (target: ViewState) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBack, onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '你好呀！我是贵阳旅居助手。想来贵阳长住避暑，或者体验慢生活吗？快问我吧！🌿🏡' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Initial placeholder for AI response
    const aiMsgPlaceholder: Message = { role: 'model', text: '', isStreaming: true };
    setMessages(prev => [...prev, aiMsgPlaceholder]);

    try {
        // Prepare history excluding the last empty placeholder
        const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));
        
        const stream = await streamGeminiResponse(historyForApi, userMsg.text);
        
        let fullText = '';
        for await (const chunk of stream) {
            fullText += chunk;
            setMessages(prev => {
                const newArr = [...prev];
                const lastIdx = newArr.length - 1;
                newArr[lastIdx] = { ...newArr[lastIdx], text: fullText };
                return newArr;
            });
        }
        
        // Finalize
        setMessages(prev => {
            const newArr = [...prev];
            const lastIdx = newArr.length - 1;
            newArr[lastIdx] = { ...newArr[lastIdx], isStreaming: false };
            return newArr;
        });

    } catch (error) {
        setMessages(prev => {
             const newArr = [...prev];
             const lastIdx = newArr.length - 1;
             newArr[lastIdx] = { role: 'model', text: "哎呀，网络有点小差错，请稍后再试一次吧！🙏" };
             return newArr;
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header with updated Back Arrow */}
      <div className="bg-white px-4 py-3 flex items-center shadow-sm z-10 sticky top-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
            <span className="material-icons text-3xl">chevron_left</span>
        </button>
        <div className="flex-1 ml-1">
            <h1 className="font-bold text-gray-900 text-lg">贵阳旅居智能体</h1>
            <p className="text-[10px] text-green-600 flex items-center font-medium">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                在线服务中
            </p>
        </div>
        <button className="text-gray-500 p-2 rounded-full hover:bg-gray-50"><span className="material-icons">more_horiz</span></button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-4">
        
        {/* Functional Tiles Section (The Red Box Area) */}
        <div className="p-4 bg-white/50 mb-2">
            {/* Prompt Questions */}
            <div className="bg-blue-50/50 rounded-2xl p-4 mb-4 space-y-2.5">
                <div className="text-blue-900 font-bold text-sm mb-2 flex items-center">
                    <span className="material-icons text-sm mr-1">lightbulb</span>
                    避暑旅居灵感
                </div>
                {['规划黔南州两个月的避暑旅居', '规划贵州三个月的避暑旅居', '规划贵州一个月的避暑旅居攻略'].map((q, i) => (
                    <div key={i} 
                         onClick={() => setInput(q)}
                         className="bg-white px-3 py-2.5 rounded-xl text-xs text-gray-700 shadow-sm border border-blue-100/50 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-all flex justify-between items-center group">
                        {q}
                        <span className="material-icons text-[10px] text-gray-300 group-hover:text-blue-400">arrow_forward_ios</span>
                    </div>
                ))}
            </div>

            {/* The 4 Tiles Grid - Refined */}
            <div className="grid grid-cols-2 gap-3 h-52">
                {/* Tile 1: Routes (Left, Tall) */}
                <div 
                    onClick={() => onNavigate('SOJOURN_ROUTES')}
                    className="row-span-2 rounded-3xl p-5 relative overflow-hidden cursor-pointer group shadow-lg shadow-orange-100 transition-all hover:shadow-xl active:scale-[0.98]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] to-[#FFE0B2]"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-gray-900 font-black text-xl tracking-tight">旅居线路</h3>
                        <p className="text-[#8B5E3C]/80 text-xs font-bold mt-1">帮您定制专属线路</p>
                        
                        <div className="mt-auto">
                            <button className="bg-white/60 backdrop-blur-md text-[#8B5E3C] px-4 py-1.5 rounded-full text-xs font-black shadow-sm flex items-center group-hover:bg-white transition-colors">
                                出发 <span className="material-icons text-[10px] ml-1">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"></div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" className="absolute bottom-3 right-3 w-20 h-20 opacity-90 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" alt="orange" />
                </div>

                {/* Right Column Container */}
                <div className="grid grid-rows-2 gap-3 h-full">
                    
                    {/* Tile 2: Bases (Top Right) */}
                    <div 
                        onClick={() => onNavigate('SOJOURN_BASES')}
                        className="rounded-3xl p-4 relative overflow-hidden cursor-pointer group shadow-sm bg-gradient-to-r from-[#FFF0F5] to-[#FFD1DC] transition-transform hover:-translate-y-0.5"
                    >
                        <div className="relative z-10">
                            <h3 className="text-gray-900 font-black text-base">旅居基地</h3>
                            <p className="text-pink-900/60 text-[10px] mt-0.5 font-bold">全省旅居康养集聚地</p>
                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" className="absolute -bottom-2 -right-2 w-14 h-14 opacity-90 transform rotate-12 group-hover:rotate-0 transition-transform" alt="watermelon" />
                    </div>

                    {/* Bottom Row of Right Column */}
                    <div className="grid grid-cols-2 gap-3">
                         {/* Tile 3: Guides (Bottom Left) */}
                         <div 
                            onClick={() => onNavigate('SOJOURN_GUIDES')}
                            className="rounded-3xl p-3 relative overflow-hidden cursor-pointer group shadow-sm bg-gradient-to-br from-[#F0F8FF] to-[#D6EAF8] transition-transform hover:-translate-y-0.5"
                         >
                            <h3 className="text-gray-900 font-black text-sm relative z-10">旅居攻略</h3>
                            <p className="text-blue-900/60 text-[9px] mt-0.5 font-bold relative z-10">看看别人怎么玩</p>
                            <div className="absolute bottom-0 right-0 w-10 h-10 bg-blue-400/10 rounded-tl-2xl"></div>
                         </div>

                         {/* Tile 4: Comfort (Bottom Right) */}
                         <div 
                            onClick={() => onNavigate('SOJOURN_COMFORT')}
                            className="rounded-3xl p-3 relative overflow-hidden cursor-pointer group shadow-sm bg-gradient-to-br from-[#FFFAF0] to-[#FFE4B5] transition-transform hover:-translate-y-0.5"
                         >
                            <h3 className="text-gray-900 font-black text-sm relative z-10">舒适度</h3>
                            <p className="text-orange-900/60 text-[9px] mt-0.5 font-bold relative z-10">全省排名</p>
                            <img src="https://cdn-icons-png.flaticon.com/512/766/766023.png" className="absolute bottom-1 right-1 w-8 h-8 opacity-60" alt="citrus" />
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Chat Messages */}
        <div className="px-4 space-y-6">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'model' && (
                        <div className="w-10 h-10 rounded-full bg-white shadow-sm p-1 flex items-center justify-center mr-3 flex-shrink-0 border border-gray-100 self-start">
                             <img src="https://picsum.photos/id/64/100/100" className="w-full h-full rounded-full object-cover" alt="AI" />
                        </div>
                    )}
                    <div className={`max-w-[85%] rounded-3xl px-5 py-3.5 text-sm leading-7 shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-md' 
                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-md shadow-md'
                    }`}>
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                        {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-teal-500 align-middle animate-pulse"></span>}
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area - Cleaner */}
      <div className="bg-white px-4 py-3 border-t border-gray-100 pb-6 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
        <div className="flex items-end space-x-3 bg-gray-50 rounded-[24px] p-1.5 border border-gray-100">
            <button className="p-2.5 text-gray-400 hover:text-gray-600 bg-white rounded-full shadow-sm transition-colors">
                <span className="material-icons text-xl">add</span>
            </button>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
                placeholder="问问旅居贵阳的攻略..."
                className="flex-1 bg-transparent border-none outline-none text-sm resize-none py-3 max-h-24 text-gray-800 placeholder-gray-400"
                rows={1}
            />
            <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`p-2.5 rounded-full transition-all ${
                    input.trim() 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-100' 
                    : 'bg-gray-200 text-gray-400 scale-95'
                }`}
            >
                <span className="material-icons text-xl">arrow_upward</span>
            </button>
        </div>
      </div>
    </div>
  );
};
