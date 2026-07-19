export interface StackItem { item: string; value: string; bonus?: boolean }
export interface FreightOfferContent {
  hero: { eyebrow: string; t1: string; t2: string; sub: string; gloss?: string; ctaPrimary: string; ctaSecondary: string; trust1: string; trust2: string };
  problem: { eyebrow: string; title: string; body: string[] };
  cost: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  offer: {
    eyebrow: string; name: string; tagline: string; sub: string;
    stack: StackItem[];
    totalLabel: string; totalRecurring: string; totalOnce: string;
    priceLabel: string; price: string; setupNote: string; cta: string;
  };
  guarantee: { eyebrow: string; title: string; body: string };
  scarcity: { eyebrow: string; title: string; body: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  final: { eyebrow: string; title: string; sub: string };
}

export const freightOffer: { en: FreightOfferContent; zh: FreightOfferContent } = {
  en: {
    hero: {
      eyebrow: 'For freight forwarders & NVOCCs · 深圳 / 宁波 / 上海',
      t1: 'Stop quoting into the void.',
      t2: 'Start booking <em>repeat shippers.</em>',
      sub: 'Western importers pick the forwarder they trust — not the cheapest line — and they decide on LinkedIn before they ever ask for a rate. We build you a pipeline of direct, repeat importer clients in 90 days. You don’t touch LinkedIn; you just take the conversations.',
      gloss: '西方进口商选的是他们信任的货代，而非最低价——而且在索要报价前，就已在领英上做出判断。',
      ctaPrimary: 'Get My Free LinkedIn Audit',
      ctaSecondary: 'See the offer',
      trust1: 'Two openings this quarter',
      trust2: '30 qualified importer conversations in 90 days — guaranteed',
    },
    problem: {
      eyebrow: 'The problem · 问题',
      title: 'You win on price and lose on margin.',
      body: [
        'You quote fast, you’re reliable, your rates are sharp. But the importer comparing you to five other forwarders has no reason to remember you a month later.',
        'When a shipper is referred to you, their first move is to check you on LinkedIn. No presence, no posts, no proof — so they go with the forwarder who simply looks more established.',
        'A price war is a race to the bottom. Trust is what lets you hold your rate.',
      ],
    },
    cost: {
      eyebrow: 'The cost · 代价',
      title: 'What the silence is costing you.',
      items: [
        { title: 'Repeat shippers you never landed', body: 'One-off bookings that could have been a book of steady, high-margin volume.' },
        { title: 'Margin bled to price-only bidding', body: 'With nothing but a quote to judge you on, buyers pick the cheapest line — every time.' },
        { title: 'Referrals that checked you and moved on', body: 'A warm introduction that went cold the moment they found an empty profile.' },
      ],
    },
    offer: {
      eyebrow: 'The offer · 方案',
      name: 'The Direct-Shipper Engine',
      tagline: 'Everything it takes to turn LinkedIn into a book of repeat importer clients — built and run for you.',
      sub: 'Here’s exactly what’s included, priced as if you bought each piece on its own:',
      stack: [
        { item: 'Lane-positioned profile + company-page rebuild — you become “the 深圳→US specialist,” not a generic forwarder', value: '¥5,800' },
        { item: '400 hand-picked importer & e-commerce decision-makers every month, targeted to your lanes', value: '¥4,000 / mo' },
        { item: '12 ghost-written LinkedIn posts + 200 strategic comments every month', value: '¥9,000 / mo' },
        { item: 'Full done-for-you outbound — personalized messages that start real quote conversations', value: '¥8,000 / mo' },
        { item: 'Live pipeline dashboard + CRM setup — every shipper tracked cold → warm → booked', value: '¥2,800' },
        { item: 'Weekly strategy call with a senior operator', value: '¥6,000 / mo' },
        { item: 'Bonus — “12 Posts That Make Importers DM You” content calendar', value: '¥1,200', bonus: true },
        { item: 'Bonus — Lane-specific outreach script pack (深圳 / 宁波 / 上海 → US / EU)', value: '¥1,800', bonus: true },
        { item: 'Bonus — The Importer Objection Playbook: turn “your rate’s higher” into a booking', value: '¥1,200', bonus: true },
      ],
      totalLabel: 'Total real-world value',
      totalRecurring: '¥27,000 / month',
      totalOnce: '+ ¥12,800 in setup & bonuses',
      priceLabel: 'Your investment',
      price: 'From ¥6,000 / month',
      setupNote: 'Setup fee (¥8,400) waived for this quarter’s opening. We only win when your pipeline does.',
      cta: 'Claim an opening — free audit first',
    },
    guarantee: {
      eyebrow: 'The guarantee · 保证',
      title: 'The 30-Conversation Guarantee.',
      body: '30 qualified importer conversations in 90 days — or Month 4 is on us. Still not at 30 by Month 6? Every fee back. The only thing you risk is the lanes you’re not booking right now.',
    },
    scarcity: {
      eyebrow: 'Availability · 名额',
      title: 'Two clients at a time. One forwarder per lane-region.',
      body: 'We never pit our own clients against each other for the same shippers — so we take one forwarder per lane-region, two at a time. Two openings this quarter.',
    },
    faq: {
      eyebrow: 'Questions · 常见问题',
      title: 'Straight answers.',
      items: [
        { q: 'We already have a sales team.', a: 'They close. We fill the top of the funnel with warm importers who already know you — better leads, not more cold ones.' },
        { q: 'Our clients aren’t on LinkedIn.', a: 'The people who choose forwarders — importers’ ops leads and DTC founders — are. It’s where they shortlist before asking for a rate.' },
        { q: 'Freight’s too commoditized for content.', a: 'Exactly why this works: a visible, trusted forwarder stops being a commodity — and stops competing on price alone.' },
        { q: 'We don’t have time for LinkedIn.', a: 'You won’t touch it. We write, publish, comment, and prospect; you approve in minutes and take the conversations.' },
        { q: 'Will it work for our lane?', a: 'We target your exact lanes and back it with the guarantee. No 30 conversations, no cost.' },
      ],
    },
    final: {
      eyebrow: 'Free audit · 免费诊断',
      title: 'See what importers see when they look you up.',
      sub: 'Start with a free LinkedIn audit — we’ll mystery-shop your company as a Western importer and show you exactly what they see today, and the pipeline you’re missing.',
    },
  },
  zh: {
    hero: {
      eyebrow: '专为货运代理与无船承运人打造 · 深圳 / 宁波 / 上海',
      t1: '别再对着空气报价。',
      t2: '开始拿下<em>长期回头货主。</em>',
      sub: '西方进口商选的是他们信任的货代，而非最低价——而且在向你索要报价之前，就已在领英上做出判断。我们在 90 天内为你搭建一条「直客、回头、高毛利」的进口商管道。你不用碰领英，只管接对话。',
      ctaPrimary: '免费领取领英诊断',
      ctaSecondary: '查看方案',
      trust1: '本季度仅剩两个名额',
      trust2: '90 天 30 次高质量进口商对话 —— 保证达成',
    },
    problem: {
      eyebrow: '问题',
      title: '赢了价格，输了利润。',
      body: [
        '你报价快、履约稳、价格也有竞争力。但那个同时对比五家货代的进口商，一个月后没有任何理由记得你。',
        '当有人把货主介绍给你，他的第一步是上领英查你。没有存在感、没有内容、没有背书——于是他选了那个「看起来更成熟」的货代。',
        '价格战是一场向下的竞赛。唯有信任，才能让你守住运价。',
      ],
    },
    cost: {
      eyebrow: '代价',
      title: '沉默，正让你付出什么。',
      items: [
        { title: '从未拿下的长期货主', body: '本可成为稳定、高毛利货量的合作，最终只做成了一票。' },
        { title: '被纯比价蚕食的利润', body: '当买家只能靠报价判断你，他每一次都会选最低价。' },
        { title: '查过你便离开的转介绍', body: '一次热情的引荐，在对方看到空白主页的那一刻冷却。' },
      ],
    },
    offer: {
      eyebrow: '方案',
      name: '直客货代引擎',
      tagline: '把领英变成一本「长期进口商客户名册」所需的一切——由我们为你搭建并运营。',
      sub: '以下是全部内容，并按「单独购买」的市场价标注价值：',
      stack: [
        { item: '按航线定位的账号 + 公司主页重建——让你成为「深圳→美国专线专家」，而非普通货代', value: '¥5,800' },
        { item: '每月 400 个精选进口商与电商决策者，按你的航线精准锁定', value: '¥4,000 / 月' },
        { item: '每月 12 篇代笔领英内容 + 200 条战略评论', value: '¥9,000 / 月' },
        { item: '全流程代运营外呼——个性化消息，开启真实的询价对话', value: '¥8,000 / 月' },
        { item: '实时管道看板 + CRM 搭建——每个货主从冷、到温、到成交全程可见', value: '¥2,800' },
        { item: '每周与资深操盘手的策略沟通', value: '¥6,000 / 月' },
        { item: '赠品——「让进口商主动私信你的 12 篇帖子」内容日历', value: '¥1,200', bonus: true },
        { item: '赠品——按航线定制的外呼话术包（深圳 / 宁波 / 上海 → 美 / 欧）', value: '¥1,800', bonus: true },
        { item: '赠品——进口商异议手册：把「你的价更高」变成一单', value: '¥1,200', bonus: true },
      ],
      totalLabel: '真实市场价值',
      totalRecurring: '¥27,000 / 月',
      totalOnce: '+ ¥12,800 启动费与赠品',
      priceLabel: '你的投入',
      price: '¥6,000 / 月 起',
      setupNote: '本季度名额启动费（¥8,400）全免。你的管道赢了，我们才算赢。',
      cta: '锁定名额 —— 先做免费诊断',
    },
    guarantee: {
      eyebrow: '保证',
      title: '30 次对话保证。',
      body: '90 天内 30 次高质量进口商对话——否则第 4 个月免费。到第 6 个月仍未达标？全额退款。你唯一的风险，是此刻正在流失的那些订单。',
    },
    scarcity: {
      eyebrow: '名额',
      title: '同一时间两家客户。每个航线区域只服务一家货代。',
      body: '我们绝不让自己的客户为同一批货主互相厮杀——因此每个航线区域只接一家货代，同时最多两家。本季度仅剩两个名额。',
    },
    faq: {
      eyebrow: '常见问题',
      title: '直接的答案。',
      items: [
        { q: '我们已经有销售团队。', a: '他们负责成交，我们负责填满漏斗顶端——送来已经认识你的温热进口商，是更好的线索，而非更多的冷线索。' },
        { q: '我们的客户不用领英。', a: '真正「选择货代」的人——进口商的运营负责人、DTC 品牌创始人——都在用。那正是他们在索要报价前筛选名单的地方。' },
        { q: '货代太同质化，做内容有用吗？', a: '这正是关键：一个可见、可信的货代，才能跳出同质化、不再只靠价格竞争。' },
        { q: '我们没时间搞领英。', a: '你不用碰。撰写、发布、评论、外呼都由我们完成；你几分钟确认，然后接对话。' },
        { q: '这对我们的航线有用吗？', a: '我们按你的具体航线精准锁定，并以保证兜底。没有 30 次对话，就不收费。' },
      ],
    },
    final: {
      eyebrow: '免费诊断',
      title: '看看进口商查你时，看到的是什么。',
      sub: '从一次免费领英诊断开始——我们会以西方进口商的视角「暗访」你的公司，让你看到他们今天眼中的你，以及你正在错过的客户管道。',
    },
  },
};
