<template>
  <div class="presentation-panel">
    <div class="tabs">
      <div 
        class="tab-item" 
        :class="{ active: currentTab === 'interactive' }"
        @click="currentTab = 'interactive'"
      >
        <span>⚡️ 交互演示</span>
      </div>
      <div 
        class="tab-item" 
        :class="{ active: currentTab === 'arch' }"
        @click="currentTab = 'arch'"
      >
        <span>🏗 技术架构</span>
      </div>
      <div 
        class="tab-item" 
        :class="{ active: currentTab === 'flow' }"
        @click="currentTab = 'flow'"
      >
        <span>🔄 业务流程</span>
      </div>
    </div>

    <div class="panel-body">
      <!-- Tab 1: Interactive Demo (Existing Logic) -->
      <div v-if="currentTab === 'interactive'" class="tab-content interactive-mode">
        <div class="panel-header">
          <h2>交互说明面板</h2>
          <div class="status-badge" :class="{ active: activeFeature }">
            {{ activeFeature ? '🟢 正在查看功能详情' : '⚪️ 等待触发...' }}
          </div>
        </div>

        <div class="content-wrapper" v-if="activeFeature">
          <div class="form-group">
            <label>功能模块</label>
            <input 
              type="text" 
              v-model="activeFeature.title" 
              readonly 
              class="title-input"
            />
          </div>

          <div class="form-group">
            <label>设计理念与技术实现</label>
            <textarea 
              v-model="activeFeature.description" 
              @input="handleInput"
              class="desc-textarea"
              rows="12"
            ></textarea>
          </div>

          <div class="actions">
            <button class="save-btn" @click="copyJSON">
              <span class="icon">💾</span> 导出配置数据
            </button>
            <transition name="fade">
              <div class="save-hint" v-if="showSaved">✅ 已同步至本地缓存</div>
            </transition>
          </div>
        </div>

        <div class="empty-state" v-else>
          <div class="scanner-line"></div>
          <div class="empty-icon">👈</div>
          <p>请在左侧APP界面点击任意区域<br>以激活对应的技术说明</p>
          <div class="tech-list">
             <div class="tech-item" v-for="(feat, key) in state.features" :key="key">
                <span class="dot"></span> {{ feat.title }}
             </div>
          </div>
        </div>
      </div>

      <!-- Tab 2: Architecture -->
      <div v-if="currentTab === 'arch'" class="tab-content arch-mode">
        <div class="panel-header">
           <h2>整体技术架构</h2>
           <span class="subtitle">Tech Architecture</span>
        </div>
        <div class="arch-diagram">
           <div class="layer client">
              <div class="layer-label">客户端 (Client)</div>
              <div class="box-row">
                 <div class="box vue">Vue 3.2 (Setup)</div>
                 <div class="box vant">Vant UI 4</div>
                 <div class="box sass">SCSS / CSS4</div>
              </div>
           </div>
           <div class="arrow-down">⬇</div>
           <div class="layer logic">
              <div class="layer-label">逻辑层 (Logic)</div>
              <div class="box-row">
                 <div class="box router">Vue Router 4</div>
                 <div class="box store">Pinia / State</div>
                 <div class="box hook">Composables</div>
              </div>
           </div>
           <div class="arrow-down">⬇</div>
           <div class="layer assets">
              <div class="layer-label">资源与构建 (Assets & Build)</div>
              <div class="box-row">
                 <div class="box vite">Vite 5</div>
                 <div class="box node">Node Scripts</div>
                 <div class="box assets">Static Assets</div>
              </div>
           </div>
        </div>
        <div class="arch-desc">
          <p>本系统采用 <strong>Vue 3 Composition API</strong> 作为核心驱动，结合 <strong>Vite</strong> 进行极速构建。</p>
          <p>UI层面深度定制 <strong>Vant UI</strong> 组件库，并通过 <strong>SCSS</strong> 实现复杂的 CSS4 动画与拟物化效果（如票据打孔、卡片散落）。</p>
        </div>
      </div>

      <!-- Tab 3: Business Flow -->
      <div v-if="currentTab === 'flow'" class="tab-content flow-mode">
        <div class="panel-header">
           <h2>核心业务流程</h2>
           <span class="subtitle">Business Process</span>
        </div>
        <div class="flow-chart">
           <div class="step">
              <div class="step-icon">🏠</div>
              <div class="step-content">
                 <h3>首页唤醒</h3>
                 <p>IP形象展示 · 地域选择 · 兴趣推荐</p>
              </div>
           </div>
           <div class="connector"></div>
           <div class="step">
              <div class="step-icon">👆</div>
              <div class="step-content">
                 <h3>卡片交互</h3>
                 <p>散落卡片点击 · 路由跳转动画</p>
              </div>
           </div>
           <div class="connector"></div>
           <div class="step">
              <div class="step-icon">🎫</div>
              <div class="step-content">
                 <h3>详情浏览</h3>
                 <p>拟物化票据 · AI地图导览 · 攻略查阅</p>
              </div>
           </div>
           <div class="connector"></div>
           <div class="step">
              <div class="step-icon">🤖</div>
              <div class="step-content">
                 <h3>智能服务</h3>
                 <p>语音交互 · 快捷功能（厕所/门票）</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePresentation } from '../composables/usePresentation'

const { state, updateDescription } = usePresentation()
const showSaved = ref(false)
const currentTab = ref('interactive')

const activeFeature = computed(() => {
  if (!state.activeFeatureId) return null
  return state.features[state.activeFeatureId]
})

const handleInput = () => {
  updateDescription(state.activeFeatureId, activeFeature.value.description)
  showSaved.value = true
  setTimeout(() => { showSaved.value = false }, 2000)
}

const copyJSON = () => {
  const json = JSON.stringify(state.features, null, 2)
  navigator.clipboard.writeText(json).then(() => {
    alert('配置JSON已复制到剪贴板。')
  })
}
</script>

<style scoped lang="scss">
.presentation-panel {
  width: 500px; /* Wider panel */
  height: 90vh;
  margin-right: 40px;
  background: rgba(15, 23, 42, 0.85); /* Glassmorphism dark */
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  color: #e2e8f0;
}

.tabs {
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  
  .tab-item {
    flex: 1;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    color: #64748b;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
    
    &:hover {
      color: #94a3b8;
      background: rgba(255,255,255,0.05);
    }
    
    &.active {
      color: #00ffaa; /* Neon green accent */
      border-bottom-color: #00ffaa;
      background: rgba(0, 255, 170, 0.05);
    }
  }
}

.panel-body {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
  }
}

.panel-header {
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 15px;
  
  h2 {
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
  }
  
  .subtitle {
    font-size: 12px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .status-badge {
    margin-top: 10px;
    font-size: 12px;
    color: #64748b;
    
    &.active {
      color: #00ffaa;
      text-shadow: 0 0 10px rgba(0,255,170,0.3);
    }
  }
}

/* Form Styles */
.form-group {
  margin-bottom: 25px;

  label {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }

  .title-input {
    width: 100%;
    padding: 12px;
    background: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.1);
    color: #fff;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    box-sizing: border-box;
  }

  .desc-textarea {
    width: 100%;
    padding: 15px;
    background: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.1);
    color: #e2e8f0;
    border-radius: 12px;
    font-size: 14px;
    line-height: 1.8;
    resize: none;
    font-family: inherit;
    transition: all 0.3s;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #00ffaa;
      box-shadow: 0 0 15px rgba(0,255,170,0.1);
    }
  }
}

.actions {
  .save-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #0F4C3A 0%, #158063 100%);
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(255,255,255,0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(0,255,170,0.2);
    }
  }
  
  .save-hint {
    text-align: center;
    margin-top: 15px;
    font-size: 12px;
    color: #00ffaa;
  }
}

/* Empty State */
.empty-state {
  text-align: center;
  color: #64748b;
  position: relative;
  padding: 40px 0;
  
  .scanner-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ffaa, transparent);
    animation: scan 3s infinite ease-in-out;
    opacity: 0.5;
  }
  
  .empty-icon {
    font-size: 48px;
    margin-bottom: 20px;
    animation: bounce 2s infinite;
  }
  
  .tech-list {
    margin-top: 40px;
    text-align: left;
    
    .tech-item {
       padding: 10px;
       border-bottom: 1px solid rgba(255,255,255,0.05);
       font-family: monospace;
       font-size: 12px;
       color: #94a3b8;
       
       .dot {
         display: inline-block;
         width: 6px;
         height: 6px;
         background: #00ffaa;
         border-radius: 50%;
         margin-right: 8px;
         box-shadow: 0 0 5px #00ffaa;
       }
    }
  }
}

/* Architecture Diagram */
.arch-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
  
  .layer {
    width: 100%;
    background: rgba(255,255,255,0.03);
    border: 1px dashed rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 12px;
    
    .layer-label {
      font-size: 12px;
      color: #64748b;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-weight: bold;
    }
    
    .box-row {
      display: flex;
      gap: 10px;
      justify-content: center;
      
      .box {
        background: rgba(0,0,0,0.3);
        border: 1px solid rgba(255,255,255,0.1);
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        color: #e2e8f0;
        
        &.vue { border-color: #42b883; color: #42b883; }
        &.vant { border-color: #1989fa; color: #1989fa; }
        &.vite { border-color: #646cff; color: #646cff; }
      }
    }
  }
  
  .arrow-down {
    color: #64748b;
    font-size: 18px;
  }
}

.arch-desc {
  font-size: 13px;
  line-height: 1.6;
  color: #94a3b8;
  margin-top: 20px;
  
  strong { color: #e2e8f0; }
}

/* Flow Chart */
.flow-chart {
  margin-top: 20px;
  
  .step {
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.03);
    padding: 15px;
    border-radius: 12px;
    border-left: 3px solid #00ffaa;
    
    .step-icon {
      font-size: 24px;
      margin-right: 15px;
    }
    
    .step-content {
      h3 { margin: 0 0 5px 0; font-size: 16px; color: #fff; }
      p { margin: 0; font-size: 12px; color: #94a3b8; }
    }
  }
  
  .connector {
    height: 20px;
    width: 2px;
    background: rgba(255,255,255,0.1);
    margin-left: 20px;
  }
}

@keyframes scan {
  0% { top: 0; opacity: 0; }
  50% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
  40% {transform: translateX(-10px);}
  60% {transform: translateX(-5px);}
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
