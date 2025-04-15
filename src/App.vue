<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const currentLanguage = ref(locale.value)
const telegramLink = 'https://t.me/your_channel' // 替换为您的电报频道链接

const changeLanguage = (lang) => {
  locale.value = lang
  currentLanguage.value = lang
}

// 服务项目数据
const services = [
  { key: 'visa', icon: '🛂' },
  { key: 'legal', icon: '⚖️' },
  { key: 'procurement', icon: '🛒' },
  { key: 'factory', icon: '🏭' },
  { key: 'guide', icon: '🧭' },
  { key: 'logistics', icon: '🚚' },
  { key: 'social', icon: '📱' },
  { key: 'ecommerce', icon: '🛍️' }
]

// 添加页面滚动动画
onMounted(() => {
  // 监听滚动事件，添加动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })
  
  // 观察所有服务卡片
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card)
  })
  
  // 观察联系表单
  document.querySelectorAll('.contact-form').forEach(form => {
    observer.observe(form)
  })
  
  // 观察电报区域
  document.querySelectorAll('.telegram-container').forEach(container => {
    observer.observe(container)
  })
  
  // 添加交错动画效果到服务卡片
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`
  })
})
</script>

<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <header class="header">
      <div class="logo">
        <span class="cn">中俄</span>
        <span class="ru">РУС</span>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#home">{{ t('nav.home') }}</a></li>
          <li><a href="#services">{{ t('nav.services') }}</a></li>
          <li><a href="#contact">{{ t('nav.contact') }}</a></li>
          <li><a href="#telegram" class="telegram-link"><img src="./assets/telegram.svg" alt="Telegram" class="telegram-icon" />{{ t('nav.telegram') }}</a></li>
        </ul>
      </nav>
      <div class="language-switcher">
        <button 
          @click="changeLanguage('zh')" 
          :class="{ active: currentLanguage === 'zh' }"
        >中文</button>
        <button 
          @click="changeLanguage('en')" 
          :class="{ active: currentLanguage === 'en' }"
        >EN</button>
        <button 
          @click="changeLanguage('ru')" 
          :class="{ active: currentLanguage === 'ru' }"
        >РУС</button>
      </div>
    </header>

    <!-- 主页横幅 -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1>{{ t('hero.title') }}</h1>
        <p>{{ t('hero.subtitle') }}</p>
        <button class="cta-button">{{ t('hero.cta') }}</button>
      </div>
    </section>

    <!-- 服务部分 -->
    <section id="services" class="services">
      <h2>{{ t('services.title') }}</h2>
      <div class="services-grid">
        <div v-for="service in services" :key="service.key" class="service-card">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ t(`services.${service.key}.title`) }}</h3>
          <p>{{ t(`services.${service.key}.desc`) }}</p>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="contact">
      <h2>{{ t('contact.title') }}</h2>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">{{ t('contact.name') }}</label>
          <input type="text" id="name" name="name">
        </div>
        <div class="form-group">
          <label for="email">{{ t('contact.email') }}</label>
          <input type="email" id="email" name="email">
        </div>
        <div class="form-group">
          <label for="message">{{ t('contact.message') }}</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" class="submit-button">{{ t('contact.submit') }}</button>
      </form>
    </section>

    <!-- 电报引流区域 -->
    <section id="telegram" class="telegram-section">
      <div class="telegram-container">
        <img src="./assets/telegram.svg" alt="Telegram" class="telegram-large-icon" />
        <h2>{{ t('footer.telegram') }}</h2>
        <a :href="telegramLink" target="_blank" class="telegram-button">
          <span>{{ t('nav.telegram') }}</span>
          <img src="./assets/telegram.svg" alt="Telegram" class="telegram-btn-icon" />
        </a>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <p>{{ t('footer.rights') }}</p>
        <a :href="telegramLink" target="_blank" class="footer-telegram-link">
          <img src="./assets/telegram.svg" alt="Telegram" class="telegram-icon" />
          {{ t('nav.telegram') }}
        </a>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  /* 中国红和俄罗斯蓝色主题 */
  --china-red: #de2910;
  --russia-blue: #0039a6;
  --russia-red: #d52b1e;
  --light-bg: #f5f5f5;
  --dark-text: #333;
  --light-text: #fff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--dark-text);
  background-color: var(--light-bg);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: block;
}

#app {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
}

.app-container {
  width: 100%;
  max-width: 100%;
}

/* 导航栏样式 */
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  animation: fadeInDown 0.8s;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.logo .cn {
  color: var(--china-red);
}

.logo .ru {
  color: var(--russia-blue);
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav ul li {
  margin-left: 2rem;
}

.nav ul li a {
  text-decoration: none;
  color: var(--dark-text);
  font-weight: 500;
  transition: color 0.3s;
}

.nav ul li a:hover {
  color: var(--china-red);
}

.telegram-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: middle;
}

.telegram-link {
  display: inline-flex;
  align-items: center;
  color: #0088cc !important;
  transition: transform 0.3s !important;
}

.telegram-link:hover {
  transform: scale(1.05);
}

.language-switcher button {
  background: none;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  color: var(--dark-text);
}

@media (max-width: 768px) {
  .language-switcher button {
    color: var(--dark-text);
    background-color: rgba(255, 255, 255, 0.9);
  }
}
.language-switcher button.active {
  background-color: #eee;
  font-weight: bold;
}

/* 主页横幅样式 */
.hero {
  background: linear-gradient(135deg, var(--china-red) 0%, var(--russia-blue) 100%);
  color: var(--light-text);
  padding: 5rem 2rem;
  text-align: center;
  animation: fadeIn 1s;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background-color: #fff;
  color: var(--china-red);
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 服务部分样式 */
.services {
  padding: 4rem 2rem;
  background-color: #fff;
}

.services h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--dark-text);
  position: relative;
}

.services h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, var(--china-red), var(--russia-blue));
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s, opacity 0.8s;
  opacity: 0;
  transform: translateY(30px);
}

.service-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: var(--dark-text);
  margin-bottom: 1rem;
}

/* 联系我们样式 */
.contact {
  padding: 4rem 2rem;
  background-color: #f5f5f5;
}

.contact h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--dark-text);
  position: relative;
}

.contact h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, var(--china-red), var(--russia-blue));
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s, transform 0.8s;
}

.contact-form.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-button {
  background: linear-gradient(to right, var(--china-red), var(--russia-blue));
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 电报区域样式 */
.telegram-section {
  background: linear-gradient(135deg, #0088cc, #0055a5);
  padding: 4rem 2rem;
  text-align: center;
  color: #fff;
}

.telegram-container {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s, transform 0.8s;
}

.telegram-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.telegram-large-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

.telegram-button {
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: #0088cc;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 1.5rem;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.telegram-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.telegram-btn-icon {
  width: 24px;
  height: 24px;
  margin-left: 10px;
}

/* 页脚样式 */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 2rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-telegram-link {
  display: inline-flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-telegram-link:hover {
  color: #0088cc;
}

/* 动画关键帧 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav ul li {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .telegram-button {
    padding: 0.6rem 1.5rem;
  }
}
</style>
