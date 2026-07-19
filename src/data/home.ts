export interface HomeContent {
  hero: {
    eyebrow: string; t1: string; t2: string; sub: string; gloss?: string;
    ctaPrimary: string; ctaSecondary: string; trust1: string; trust2: string;
    card: { label: string; name1: string; msg1: string; name2: string; msg2: string; foot: string };
  };
  shift: { eyebrow: string; title: string; body: string[]; stat: string; statCaption: string };
  who: { eyebrow: string; title: string; cards: { seal: string; title: string; desc: string; href: string }[] };
  engine: { eyebrow: string; title: string; lede: string; steps: { n: string; title: string; desc: string }[]; deliverables: string[] };
  proof: { eyebrow: string; title: string; body: string; note: string };
  resource: { eyebrow: string; title: string; lede: string };
  china: string;
  final: { eyebrow: string; title: string; sub: string };
}

export const home: { en: HomeContent; zh: HomeContent } = {
  en: {
    hero: {
      eyebrow: 'LinkedIn pipelines for global trade · 深圳 / 广州 / 义乌',
      t1: 'China makes it.',
      t2: 'The world should <em>find you.</em>',
      sub: 'We build the LinkedIn presence and outbound engine that turns Chinese suppliers into the partner Western buyers reach out to first — not the fifteenth business card in the pile.',
      gloss: '我们为中国供应商打造领英形象与获客引擎，让西方买家主动找上门 —— 而不是名片堆里的第十五张。',
      ctaPrimary: 'Get My Free LinkedIn Audit',
      ctaSecondary: 'See how it works',
      trust1: 'Trusted by cross-border suppliers',
      trust2: '30 qualified conversations in 90 days — guaranteed',
      card: {
        label: 'Meanwhile, on LinkedIn…',
        name1: 'J. Sanders · Amazon FBA, US',
        msg1: 'Hi — saw your profile. Do you source kitchen organizers? Looking for a long-term partner.',
        name2: 'You · 2 min later',
        msg2: "Yes — that's our main category. 14 factories audited. Here's our catalog…",
        foot: 'Conversation started · pipeline stage: warm',
      },
    },
    shift: {
      eyebrow: 'The shift · 变化',
      title: 'Western buyers don’t decide at the booth anymore.',
      body: [
        'Your best leads meet fifteen suppliers in a day, then go home and quietly research on LinkedIn before they reply to anyone.',
        'If they find nothing — no profile, no proof, no presence — they move on. And you never even know they looked.',
      ],
      stat: '72:00:00',
      statCaption: 'How fast a trade-show lead goes cold. LinkedIn is where you stay warm.',
    },
    who: {
      eyebrow: 'Who we help · 服务对象',
      title: 'Four industries. One growth engine.',
      cards: [
        { seal: '采', title: 'Sourcing Agencies', desc: 'Win Western Amazon sellers who vet you on LinkedIn before they reply.', href: '/sourcing-agencies/' },
        { seal: '运', title: 'Freight Forwarders', desc: 'Turn importers and e-commerce brands into a steady logistics pipeline.', href: '/freight-forwarders/' },
        { seal: '软', title: 'Software / SaaS', desc: 'Fill your demo calendar with supply-chain and e-commerce buyers.', href: '/software/' },
        { seal: '厂', title: 'Factories', desc: 'Be the manufacturer global brands discover, trust, and reorder from.', href: '/factories/' },
      ],
    },
    engine: {
      eyebrow: 'The engine · 引擎',
      title: 'Audit. Build. Then the machine runs.',
      lede: 'A done-for-you system that turns your LinkedIn into a predictable client pipeline.',
      steps: [
        { n: '01', title: 'Audit', desc: 'Week 1 — we mystery-shop you as a Western buyer and map every gap.' },
        { n: '02', title: 'Build', desc: 'Weeks 2–4 — profile, company page, and content rebuilt to convert.' },
        { n: '03', title: 'The machine', desc: 'Month 2+ — outreach, content, and pipeline running every single week.' },
      ],
      deliverables: ['400 target buyers / month', '12 posts + 200 comments', 'Full outreach, done for you', 'Live dashboard + weekly calls'],
    },
    proof: {
      eyebrow: 'The guarantee · 保证',
      title: '30 qualified conversations in 90 days — or we work for free.',
      body: 'Not at 30 by Month 4? Month 4 is free. Still not there by Month 6? Full refund.',
      note: 'We take the risk so you don’t have to. Two clients maximum at a time — every account gets senior attention.',
    },
    resource: {
      eyebrow: 'Free resource · 免费资源',
      title: 'See how your LinkedIn scores today.',
      lede: 'Grade your presence against the top 10% of suppliers Western buyers actually contact. Free branded PDF, sent to your inbox.',
    },
    china: 'Built for China’s exporters · 深圳 · 广州 · 义乌 · English + 中文 · WeChat: tehsin369',
    final: {
      eyebrow: 'Free audit · 免费诊断',
      title: 'Ready to be the supplier they find first?',
      sub: 'Start with a free LinkedIn audit. We’ll show you exactly what Western buyers see today — and the pipeline you’re missing.',
    },
  },
  zh: {
    hero: {
      eyebrow: '面向全球贸易的领英获客引擎 · 深圳 / 广州 / 义乌',
      t1: '中国制造，',
      t2: '让世界<em>主动找到你。</em>',
      sub: '我们为中国供应商打造领英形象与外呼获客引擎，让你成为西方买家第一个主动联系的伙伴 —— 而不是名片堆里的第十五张。',
      ctaPrimary: '免费领取领英账户诊断',
      ctaSecondary: '了解运作方式',
      trust1: '获跨境供应商信赖',
      trust2: '90 天 30 次高质量对话 —— 保证达成',
      card: {
        label: '与此同时，在领英上……',
        name1: 'J. Sanders · 亚马逊 FBA，美国',
        msg1: '你好 —— 看到你的主页。你们做厨房收纳吗？在找长期合作伙伴。',
        name2: '你 · 2 分钟后',
        msg2: '是的 —— 这是我们的主力品类，已审厂 14 家。这是我们的产品目录……',
        foot: '对话已开始 · 管道阶段：温热',
      },
    },
    shift: {
      eyebrow: '变化',
      title: '西方买家，不再在展位上做决定。',
      body: [
        '你最好的线索一天见十五家供应商，回去后会先在领英上默默研究，才决定回复谁。',
        '如果什么都找不到——没有主页、没有背书、没有存在感——他就走了。而你甚至从不知道他来看过。',
      ],
      stat: '72:00:00',
      statCaption: '展会线索「变冷」的速度。而领英，是让你保持「温热」的地方。',
    },
    who: {
      eyebrow: '服务对象',
      title: '四大行业，一套增长引擎。',
      cards: [
        { seal: '采', title: '采购代理', desc: '让在领英上考察你的西方亚马逊卖家，主动开口合作。', href: '/zh/sourcing-agencies/' },
        { seal: '运', title: '货运代理', desc: '把进口商与电商品牌，变成稳定的物流客户管道。', href: '/zh/freight-forwarders/' },
        { seal: '软', title: '软件 / SaaS', desc: '用供应链与电商买家，填满你的演示日程。', href: '/zh/software/' },
        { seal: '厂', title: '工厂', desc: '成为全球品牌愿意信任、反复下单的制造商。', href: '/zh/factories/' },
      ],
    },
    engine: {
      eyebrow: '引擎',
      title: '诊断、搭建，然后引擎自动运转。',
      lede: '一套「全托管」系统，把你的领英变成可预测的客户管道。',
      steps: [
        { n: '01', title: '诊断', desc: '第 1 周——我们以西方买家的视角「暗访」你，找出每一处缺口。' },
        { n: '02', title: '搭建', desc: '第 2–4 周——重建账号、公司主页与内容，让它们「会转化」。' },
        { n: '03', title: '增长机器', desc: '第 2 月起——触达、内容与客户管道，每一周持续运转。' },
      ],
      deliverables: ['每月 400 个目标买家', '12 篇内容 + 200 条评论', '全流程触达，全程代运营', '实时看板 + 每周沟通'],
    },
    proof: {
      eyebrow: '保证',
      title: '90 天 30 次高质量对话——否则我们免费为你工作。',
      body: '第 4 个月还没到 30 次？第 4 个月免费。到第 6 个月仍未达标？全额退款。',
      note: '风险我们担，让你没有后顾之忧。同一时间最多服务两家客户——每个账户都由资深团队亲自负责。',
    },
    resource: {
      eyebrow: '免费资源',
      title: '看看你的领英，今天能打几分。',
      lede: '用西方买家真正会联系的「前 10% 供应商」作为标准，为你的领英形象打分。免费精美 PDF，直接发到你的邮箱。',
    },
    china: '为中国出口企业打造 · 深圳 · 广州 · 义乌 · 中文 + English · 微信：tehsin369',
    final: {
      eyebrow: '免费诊断',
      title: '准备好成为他们第一个找到的供应商了吗？',
      sub: '从一次免费领英诊断开始。我们会告诉你，西方买家今天看到的是什么——以及你正在错过的客户管道。',
    },
  },
};
