<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import TopOverview from './components/TopOverview.vue'
import FeatureSidePanel from './components/FeatureSidePanel.vue'
import { usePresentation } from './composables/usePresentation'

const { state } = usePresentation()

// Refs for connection lines
const phoneFrameRef = ref(null)
const featurePanelRef = ref(null)
const connectionSvg = ref(null)
const pathD = ref('')

let settleTimerId = null
let rafId = null

const computeAndSetPath = () => {
  if (!phoneFrameRef.value || !featurePanelRef.value) return
  if (!connectionSvg.value) return

  const feature = state.features[state.activeFeatureId]
  if (!feature) return

  const phoneRect = phoneFrameRef.value.getBoundingClientRect()
  const startX = phoneRect.right
  const startY = phoneRect.top + (phoneRect.height * (feature.anchorY / 100))

  const cardId = `feature-card-${state.activeFeatureId}`
  const cardEl = document.getElementById(cardId)

  let endX, endY
  if (cardEl) {
    const cardRect = cardEl.getBoundingClientRect()
    endX = cardRect.left
    endY = cardRect.top + (cardRect.height / 2)
  } else {
    const panelRect = featurePanelRef.value.$el.getBoundingClientRect()
    endX = panelRect.left
    endY = panelRect.top + 100
  }

  const cp1X = startX + 100
  const cp1Y = startY
  const cp2X = endX - 100
  const cp2Y = endY

  pathD.value = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`
}

const updateConnectionLine = async () => {
  if (!state.activeFeatureId) {
    pathD.value = ''
    return
  }

  await nextTick()

  computeAndSetPath()

  if (settleTimerId) window.clearTimeout(settleTimerId)
  settleTimerId = window.setTimeout(() => {
    computeAndSetPath()
  }, 350)
}

const scheduleUpdateConnectionLine = () => {
  if (rafId) return
  rafId = window.requestAnimationFrame(() => {
    rafId = null
    updateConnectionLine()
  })
}

watch(() => state.activeFeatureId, scheduleUpdateConnectionLine)

onMounted(() => {
  window.addEventListener('resize', scheduleUpdateConnectionLine)
  window.addEventListener('scroll', scheduleUpdateConnectionLine, { passive: true })

  nextTick(() => {
    const panelEl = featurePanelRef.value?.$el
    if (panelEl) {
      panelEl.addEventListener('scroll', scheduleUpdateConnectionLine, { passive: true })
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', scheduleUpdateConnectionLine)
  window.removeEventListener('scroll', scheduleUpdateConnectionLine)

  const panelEl = featurePanelRef.value?.$el
  if (panelEl) {
    panelEl.removeEventListener('scroll', scheduleUpdateConnectionLine)
  }

  if (settleTimerId) window.clearTimeout(settleTimerId)
  if (rafId) window.cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="main-wrapper">
    <!-- Top Section: Overview & Planning -->
    <TopOverview />

    <!-- Bottom Section: Workbench -->
    <div class="workbench-container">
      
      <!-- Left: Phone Display -->
      <div class="phone-area">
        <div class="phone-wrapper">
          <div class="phone-frame" ref="phoneFrameRef">
            <div class="dynamic-island"></div>
            <div class="screen-content">
              <router-view></router-view>
            </div>
            <div class="home-indicator"></div>
          </div>
          <div class="phone-shadow"></div>
        </div>
      </div>

      <!-- Right: Feature Explanations -->
      <div class="panel-area">
        <FeatureSidePanel ref="featurePanelRef" />
      </div>

      <!-- Connection Layer -->
      <svg class="connection-layer" ref="connectionSvg">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ffffff" />
          </marker>
          <filter id="glow">
             <feGaussianBlur stdDeviation="3" result="blur"/>
             <feFlood flood-color="#0F4C3A" flood-opacity="0.45" result="flood"/>
             <feComposite in="flood" in2="blur" operator="in" result="coloredGlow"/>
             <feMerge>
                 <feMergeNode in="coloredGlow"/>
                 <feMergeNode in="SourceGraphic"/>
             </feMerge>
          </filter>
        </defs>
        <path 
          v-if="pathD" 
          :d="pathD" 
          stroke="#ffffff" 
          stroke-width="3" 
          fill="none"
          marker-end="url(#arrowhead)"
          filter="url(#glow)"
          class="connector-path"
        />
        <!-- Start Point Dot -->
        <circle v-if="pathD" :cx="pathD.split(' ')[1]" :cy="pathD.split(' ')[2]" r="4" fill="#ffffff" />
      </svg>

    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #ffffff;
  color: #0f172a;
  height: 100vh;
  overflow-y: auto; /* Allow scrolling for the main page */
}

.main-wrapper {
  min-height: 100vh;
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(15, 76, 58, 0.08) 0%, transparent 55%),
    linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
  background-size: 100% 100%, 40px 40px, 40px 40px;
  padding-bottom: 50px;
}

.workbench-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 100px; /* Space for the line */
  padding: 40px;
  position: relative;
  min-height: 900px;
}

.phone-area {
  position: relative;
  z-index: 10;
}

.panel-area {
  position: relative;
  z-index: 10;
  margin-top: 50px; /* Offset slightly */
}

@media (max-width: 1200px) {
  .workbench-container {
    flex-direction: column;
    align-items: center;
    gap: 26px;
    padding: 22px 18px 40px;
  }

  .panel-area {
    margin-top: 0;
    width: min(720px, 100%);
  }
}

.connection-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 5;
}

.connector-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 1s forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

/* Phone Styles Reuse */
.phone-wrapper {
  position: relative;
  transition: transform 0.5s;
}

.phone-frame {
  position: relative;
  width: 400px;
  height: 866px;
  background-color: #000;
  border-radius: 55px;
  box-shadow: 
    0 0 0 4px #3a3a3a, 
    0 0 0 8px #1a1a1a,
    0 0 40px rgba(0, 255, 170, 0.15);
  overflow: hidden;
  border: 8px solid #000;
  box-sizing: content-box;
  transform: scale(0.9); /* Scale down slightly for viewability */
  transform-origin: top center;
}

.dynamic-island {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 35px;
  background-color: #000;
  border-radius: 20px;
  z-index: 9999;
  pointer-events: none;
}

.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 5px;
  background-color: #fff;
  border-radius: 3px;
  z-index: 9999;
}
</style>
