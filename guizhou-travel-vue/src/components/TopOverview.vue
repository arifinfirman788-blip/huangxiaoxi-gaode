<template>
  <div class="top-overview">
    <!-- Header / Intro -->
    <div class="project-header">
      <h1 class="project-title">黄小西 · 景区智能体</h1>
      <p class="project-subtitle">Guizhou Scenic Area Intelligent Agent</p>
    </div>

    <!-- Main Content Grid -->
    <div class="overview-grid">
      <!-- 1. Planning / Vision -->
      <div class="section-card planning">
        <div class="card-header">
          <span class="icon">🎯</span>
          <h3>整体规划</h3>
        </div>
        <div class="card-content">
          <p class="vision-text">
            打造“一码游贵州”的智能化升级版，通过<strong>拟物化UI</strong>与<strong>AI伴游</strong>技术，
            解决游客行前、行中痛点。
          </p>
          <div class="tags">
            <span class="tag">沉浸式体验</span>
            <span class="tag">情感化交互</span>
            <span class="tag">全域智慧</span>
          </div>
        </div>
      </div>

      <!-- 2. Technical Architecture -->
      <div class="section-card architecture">
        <div class="card-header">
          <span class="icon">🏗</span>
          <h3>技术架构</h3>
        </div>
        <div class="arch-diagram-mini">
          <div class="layer">
            <span class="label">View</span>
            <div class="blocks">
              <span class="block vue">Vue3</span>
              <span class="block vant">Vant4</span>
            </div>
          </div>
          <div class="layer">
            <span class="label">Logic</span>
            <div class="blocks">
              <span class="block hook">Hooks</span>
              <span class="block router">Router</span>
            </div>
          </div>
          <div class="layer">
            <span class="label">Core</span>
            <div class="blocks">
              <span class="block vite">Vite</span>
              <span class="block scss">SCSS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Business Flow (Interactive) -->
      <div class="section-card flow">
        <div class="card-header">
          <span class="icon">🔄</span>
          <h3>业务流程演示 (点击跳转)</h3>
        </div>
        <div class="flow-steps">
          <div 
            class="step" 
            :class="{ active: currentStep === 'home' }"
            @click="triggerStep('home', '/')"
          >
            <div class="step-circle">🏠</div>
            <span>首页唤醒</span>
          </div>
          <div class="line"></div>
          <div 
            class="step" 
            :class="{ active: currentStep === 'list' }"
            @click="triggerStep('list', '/')"
          >
            <div class="step-circle">👆</div>
            <span>卡片交互</span>
          </div>
          <div class="line"></div>
          <div 
            class="step" 
            :class="{ active: currentStep === 'detail' }"
            @click="triggerStep('detail', '/detail/yunfeng')"
          >
            <div class="step-circle">🎫</div>
            <span>详情浏览</span>
          </div>
          <div class="line"></div>
          <div 
            class="step" 
            :class="{ active: currentStep === 'service' }"
            @click="triggerStep('service', '/detail/yunfeng')"
          >
            <div class="step-circle">🤖</div>
            <span>智能服务</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePresentation } from '../composables/usePresentation'

const router = useRouter()
const { setActive } = usePresentation()
const currentStep = ref('home')

const triggerStep = (step, route) => {
  currentStep.value = step
  router.push(route)
  
  // Specific actions per step
  if (step === 'home') setActive('home-header')
  if (step === 'list') setActive('home-cards')
  if (step === 'detail') setActive('detail-ticket')
  if (step === 'service') setActive('detail-footer')
}
</script>

<style scoped lang="scss">
.top-overview {
  padding: 44px 60px 28px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 10%, rgba(15, 76, 58, 0.10) 0%, transparent 55%),
      radial-gradient(circle at 80% 0%, rgba(59, 130, 246, 0.10) 0%, transparent 60%);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
}

.project-header {
  text-align: center;
  margin-bottom: 40px;

  .project-title {
    font-size: 2.6rem;
    font-weight: 900;
    background: linear-gradient(135deg, #0F4C3A 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    letter-spacing: 2px;
  }
  
  .project-subtitle {
    color: rgba(15, 23, 42, 0.55);
    margin-top: 10px;
    font-size: 0.95rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.section-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;
  padding: 24px;
  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.08),
    0 2px 6px rgba(15, 23, 42, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(59, 130, 246, 0.25);
    box-shadow:
      0 14px 40px rgba(15, 23, 42, 0.12),
      0 4px 10px rgba(15, 23, 42, 0.06);
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    .icon {
      font-size: 1.5rem;
      margin-right: 12px;
    }
    
    h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #0f172a;
      font-weight: 800;
      letter-spacing: 0.5px;
    }
  }
}

/* Planning Styles */
.planning {
  .vision-text {
    line-height: 1.6;
    color: rgba(15, 23, 42, 0.72);
    margin-bottom: 20px;
    strong { color: #0F4C3A; }
  }
  
  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    
    .tag {
      background: rgba(15, 76, 58, 0.08);
      color: rgba(15, 76, 58, 0.95);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      border: 1px solid rgba(15, 76, 58, 0.18);
    }
  }
}

/* Architecture Styles */
.arch-diagram-mini {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .layer {
    display: flex;
    align-items: center;
    
    .label {
      width: 60px;
      font-size: 0.8rem;
      color: rgba(15, 23, 42, 0.55);
      font-weight: bold;
    }
    
    .blocks {
      display: flex;
      gap: 8px;
      
      .block {
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 0.8rem;
        font-weight: 500;
        
        &.vue { background: rgba(66, 184, 131, 0.12); color: #1f7a4f; border: 1px solid rgba(66, 184, 131, 0.25); }
        &.vant { background: rgba(25, 137, 250, 0.10); color: #1559b8; border: 1px solid rgba(25, 137, 250, 0.22); }
        &.hook { background: rgba(245, 158, 11, 0.12); color: #a56300; border: 1px solid rgba(245, 158, 11, 0.25); }
        &.router { background: rgba(16, 185, 129, 0.10); color: #0b7a55; border: 1px solid rgba(16, 185, 129, 0.22); }
        &.vite { background: rgba(139, 92, 246, 0.10); color: #5b2cc9; border: 1px solid rgba(139, 92, 246, 0.22); }
        &.scss { background: rgba(236, 72, 153, 0.10); color: #b81b63; border: 1px solid rgba(236, 72, 153, 0.22); }
      }
    }
  }
}

/* Flow Styles */
.flow-steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: 0.85;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover, &.active {
      opacity: 1;
      transform: scale(1.1);
      
      .step-circle {
        background: rgba(15, 76, 58, 0.12);
        border-color: rgba(15, 76, 58, 0.35);
        box-shadow: 0 10px 18px rgba(15, 23, 42, 0.12);
      }
    }

    .step-circle {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      border: 1px solid rgba(15, 23, 42, 0.10);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      margin-bottom: 8px;
      transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    span {
      font-size: 0.9rem;
      color: rgba(15, 23, 42, 0.78);
      font-weight: 600;
    }
  }

  .line {
    flex: 1;
    height: 2px;
    background: rgba(15, 23, 42, 0.10);
    margin: 0 10px 25px;
  }
}

@media (max-width: 1200px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .top-overview {
    padding: 32px 18px 22px;
  }

  .project-header {
    margin-bottom: 22px;

    .project-title {
      font-size: 2.1rem;
    }
  }
}
</style>
