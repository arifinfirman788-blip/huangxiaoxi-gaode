import { reactive } from 'vue'

const defaultFeatures = {
  'home-header': {
    title: '首页-IP形象与欢迎语',
    description: '顶部展示核心IP“黄小西”，搭配书法字体的欢迎语，建立品牌亲和力。胶囊菜单模拟原生应用体验。',
    route: '/',
    anchorY: 10 // Percentage from top
  },
  'home-location': {
    title: '首页-地域选择栏',
    description: '横向滚动交互，覆盖贵州主要地市（黔东南、安顺等）。当前选中项高亮并配有装饰点，暗示位置关联。',
    route: '/',
    anchorY: 25
  },
  'home-cards': {
    title: '首页-景区卡片堆叠',
    description: '核心视觉区。采用堆叠卡片设计，不同卡片有轻微旋转角度（-3°至3°），模拟真实照片散落感。点击可跳转详情。',
    route: '/',
    anchorY: 55
  },
  'detail-ticket': {
    title: '详情页-拟物化门票',
    description: '左侧采用打孔票据设计（Ticket Design），左侧边缘带有真实的圆形齿孔。深绿色配色呼应贵州山水主题。',
    route: '/detail/yunfeng',
    anchorY: 30
  },
  'detail-map': {
    title: '详情页-AI伴游地图',
    description: '右侧展示地图入口，背景使用模糊地图图片，强调“智能导览”功能。卡片向右倾斜，与左侧票据形成平衡。',
    route: '/detail/yunfeng',
    anchorY: 30
  },
  'detail-guide': {
    title: '详情页-攻略散落流',
    description: '下方攻略卡片打破常规网格布局，采用随机角度散落排列，增加界面的趣味性和探索感。',
    route: '/detail/yunfeng',
    anchorY: 65
  },
  'detail-footer': {
    title: '详情页-底部功能岛',
    description: '底部悬浮的功能操作区。包含语音交互入口（左侧）和常用的快捷功能（厕所、门票等），背景采用磨砂玻璃效果。',
    route: '/detail/yunfeng',
    anchorY: 90
  }
}

// Try to load from localStorage
const stored = localStorage.getItem('presentation-features')
const initialFeatures = stored ? JSON.parse(stored) : defaultFeatures

// Ensure new properties exist even if loaded from old storage
Object.keys(defaultFeatures).forEach(key => {
    if (initialFeatures[key]) {
        initialFeatures[key].route = defaultFeatures[key].route
        initialFeatures[key].anchorY = defaultFeatures[key].anchorY
    }
})

const state = reactive({
  activeFeatureId: null,
  features: initialFeatures
})

export function usePresentation() {
  const setActive = (id) => {
    console.log('Set active:', id)
    state.activeFeatureId = id
  }
  
  const updateDescription = (id, text) => {
    if (state.features[id]) {
      state.features[id].description = text
      saveToStorage()
    }
  }

  const saveToStorage = () => {
    localStorage.setItem('presentation-features', JSON.stringify(state.features))
  }

  const getActiveFeature = () => {
    return state.activeFeatureId ? state.features[state.activeFeatureId] : null
  }

  return {
    state,
    setActive,
    updateDescription,
    getActiveFeature
  }
}
