import './App.css'

const services = [
  {
    icon: '💬',
    title: 'AI 客服自动回复',
    desc: '24 小时自动回答顾客咨询，减少漏回复，让门店不错过每一单。',
  },
  {
    icon: '🎬',
    title: '短视频脚本与内容日历',
    desc: '帮你规划每周拍摄主题和发布节奏，持续输出本地商家内容。',
  },
  {
    icon: '📊',
    title: '商家资料整理与自动化表格',
    desc: '整理菜单、价目、会员信息，自动生成表格，减少手工录入。',
  },
]

const merchants = [
  { icon: '🍜', name: '餐饮店', desc: '外卖咨询、订位回复、活动通知' },
  { icon: '💇', name: '美业门店', desc: '预约提醒、项目介绍、客户跟进' },
  { icon: '🏝️', name: '文旅商家', desc: '路线咨询、票务说明、行程推荐' },
  { icon: '🛒', name: '电商小团队', desc: '订单答疑、商品介绍、售后话术' },
]

const plans = [
  {
    name: '体验版',
    price: '¥299',
    desc: '适合先试用 AI 客服或内容辅助',
    features: ['1 项核心服务', '基础模板配置', '7 天上手指导'],
    featured: false,
  },
  {
    name: '标准版',
    price: '¥999',
    desc: '适合门店日常运营自动化',
    features: ['3 项服务组合', '定制话术与表格', '30 天持续优化'],
    featured: true,
  },
  {
    name: '定制版',
    price: '面议',
    desc: '适合多门店或多业务线团队',
    features: ['按需定制流程', '多账号协同', '专属对接支持'],
    featured: false,
  },
]

function handleWechatClick() {
  alert('请添加微信咨询：local-ai-service\n（演示页，可替换为你的微信号）')
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <span className="hero-badge">泉州 · 厦门 本地商家</span>
        <h1>本地商家 AI 员工服务</h1>
        <p className="hero-subtitle">
          帮门店、工作室、电商、小团队用 AI 降低重复劳动
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">核心服务</h2>
        <div className="card-grid card-grid--3">
          {services.map((item) => (
            <article key={item.title} className="card">
              <span className="card-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <h2 className="section-title">适合哪些商家</h2>
        <div className="card-grid card-grid--4">
          {merchants.map((item) => (
            <article key={item.name} className="card card--compact">
              <span className="card-icon card-icon--sm" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">简单透明价格</h2>
        <div className="card-grid card-grid--3">
          {plans.map((item) => (
            <article
              key={item.name}
              className={`card card--price${item.featured ? ' card--featured' : ''}`}
            >
              {item.featured && <span className="price-badge">推荐</span>}
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="price-desc">{item.desc}</p>
              <ul className="price-features">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <p>想了解你的门店适合哪种方案？</p>
        <button type="button" className="cta-button" onClick={handleWechatClick}>
          微信咨询
        </button>
      </section>

      <footer className="footer">
        <p>本地商家 AI 员工服务 · 泉州 / 厦门</p>
      </footer>
    </div>
  )
}

export default App
