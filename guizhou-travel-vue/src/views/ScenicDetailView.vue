<script setup>
import { onMounted } from 'vue'
import { usePresentation } from '../composables/usePresentation'

const { setActive } = usePresentation()

onMounted(() => {
  console.log('Detail mounted')
})
</script>

<template>
  <div class="detail-container" @click="setActive(null)">
    <!-- Background Mountains -->
    <div class="bg-mountains"></div>

    <!-- Header -->
    <div class="detail-header" @click.stop="setActive(null)">
      <van-icon name="wap-nav" size="24" color="#0F4C3A" />
      
      <div class="header-content">
        <div class="title-row">
           <span class="title">云峰屯堡</span>
           <van-icon name="exchange" size="18" color="#333" style="transform: rotate(90deg);" />
        </div>
      </div>

      <div class="header-right">
        <div class="weather-box">
             <div class="day">周三</div>
             <div class="temp">19°C <span class="sun">☀</span></div>
             <div class="date">12/10</div>
        </div>
        <div class="top-pill">
           <van-icon name="ellipsis" size="20" />
           <div class="divider"></div>
           <van-icon name="circle" size="18" style="font-weight: bold;" />
        </div>
      </div>
    </div>

    <!-- Main Dashboard (Rotated Cards) -->
    <div class="main-dashboard">
      <!-- Left: Activity Info (Ticket Style) -->
      <div class="dashboard-wrapper left-wrapper" @click.stop="setActive('detail-ticket')">
        <div class="dark-bg-card"></div>
        <div class="ticket-card">
          <div class="holes-container">
             <div class="hole" v-for="n in 7" :key="n"></div>
          </div>
          <div class="card-header-pill">
            <span>活动信息</span>
            <div class="arrow-circle"><van-icon name="share" style="transform: rotate(-30deg)" /></div>
          </div>
          <div class="info-list">
            <div class="info-item">
              <span>官方资讯</span>
              <van-icon name="play" class="item-arrow" />
            </div>
            <div class="info-item">
              <span>交通指引</span>
              <van-icon name="play" class="item-arrow" />
            </div>
            <div class="info-item">
              <span>经典路线</span>
              <van-icon name="play" class="item-arrow" />
            </div>
            <div class="info-item">
              <span>必玩景点</span>
              <van-icon name="play" class="item-arrow" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right: AI Map -->
      <div class="dashboard-wrapper right-wrapper" @click.stop="setActive('detail-map')">
        <div class="map-card-container">
            <div class="map-bg-img"></div>
            <div class="map-header">
              <span>AI伴游地图</span>
              <van-icon name="location" color="#0F4C3A" />
            </div>
            <div class="map-footer-text">
              <div class="t1">智能地图导览</div>
              <div class="t2">更懂你的路线</div>
            </div>
        </div>
      </div>
    </div>

    <!-- Guide Section -->
    <div class="guide-section" @click.stop="setActive('detail-guide')">
      <div class="section-header">
        <div class="diamond">◆</div>
        <span class="title">必看攻略</span>
        <div class="diamond">◆</div>
        <div class="mountain-line"></div>
      </div>
      
      <div class="guide-cards-scroll">
        <!-- Card 1 -->
        <div class="guide-card card-1">
          <div class="icon-box bus-icon">
             <!-- Placeholder for 3D Bus Icon -->
             <van-icon name="logistics" size="28" color="#fff" />
          </div>
          <div class="text-box">
             <div class="tag">#交通指南</div>
             <div class="desc">贵阳北-从江站直达</div>
          </div>
        </div>

        <!-- Card 2 (Lowered) -->
        <div class="guide-card card-2">
          <div class="icon-box ticket-icon">
             <van-icon name="coupon" size="28" color="#fff" />
          </div>
          <div class="text-box">
             <div class="tag">#门票与费用</div>
             <div class="desc">学生/60岁以上免票</div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="guide-card card-3">
           <div class="icon-box camera-icon">
             <van-icon name="photograph" size="28" color="#fff" />
          </div>
          <div class="text-box">
             <div class="tag">#打卡体验</div>
             <div class="desc">枪手鸣枪迎宾仪式</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Area -->
    <div class="footer-area" @click.stop="setActive('detail-footer')">
      <!-- Mascot -->
      <div class="mascot-container">
        <img src="/images/huangxiaoxi_icon.png" class="mascot-img" />
      </div>

      <div class="right-controls">
         <!-- Floating Action Buttons -->
         <div class="floating-actions">
            <div class="pill-btn orange">
               <van-icon name="location" />
               <span class="no-wrap">去景区</span>
            </div>
            <div class="pill-btn blue">
               <van-icon name="shop" />
               <span class="no-wrap">找厕所</span>
            </div>
            <div class="pill-btn purple">
               <van-icon name="balance-o" />
               <span class="no-wrap">门票价</span>
            </div>
         </div>
         
         <!-- Chat Bar -->
         <div class="chat-bar">
            <div class="mic-circle">
               <van-icon name="volume-o" size="20" color="#333" />
            </div>
            <input type="text" placeholder="通天河漂流怎么走~" class="chat-input" />
         </div>
      </div>
      
      <!-- Up Arrow -->
      <div class="up-arrow-btn">
         <van-icon name="arrow-up" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700;900&display=swap');

.detail-container {
  min-height: 100%;
  background: linear-gradient(180deg, #E0F7FA 0%, #FFFFFF 60%);
  padding: 0;
  position: relative;
  overflow-x: hidden;
  font-family: 'Noto Sans SC', sans-serif;
  padding-bottom: 120px;
}

.bg-mountains {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23B2DFDB' fill-opacity='0.4' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
}

.detail-header {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 20px;
  padding-top: 50px; // Status bar space

  .header-content {
      flex: 1;
      padding-left: 10px;
      
      .title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          
          .title {
              font-size: 28px;
              font-weight: 900;
              color: #000;
              letter-spacing: 1px;
          }
      }
  }

  .header-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      
      .top-pill {
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 20px;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          
          .divider {
              width: 1px;
              height: 16px;
              background: #ccc;
          }
      }
      
      .weather-box {
          text-align: right;
          color: #0F4C3A;
          
          .day { font-size: 12px; font-weight: bold; }
          .temp { 
              font-size: 16px; 
              font-weight: 900; 
              display: flex; 
              align-items: center; 
              gap: 5px;
              justify-content: flex-end;
              .sun { color: #FFA000; font-size: 18px; }
          }
          .date { font-size: 12px; color: #666; }
      }
  }
}

.main-dashboard {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    height: 320px;
    margin-top: 10px;
}

.dashboard-wrapper {
    flex: 1;
    position: relative;
}

// Left Card Styles
.left-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-6deg) translateY(10px);
}

.dark-bg-card {
    position: absolute;
    width: 90%;
    height: 95%;
    background-color: #0F4C3A;
    border-radius: 20px;
    top: -5px;
    left: 0;
    transform: rotate(-4deg);
    z-index: 1;
}

.ticket-card {
    position: relative;
    z-index: 2;
    background: #fff;
    width: 90%;
    height: 90%;
    border-radius: 20px;
    padding: 15px;
    padding-left: 35px; // Space for holes
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;

    .holes-container {
        position: absolute;
        left: 10px;
        top: 15px;
        bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .hole {
            width: 10px;
            height: 10px;
            background-color: #D1EAED; // Match background visual
            border-radius: 50%;
            box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
        }
    }
    
    .card-header-pill {
        background-color: #0F4C3A; // Dark teal
        color: white;
        padding: 5px 15px;
        border-radius: 10px 20px 20px 0; // Unique shape
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 100px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 14px;
        position: relative;
        left: -10px;
        
        .arrow-circle {
            background: #fff;
            color: #0F4C3A;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 10px;
        }
    }
    
    .info-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #E0F2F1;
            padding-bottom: 5px;
            
            span {
                font-weight: 700;
                color: #333;
                font-size: 15px;
            }
            
            .item-arrow {
                color: #4DB6AC;
                font-size: 10px;
            }
        }
    }
}

// Right Card Styles
.right-wrapper {
    transform: rotate(4deg) translateY(20px);
    z-index: 3;
}

.map-card-container {
    background: #fff;
    width: 95%;
    height: 90%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    
    .map-bg-img {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background-image: url('/images/map_bg.jpg');
        background-size: cover;
        background-position: center;
        opacity: 0.9;
        z-index: 0;
    }
    
    .map-header {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 900;
        font-size: 16px;
        color: #000;
    }
    
    .map-footer-text {
        position: relative;
        z-index: 1;
        background: rgba(255,255,255,0.95);
        padding: 10px;
        border-radius: 12px;
        
        .t1 { font-weight: 900; color: #333; font-size: 14px; }
        .t2 { font-size: 11px; color: #888; margin-top: 2px; }
    }
}

// Guide Section
.guide-section {
    position: relative;
    z-index: 5;
    margin-top: 20px;
    padding-left: 10px;
    
    .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding-left: 10px;
        position: relative;
        
        .title {
            font-size: 18px;
            font-weight: 900;
            color: #000;
            margin: 0 5px;
        }
        
        .diamond {
            color: #4DB6AC;
            font-size: 10px;
        }
        
        .mountain-line {
            flex: 1;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='20' viewBox='0 0 200 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,15 Q20,5 40,15 T80,15 T120,10 T160,15 T200,15' fill='none' stroke='%234DB6AC' stroke-width='1'/%3E%3C/svg%3E");
            background-repeat: repeat-x;
            margin-left: 10px;
            opacity: 0.5;
        }
    }
    
    .guide-cards-scroll {
        display: flex;
        overflow-x: auto;
        padding: 20px 10px 40px; // Extra bottom padding for shadows and rotation
        gap: 10px;
        scrollbar-width: none;
        &::-webkit-scrollbar { display: none; }
        
        .guide-card {
            min-width: 140px;
            background: #fff;
            border-radius: 16px;
            padding: 12px;
            display: flex;
            flex-direction: column; // Stack icon and text for better fit
            gap: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            flex-shrink: 0;
            
            .icon-box {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                
                &.bus-icon { background: linear-gradient(135deg, #64B5F6, #1976D2); }
                &.ticket-icon { background: linear-gradient(135deg, #81C784, #388E3C); }
                &.camera-icon { background: linear-gradient(135deg, #FFB74D, #F57C00); }
            }
            
            .text-box {
                .tag { font-weight: 900; color: #333; font-size: 14px; }
                .desc { font-size: 10px; color: #999; margin-top: 2px; }
            }
        }
        
        .card-1 { transform: rotate(-3deg); }
        .card-2 { transform: rotate(4deg) translateY(15px); } // Lowered
        .card-3 { transform: rotate(-2deg); }
    }
}

// Footer
.footer-area {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    z-index: 100;
    pointer-events: none; // Let clicks pass through empty areas
    
    .mascot-container {
        position: absolute;
        left: 10px;
        bottom: 10px;
        width: 100px;
        z-index: 102;
        pointer-events: auto;
        
        .mascot-img {
            width: 100%;
            height: auto;
            filter: drop-shadow(0 5px 5px rgba(0,0,0,0.2));
        }
    }
    
    .right-controls {
        position: absolute;
        right: 20px;
        bottom: 20px;
        left: 100px; // Space for mascot
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 15px;
        pointer-events: auto;
        
        .floating-actions {
            display: flex;
            gap: 10px;
            padding-right: 50px; // Space for up arrow
            
            .pill-btn {
                background: #fff;
                padding: 8px 12px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                gap: 5px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                font-size: 12px;
                font-weight: bold;
                color: #555;
                white-space: nowrap; /* Prevent wrapping globally on buttons */
                
                .no-wrap {
                    white-space: nowrap;
                }
                
                van-icon { font-size: 14px; }
                
                &.orange van-icon { color: #FF9800; }
                &.blue van-icon { color: #2196F3; }
                &.purple van-icon { color: #9C27B0; }
            }
        }
        
        .chat-bar {
            width: 100%;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 5px;
            display: flex;
            align-items: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            
            .mic-circle {
                width: 36px;
                height: 36px;
                background: #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                margin-right: 10px;
                border: 1px solid #eee;
            }
            
            .chat-input {
                flex: 1;
                border: none;
                background: transparent;
                outline: none;
                font-size: 14px;
                color: #333;
                
                &::placeholder { color: #aaa; }
            }
        }
    }
    
    .up-arrow-btn {
        position: absolute;
        right: 20px;
        bottom: 80px;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        pointer-events: auto;
        color: #666;
    }
}
</style>
