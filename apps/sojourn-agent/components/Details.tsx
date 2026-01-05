import React, { useState } from 'react';

interface DetailProps {
  onBack: () => void;
}

const DetailHeader: React.FC<{ title: string; onBack: () => void; transparent?: boolean }> = ({ title, onBack, transparent }) => (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 transition-colors duration-300 ${transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'}`}>
        <button onClick={onBack} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${transparent ? 'bg-black/20 text-white backdrop-blur-md' : 'text-gray-800 hover:bg-gray-100'}`}>
            <span className="material-icons text-xl">arrow_back</span>
        </button>
        {!transparent && <h1 className="text-sm font-bold text-gray-900">{title}</h1>}
        <div className="w-8"></div> {/* Spacer for symmetry */}
    </div>
);

// --- 旅居基地详情页 (SojournBaseDetail) ---
export const SojournBaseDetail: React.FC<DetailProps> = ({ onBack }) => {
    const baseIntroParts = [
        {
            mediaUrl: 'https://picsum.photos/id/58/600/300',
            title: '600年时光倒流',
            desc: '青岩古镇，贵州四大古镇之一，建于明洪武十年（1378年），原为军事要塞。古镇内设计精巧、工艺精湛的明清古建筑交错密布，寺庙、楼阁画栋雕梁、飞角重檐相间。'
        },
        {
            mediaUrl: 'https://picsum.photos/id/101/600/300',
            title: '慢生活的理想境地',
            desc: '作为康养旅居基地，这里不仅有深厚的文化底蕴，更有清新的空气与宜人的气候。清晨在石板路上漫步，午后在茶馆听一段地方戏，是体验贵州慢节奏生活的绝佳选择。'
        }
    ];

    const tags = ['明清建筑', '军事要塞', '状元故居', '山水田园', '生态康养'];

    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            <div className="relative h-64">
                <DetailHeader title="" onBack={onBack} transparent />
                <img src="https://picsum.photos/id/28/800/600" className="w-full h-full object-cover" alt="Detail" />
            </div>

            <div className="bg-white relative -mt-4 rounded-t-3xl px-5 py-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                    <h1 className="text-2xl font-bold text-gray-900">花溪青岩古镇基地</h1>
                    <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full flex items-center shadow-lg shadow-blue-200">
                        <span className="material-icons text-xs mr-1">navigation</span> 导航
                    </button>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-orange-100 text-orange-700 text-[10px] px-1.5 py-0.5 rounded">国家级重点镇</span>
                    <span className="text-xs text-gray-500">贵阳市花溪区 · 距市中心28km</span>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-3 mb-6 border border-blue-100">
                    <div className="font-bold text-gray-800 text-sm mb-2">当地天气</div>
                    <div className="flex justify-between text-center divide-x divide-blue-200">
                        {[
                            { day: '今天', icon: 'rainy', temp: '18°' },
                            { day: '明天', icon: 'cloud', temp: '20°' },
                            { day: '周三', icon: 'wb_sunny', temp: '24°' },
                            { day: '周四', icon: 'wb_sunny', temp: '25°' },
                        ].map((w, i) => (
                            <div key={i} className="flex-1">
                                <div className="text-[10px] text-gray-500 mb-1">{w.day}</div>
                                <span className={`material-icons text-sm mb-1 ${w.icon === 'rainy' ? 'text-blue-500' : w.icon === 'wb_sunny' ? 'text-orange-500' : 'text-gray-400'}`}>{w.icon}</span>
                                <div className="text-xs font-bold text-gray-700">{w.temp}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-4 border-l-4 border-teal-500 pl-3">基地介绍</h3>
                    
                    <div className="space-y-6">
                        {baseIntroParts.map((part, index) => (
                            <div key={index} className="space-y-4">
                                <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden shadow-md">
                                    <img src={part.mediaUrl} className="w-full h-full object-cover" alt={part.title} />
                                    <div className="absolute bottom-2 left-2 right-2">
                                        <h4 className="text-white font-bold text-base drop-shadow-md">{part.title}</h4>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed text-justify bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    {part.desc}
                                </p>
                            </div>
                        ))}
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                            {tags.map((tag: string) => (
                                <span key={tag} className="text-[10px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-100">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">周边服务</h3>
                    <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex space-x-3 pb-3 border-b border-gray-50 last:border-0">
                                <img src={`https://picsum.photos/id/${30+i}/100/100`} className="w-20 h-20 rounded-lg object-cover" />
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-800">古镇悦栖民宿</h4>
                                        <div className="flex items-center text-[10px] text-orange-500 mt-1">
                                            <span className="material-icons text-[10px]">star</span> 4.8
                                            <span className="text-gray-400 ml-2">距基地 0.5km</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] bg-gray-100 text-gray-500 px-1 rounded">免费停车</span>
                                        <span className="text-red-500 font-bold text-sm">¥280起</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 路线详情页 (RouteDetail) ---
export const RouteDetail: React.FC<DetailProps> = ({ onBack }) => {
    const [activeDay, setActiveDay] = useState(1);
    const scrollContentRef = React.useRef<HTMLDivElement>(null);

    const scrollToContent = () => {
        scrollContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const highlights = ['10', '11', '12', '13'];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pb-6 relative">
             <div className="relative h-[70vh] w-full shrink-0">
                <DetailHeader title="" onBack={onBack} transparent />
                <img src="https://picsum.photos/id/16/800/1200" className="w-full h-full object-cover" alt="Poster" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
                
                <div className="absolute bottom-12 left-5 right-5 text-white">
                    <div className="flex items-center space-x-2 mb-3">
                         <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">官方推荐</span>
                         <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">避暑胜地</span>
                    </div>
                    <h1 className="text-4xl font-black mb-2 leading-tight drop-shadow-lg">望天天空<br/>云卷云舒 7日游</h1>
                    <p className="text-sm text-white/90 font-medium mb-4 drop-shadow-md">在这趟旅程中，找回久违的宁静与感动。</p>
                    
                    <div className="flex justify-center mt-6">
                        <button 
                            onClick={scrollToContent}
                            className="flex flex-col items-center animate-bounce opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <span className="text-xs font-bold mb-1">开始探索</span>
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                                <span className="material-icons text-white">keyboard_arrow_down</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div ref={scrollContentRef} className="bg-gray-50 relative -mt-6 rounded-t-[32px] overflow-hidden z-10">
                <div className="bg-white px-5 py-6 mb-3 shadow-sm rounded-b-[32px]">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                             <h2 className="text-lg font-black text-gray-900">综合推荐指数</h2>
                             <div className="flex items-center mt-1">
                                 <div className="flex text-yellow-400 text-sm">
                                     <span className="material-icons text-lg">star</span>
                                     <span className="material-icons text-lg">star</span>
                                     <span className="material-icons text-lg">star</span>
                                     <span className="material-icons text-lg">star</span>
                                     <span className="material-icons text-lg">star_half</span>
                                 </div>
                                 <span className="ml-2 text-2xl font-black text-gray-900">4.8</span>
                             </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center bg-gray-50 rounded-xl p-3">
                         {[
                             { label: '自然风光', score: '5.0', color: 'text-green-600' },
                             { label: '人文景观', score: '4.7', color: 'text-blue-600' },
                             { label: '特色体验', score: '4.9', color: 'text-purple-600' },
                             { label: '配套服务', score: '4.6', color: 'text-orange-600' },
                         ].map(item => (
                             <div key={item.label}>
                                 <div className={`font-black text-sm ${item.color}`}>{item.score}</div>
                                 <div className="text-[10px] text-gray-500 scale-90">{item.label}</div>
                             </div>
                         ))}
                    </div>
                </div>

                <div className="bg-white px-5 py-6 mb-3 shadow-sm">
                    <h3 className="font-bold text-lg text-gray-900 mb-4 border-l-4 border-teal-500 pl-3">行程亮点</h3>
                    <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
                        {highlights.map((h, i) => (
                            <div key={i} className="min-w-[140px] h-24 rounded-xl overflow-hidden relative shadow-sm shrink-0">
                                <img src={`https://picsum.photos/id/${h}/300/200`} className="w-full h-full object-cover" alt="highlight" />
                            </div>
                        ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-4">
                        {[
                            { icon: 'schedule', val: '7天6晚', label: '行程时长' },
                            { icon: 'place', val: '3城5寨', label: '深度游览' },
                            { icon: 'local_activity', val: '4项', label: '特色活动' },
                        ].map((item, i) => (
                             <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                 <span className="material-icons text-teal-500 text-xl mb-1">{item.icon}</span>
                                 <span className="font-bold text-gray-800 text-sm">{item.val}</span>
                                 <span className="text-[10px] text-gray-400">{item.label}</span>
                             </div>
                        ))}
                    </div>
                </div>

                {/* 特别提醒模块 */}
                <div className="bg-white px-5 py-6 mb-3 shadow-sm">
                    <h3 className="font-bold text-lg text-gray-900 mb-4 border-l-4 border-teal-500 pl-3">特别提醒</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="material-icons text-teal-600 text-sm mt-1">shopping_bag</span>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-800 mb-1">必备物品</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">请随身携带身份证件；贵州气候多变，建议携带防晒霜、雨具及薄外套；山区旅居备好常备药品如感冒药、肠胃药。</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="material-icons text-teal-600 text-sm mt-1">groups</span>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-800 mb-1">习俗礼仪</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">进入村寨请尊重当地少数民族风俗习惯；不随意拍摄私人祭祀活动，如需拍摄人物建议先征得同意。</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="material-icons text-teal-600 text-sm mt-1">security</span>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-800 mb-1">安全注意</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">山区步道湿滑请注意脚下安全；在水域附近游玩时请遵守安全提示，不要在非游泳区域下水。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-6 mb-3 shadow-sm">
                    <div className="px-5 mb-4 flex justify-between items-end">
                        <h3 className="font-bold text-lg text-gray-900 border-l-4 border-teal-500 pl-3">每日行程</h3>
                    </div>
                    
                    <div className="flex overflow-x-auto no-scrollbar px-5 space-x-3 mb-6">
                        {[1, 2, 3, 4, 5, 6, 7].map(d => (
                            <button 
                                key={d}
                                onClick={() => setActiveDay(d)}
                                className={`flex-shrink-0 w-12 h-14 rounded-xl flex flex-col items-center justify-center transition-all ${
                                    activeDay === d 
                                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-200 scale-105' 
                                    : 'bg-gray-50 text-gray-400 border border-gray-100'
                                }`}
                            >
                                <span className="text-[10px] font-bold">DAY</span>
                                <span className="text-lg font-black">{d}</span>
                            </button>
                        ))}
                    </div>

                    <div className="px-5 pb-10">
                         <div className="border-l-2 border-gray-100 pl-6 relative space-y-8 pb-4">
                             <div className="relative">
                                 <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-teal-100 border-2 border-teal-500"></div>
                                 <div className="text-xs font-bold text-teal-600 mb-1">地点一</div>
                                 <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                     <img src="https://picsum.photos/id/10/400/200" className="w-full h-24 object-cover rounded-lg mb-2" alt="Water" />
                                     <div className="flex items-center mb-1">
                                         <span className="material-icons text-teal-500 mr-2 text-lg">water_drop</span>
                                         <h4 className="font-bold text-gray-800 text-sm">黄果树大瀑布</h4>
                                     </div>
                                     <p className="text-xs text-gray-500 leading-relaxed pl-7">
                                         通过水帘洞，近距离感受飞流直下的震撼。记得穿雨衣哦！
                                     </p>
                                 </div>
                             </div>

                             <div className="relative">
                                 <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-orange-100 border-2 border-orange-400"></div>
                                 <div className="text-xs font-bold text-orange-600 mb-1">地点二</div>
                                 <div className="bg-orange-50/50 p-3 rounded-xl border border-orange-100">
                                      <img src="https://picsum.photos/id/40/400/200" className="w-full h-24 object-cover rounded-lg mb-2" alt="Food" />
                                      <div className="flex items-center mb-1">
                                         <span className="material-icons text-orange-500 mr-2 text-lg">restaurant</span>
                                         <h4 className="font-bold text-gray-800 text-sm">布依族特色午餐</h4>
                                     </div>
                                     <p className="text-xs text-gray-500 leading-relaxed pl-7">
                                         品尝地道的酸汤鱼和五色糯米饭。
                                     </p>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
