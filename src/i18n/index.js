import { createI18n } from 'vue-i18n'

// 语言包
const messages = {
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      about: '关于我们',
      contact: '联系我们',
      telegram: '电报频道'
    },
    hero: {
      title: '中俄贸易服务平台',
      subtitle: '专业的中俄贸易一站式服务',
      cta: '了解更多'
    },
    services: {
      title: '我们的服务',
      visa: {
        title: '签证办理',
        desc: '提供中俄商务、旅游签证代办服务，手续简便快捷'
      },
      legal: {
        title: '法律财务服务',
        desc: '专业的法律咨询和财务服务，解决贸易中的法律财务问题'
      },
      procurement: {
        title: '代采服务',
        desc: '根据客户需求，提供专业的产品采购服务'
      },
      factory: {
        title: '验厂服务',
        desc: '提供专业的工厂考察和验厂服务'
      },
      guide: {
        title: '本地地陪',
        desc: '提供专业的本地向导和翻译服务'
      },
      logistics: {
        title: '物流运输',
        desc: '提供中俄之间的物流运输解决方案'
      },
      social: {
        title: '社媒运营',
        desc: '帮助企业在中俄社交媒体上进行品牌推广'
      },
      ecommerce: {
        title: '电商物料制作',
        desc: '提供电商平台所需的各类物料设计和制作'
      }
    },
    contact: {
      title: '联系我们',
      name: '姓名',
      email: '邮箱',
      message: '留言',
      submit: '提交'
    },
    footer: {
      rights: '© 2024 中俄贸易服务平台. 保留所有权利.',
      telegram: '加入我们的电报频道获取最新资讯'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'China-Russia Trade Service Platform',
      subtitle: 'Professional one-stop service for China-Russia trade',
      cta: 'Learn More'
    },
    services: {
      title: 'Our Services',
      visa: {
        title: 'Visa Application',
        desc: 'Providing China-Russia business and tourist visa services with simple and fast procedures'
      },
      legal: {
        title: 'Legal & Financial Services',
        desc: 'Professional legal consultation and financial services to solve legal and financial issues in trade'
      },
      procurement: {
        title: 'Procurement Services',
        desc: 'Professional product procurement services based on customer needs'
      },
      factory: {
        title: 'Factory Inspection',
        desc: 'Professional factory inspection and verification services'
      },
      guide: {
        title: 'Local Guide',
        desc: 'Professional local guide and translation services'
      },
      logistics: {
        title: 'Logistics & Transportation',
        desc: 'Logistics and transportation solutions between China and Russia'
      },
      social: {
        title: 'Social Media Operation',
        desc: 'Help enterprises promote their brands on Chinese and Russian social media'
      },
      ecommerce: {
        title: 'E-commerce Materials',
        desc: 'Design and production of various materials needed for e-commerce platforms'
      }
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit'
    },
    footer: {
      rights: '© 2024 China-Russia Trade Service Platform. All rights reserved.',
      telegram: 'Join our Telegram channel for latest updates'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'Платформа торговых услуг Китай-Россия',
      subtitle: 'Профессиональные комплексные услуги для китайско-российской торговли',
      cta: 'Узнать больше'
    },
    services: {
      title: 'Наши услуги',
      visa: {
        title: 'Оформление визы',
        desc: 'Предоставление услуг по оформлению деловых и туристических виз между Китаем и Россией с простыми и быстрыми процедурами'
      },
      legal: {
        title: 'Юридические и финансовые услуги',
        desc: 'Профессиональные юридические консультации и финансовые услуги для решения юридических и финансовых вопросов в торговле'
      },
      procurement: {
        title: 'Услуги по закупкам',
        desc: 'Профессиональные услуги по закупке продукции на основе потребностей клиентов'
      },
      factory: {
        title: 'Инспекция фабрик',
        desc: 'Профессиональные услуги по инспекции и проверке фабрик'
      },
      guide: {
        title: 'Местный гид',
        desc: 'Профессиональные услуги местного гида и перевода'
      },
      logistics: {
        title: 'Логистика и транспорт',
        desc: 'Логистические и транспортные решения между Китаем и Россией'
      },
      social: {
        title: 'Работа в социальных сетях',
        desc: 'Помощь предприятиям в продвижении своих брендов в китайских и российских социальных сетях'
      },
      ecommerce: {
        title: 'Материалы для электронной коммерции',
        desc: 'Дизайн и производство различных материалов, необходимых для платформ электронной коммерции'
      }
    },
    contact: {
      title: 'Свяжитесь с нами',
      name: 'Имя',
      email: 'Электронная почта',
      message: 'Сообщение',
      submit: 'Отправить'
    },
    footer: {
      rights: '© 2024 Платформа торговых услуг Китай-Россия. Все права защищены.',
      telegram: 'Присоединяйтесь к нашему каналу Telegram для получения последних обновлений'
    }
  }
}

const i18n = createI18n({
  legacy: false, // 使用组合式API
  locale: 'zh', // 默认语言
  fallbackLocale: 'en', // 备用语言
  messages
})

export default i18n