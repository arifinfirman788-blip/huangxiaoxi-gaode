<template>
  <div class="feature-side-panel">
    <h3 class="panel-title">功能详情解析</h3>
    
    <div class="feature-list">
      <div 
        v-for="(feature, key) in features" 
        :key="key"
        class="feature-card"
        :class="{ active: activeFeatureId === key }"
        :id="`feature-card-${key}`"
        @click="activateFeature(key)"
      >
        <div class="card-indicator"></div>
        <div class="card-content">
          <h4>{{ feature.title }}</h4>
          <p v-if="activeFeatureId === key">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePresentation } from '../composables/usePresentation'

const router = useRouter()
const { state, setActive } = usePresentation()

const features = computed(() => state.features)
const activeFeatureId = computed(() => state.activeFeatureId)

const activateFeature = (key) => {
  setActive(key)
  const feature = features.value[key]
  if (feature && feature.route) {
    router.push(feature.route)
  }
}
</script>

<style scoped lang="scss">
.feature-side-panel {
  width: 350px;
  padding: 18px 18px 22px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.10);
  border-radius: 18px;
  box-shadow:
    0 12px 34px rgba(15, 23, 42, 0.10),
    0 2px 6px rgba(15, 23, 42, 0.06);
  overflow-y: auto;
  
  .panel-title {
    font-size: 1.2rem;
    color: rgba(15, 23, 42, 0.85);
    margin: 2px 0 16px;
    padding-left: 12px;
    border-left: 4px solid rgba(15, 76, 58, 0.9);
    font-weight: 900;
    letter-spacing: 0.5px;
  }
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(15, 23, 42, 0.10);
  border-radius: 14px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow:
    0 6px 18px rgba(15, 23, 42, 0.06),
    0 1px 4px rgba(15, 23, 42, 0.04);

  &:hover {
    border-color: rgba(15, 76, 58, 0.25);
    box-shadow:
      0 10px 26px rgba(15, 23, 42, 0.09),
      0 2px 6px rgba(15, 23, 42, 0.05);
  }

  &.active {
    background: rgba(15, 76, 58, 0.07);
    border-color: rgba(15, 76, 58, 0.38);
    box-shadow:
      0 14px 34px rgba(15, 23, 42, 0.10),
      0 4px 10px rgba(15, 23, 42, 0.06);

    .card-indicator {
      background: rgba(15, 76, 58, 0.9);
    }
  }

  .card-indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: transparent;
    transition: background 0.3s;
  }

  .card-content {
    h4 {
      margin: 0;
      color: rgba(15, 23, 42, 0.88);
      font-size: 1rem;
      font-weight: 800;
      letter-spacing: 0.2px;
    }
    
    p {
      margin: 10px 0 0;
      font-size: 0.9rem;
      color: rgba(15, 23, 42, 0.62);
      line-height: 1.5;
      animation: fadeIn 0.5s ease;
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
