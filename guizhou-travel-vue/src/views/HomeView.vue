<script setup>
import { useRouter } from 'vue-router'
import { usePresentation } from '../composables/usePresentation'

const router = useRouter()
const { setActive } = usePresentation()

const goToDetail = (id) => {
  setActive('home-cards')
  // Small delay to let the user see the interaction before navigating
  setTimeout(() => {
    router.push({ name: 'detail', params: { id } })
  }, 200)
}
</script>

<template>
  <div class="home-container" @click="setActive(null)">
    <!-- Header Section -->
    <div class="header" @click.stop="setActive('home-header')">
      <div class="mascot-area">
        <img src="/images/huangxiaoxi_icon.png" class="mascot-img" alt="黄小西" />
      </div>
      <div class="title-area">
        <h1>欢迎使用黄小西<br>景区智能体</h1>
      </div>
      <div class="top-icons">
        <van-icon name="ellipsis" size="20" />
        <van-icon name="circle" size="20" style="margin-left: 10px; font-weight: bold;" />
      </div>
    </div>

    <!-- Location Selector -->
    <div class="location-scroll" @click.stop="setActive('home-location')">
      <span class="location-item active">贵 州</span>
      <span class="dot">·</span>
      <span class="location-item">黔东南</span>
      <span class="dot">·</span>
      <span class="location-item">安 顺</span>
      <span class="dot">·</span>
      <span class="location-item">黔 南</span>
      <span class="dot">·</span>
      <span class="location-item">黔西南</span>
      <span class="dot">·</span>
      <span class="location-item">铜 仁</span>
      <span class="dot">·</span>
      <span class="location-item">遵 义</span>
    </div>

    <div class="select-hint" @click.stop="setActive('home-cards')">
        <div class="mountain-shape"></div>
        <span>选择景区</span>
    </div>

    <!-- Scenic List -->
    <div class="scenic-list">
      <div class="scenic-card card-rotate-1" @click.stop="goToDetail('yunfeng')">
        <img src="/images/yunfeng.jpg" class="card-bg" />
        <div class="card-overlay"></div>
        <div class="card-content">
          <h3>云峰屯堡</h3>
          <div class="subtitle-bg">
            <p>• 屯堡剧本杀天花板 共赴一场与历史交织的梦幻之约 •</p>
          </div>
        </div>
      </div>

      <div class="scenic-card card-rotate-2" @click.stop="goToDetail('basha')">
        <img src="/images/basha.jpg" class="card-bg" />
        <div class="card-overlay"></div>
        <div class="card-content">
          <h3>岜沙苗寨</h3>
          <div class="subtitle-bg">
             <p>• 中国最后的“枪手部落” 被誉为苗族文化活化石 •</p>
          </div>
        </div>
      </div>

      <div class="scenic-card card-rotate-3" @click.stop="goToDetail('jiabang')">
        <img src="/images/jiabang.jpg" class="card-bg" />
        <div class="card-overlay"></div>
        <div class="card-content">
          <h3>加榜梯田</h3>
          <div class="subtitle-bg">
            <p>• 走进动漫里的加榜 看看加榜的夏天有多美 •</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap'); */

.home-container {
  min-height: 100%;
  background: linear-gradient(180deg, #E6F7F0 0%, #FFFFFF 30%);
  padding: 50px 20px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.header {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  position: relative;
  height: 150px;

  .mascot-area {
    position: absolute;
    left: 0;
    top: 30px;
    width: 100px;
    z-index: 10;
    
    .mascot-img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .title-area {
    width: 100%;
    text-align: center;
    margin-top: 50px;
    margin-left: 20px; 
    
    h1 {
      font-size: 32px;
      color: #0F4C3A;
      margin: 0;
      font-weight: normal;
      line-height: 1.1;
      /* Fallback to system calligraphy fonts */
      font-family: 'Ma Shan Zheng', 'ZCOOL KuaiLe', 'Xingkai SC', 'STXingkai', 'KaiTi', 'STKaiti', 'LiSu', cursive, serif; 
      text-shadow: 1px 1px 0px rgba(255,255,255,0.5);
    }
  }

  .top-icons {
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(255,255,255,0.6);
    border-radius: 20px;
    padding: 6px 12px;
    border: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
  }
}

.location-scroll {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  &::-webkit-scrollbar { display: none; }

  .location-item {
    font-size: 16px;
    color: #666;
    padding: 0 5px;
    flex-shrink: 0;
    font-family: 'PingFang SC', sans-serif;
    
    &.active {
      font-size: 22px;
      color: #0F4C3A;
      font-weight: 600;
      position: relative;
      
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 6px;
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='10' viewBox='0 0 40 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 10 0 20 5 T 40 5' stroke='%234DB6AC' fill='none' stroke-width='3' /%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        bottom: -8px;
        left: 0;
      }
    }
  }

  .dot {
    color: #4DB6AC;
    margin: 0 8px;
    font-size: 12px;
  }
}

.select-hint {
  text-align: center;
  margin: 30px 0 20px;
  color: #333;
  font-size: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .mountain-shape {
      width: 40px;
      height: 15px;
      background-color: #A7D7C5;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      opacity: 0.6;
      margin-bottom: -10px;
  }
}

.scenic-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 40px;
}

.scenic-card {
  height: 200px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  transition: transform 0.2s;
  
  &.card-rotate-1 { transform: rotate(-3deg) translateX(10px); width: 95%; align-self: center; }
  &.card-rotate-2 { transform: rotate(2deg) translateX(-5px); width: 95%; align-self: center; }
  &.card-rotate-3 { transform: rotate(-2deg) translateX(5px); width: 95%; align-self: center; }

  .card-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0; left: 0;
  }
  
  .card-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%);
  }

  .card-content {
    position: absolute;
    bottom: 25px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 2;
    color: white;

    h3 {
      font-size: 32px;
      margin: 0 0 8px 0;
      font-weight: 800;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      letter-spacing: 2px;
    }
    
    .subtitle-bg {
        display: inline-block;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(2px);
        padding: 4px 12px;
        border-radius: 12px;
        
        p {
          font-size: 11px;
          margin: 0;
          opacity: 1;
          font-weight: 500;
          letter-spacing: 1px;
        }
    }
  }
}
</style>
