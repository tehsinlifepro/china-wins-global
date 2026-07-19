export interface FunnelContent {
  eyebrow: string;
  heroT1: string;
  heroT2: string; // may contain an <em>…</em>
  heroSub: string;
  heroGloss?: string; // Chinese subtitle shown under English (EN pages only)
  problemTitle: string;
  problemP: string[];
  costTitle: string;
  costItems: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  finalSub: string;
}

type Vertical = { en: FunnelContent; zh: FunnelContent };

export const verticals: Record<'freight' | 'software' | 'factories', Vertical> = {
  // ─────────────────────────── FREIGHT FORWARDERS ───────────────────────────
  freight: {
    en: {
      eyebrow: 'For freight forwarders & NVOCCs · 深圳 / 宁波 / 上海',
      heroT1: 'Freight is a relationship business.',
      heroT2: 'LinkedIn is where it <em>starts now.</em>',
      heroSub:
        'Western importers and e-commerce brands vet their next forwarder on LinkedIn before they ever ask for a quote. If you are invisible there, you only get to compete on price.',
      heroGloss:
        '西方进口商与电商品牌在索要报价前，先在领英考察你。缺席，就只能拼价格。',
      problemTitle: 'You win on price and lose on margin',
      problemP: [
        'You quote fast, you are reliable, your rates are sharp. But the importer comparing you to five other forwarders has no reason to remember you a month later.',
        'When a shipper is referred to you, their first move is to check you on LinkedIn. No presence, no posts, no proof — so they go with the forwarder who simply looks more established.',
        'A price war is a race to the bottom. Trust is what lets you hold your rate.',
      ],
      costTitle: 'What the silence is costing you',
      costItems: [
        { title: 'Repeat shippers you never landed', body: 'One-off bookings that could have been a book of steady, high-margin volume.' },
        { title: 'Margin bled to price-only bidding', body: 'With nothing but a quote to judge you on, buyers choose the cheapest line — every time.' },
        { title: 'Referrals that checked you and moved on', body: 'A warm introduction that went cold the moment they found an empty profile.' },
      ],
      faq: [
        { q: 'We already have a sales team. How is this different?', a: 'Your team closes. We fill the top of the funnel — a steady stream of importers and brands who already know and trust you before the first call.' },
        { q: 'Our clients are not on LinkedIn.', a: 'The decision-makers at Western importers and DTC brands are. That is exactly where they research and shortlist logistics partners.' },
        { q: 'Isn’t our business too commoditized for content?', a: 'That is precisely the point — a visible, trusted forwarder escapes the commodity trap and defends its rate.' },
      ],
      finalSub:
        'We will mystery-shop your company the way a Western importer would, and show you exactly what they see today — and the pipeline you are missing.',
    },
    zh: {
      eyebrow: '专为货运代理与无船承运人打造 · 深圳 / 宁波 / 上海',
      heroT1: '货代，是一门关系生意。',
      heroT2: '而关系，如今始于<em>领英。</em>',
      heroSub:
        '西方进口商与电商品牌，在向你索要报价之前，就先在领英上考察你。你若缺席，就只能靠价格竞争。',
      problemTitle: '赢了价格，输了利润',
      problemP: [
        '你报价快、履约稳、价格也有竞争力。但那个同时对比五家货代的进口商，一个月后没有任何理由记得你。',
        '当有人把货主介绍给你，他的第一步是上领英查你。没有存在感、没有内容、没有背书——于是他选了那个「看起来更成熟」的货代。',
        '价格战是一场向下的竞赛。唯有信任，才能让你守住运价。',
      ],
      costTitle: '沉默，正让你付出什么',
      costItems: [
        { title: '从未拿下的长期货主', body: '本可成为稳定、高毛利货量的合作，最终只做成了一票。' },
        { title: '被纯比价蚕食的利润', body: '当买家只能靠报价判断你，他每一次都会选最低价。' },
        { title: '查过你便离开的转介绍', body: '一次热情的引荐，在对方看到空白主页的那一刻冷却。' },
      ],
      faq: [
        { q: '我们已经有销售团队，这有何不同？', a: '你的团队负责成交，我们负责填满漏斗顶端——让一批已经认识并信任你的进口商与品牌，主动走到第一通电话。' },
        { q: '我们的客户不用领英。', a: '西方进口商与 DTC 品牌的决策者都在用。那正是他们研究并筛选物流伙伴的地方。' },
        { q: '我们这行太同质化，做内容有用吗？', a: '这恰恰是关键——一个可见、可信的货代，才能跳出同质化陷阱，守住自己的运价。' },
      ],
      finalSub:
        '我们会像一位西方进口商那样「暗访」你的公司，让你看到他们今天眼中的你——以及你正在错过的客户管道。',
    },
  },

  // ─────────────────────────── SOFTWARE / SAAS ───────────────────────────
  software: {
    en: {
      eyebrow: 'For supply-chain & e-commerce SaaS · 深圳 / 杭州',
      heroT1: 'Your product sells itself —',
      heroT2: 'if buyers ever <em>find it.</em>',
      heroSub:
        'Supply-chain and e-commerce decision-makers research tools on LinkedIn before they ever book a demo. Great software with no presence loses to louder, weaker competitors.',
      heroGloss:
        '供应链与电商决策者在预约演示前，先在领英研究工具。没有存在感的好产品，会输给更「吵」但更弱的对手。',
      problemTitle: 'Great product, empty demo calendar',
      problemP: [
        'Your software is better than the tool they are using. But they will never switch to a product they have never heard of, from a company with no visible track record.',
        'B2B buyers self-educate on LinkedIn long before they talk to sales. If you are not in that feed, you are not on the shortlist.',
        'Ads get expensive and stop the moment you stop paying. A trusted presence compounds.',
      ],
      costTitle: 'What invisibility is costing you',
      costItems: [
        { title: 'Demos that never got booked', body: 'Buyers who would have loved the product never learned it existed.' },
        { title: 'Deals lost to a noisier competitor', body: 'A weaker tool wins because the founder shows up in the feed and you do not.' },
        { title: 'CAC you overpay on ads', body: 'Paying for every click, when organic trust could be filling the same pipeline.' },
      ],
      faq: [
        { q: 'We run paid ads already.', a: 'Ads rent attention; presence builds it. We make the organic engine that lowers your blended CAC and warms buyers before they click anything.' },
        { q: 'Our founder has no time to post.', a: 'That is the service. We ghost-write, you approve in minutes, we run the outreach and comments.' },
        { q: 'Is LinkedIn right for our niche?', a: 'If your buyers are operators, ops leads, or founders in commerce and supply chain — yes, they live there.' },
      ],
      finalSub:
        'We will audit how a target buyer sees your company on LinkedIn today, and map the pipeline your product is missing.',
    },
    zh: {
      eyebrow: '专为供应链与电商软件（SaaS）打造 · 深圳 / 杭州',
      heroT1: '你的产品会自己说话——',
      heroT2: '前提是买家<em>找得到它。</em>',
      heroSub:
        '供应链与电商的决策者，在预约演示之前，先在领英上研究工具。没有存在感的好产品，会输给更「吵」却更弱的对手。',
      problemTitle: '产品很好，演示日程却空着',
      problemP: [
        '你的软件比他们正在用的更好。但他们不会切换到一个从未听过、公司也毫无可见履历的产品。',
        'B2B 买家在与销售交谈之前，早已在领英自我教育。你若不在那条信息流里，就进不了候选名单。',
        '广告越来越贵，且你一停投放它就停。而可信的存在感会不断复利。',
      ],
      costTitle: '「隐形」正让你付出什么',
      costItems: [
        { title: '从未被预约的演示', body: '本会爱上你产品的买家，根本不知道它的存在。' },
        { title: '败给更「吵」对手的订单', body: '更弱的工具赢了，只因它的创始人出现在信息流里，而你没有。' },
        { title: '在广告上多付的获客成本', body: '为每一次点击付费——而自然的信任本可以填满同样的管道。' },
      ],
      faq: [
        { q: '我们已经在投广告了。', a: '广告是「租」注意力，存在感是「建」注意力。我们打造自然增长引擎，降低你的综合获客成本，并在买家点击之前就预热他们。' },
        { q: '创始人没时间发内容。', a: '这正是我们的服务。我们代笔，你几分钟内确认，触达与评论我们全程代运营。' },
        { q: '领英适合我们这个细分领域吗？', a: '如果你的买家是电商与供应链的运营者、运营负责人或创始人——是的，他们就在那里。' },
      ],
      finalSub:
        '我们会诊断一位目标买家今天在领英上如何看待你的公司，并为你的产品梳理出正在错过的客户管道。',
    },
  },

  // ─────────────────────────── FACTORIES ───────────────────────────
  factories: {
    en: {
      eyebrow: 'For factories & manufacturers · 东莞 / 佛山 / 义乌',
      heroT1: 'You make what the world buys.',
      heroT2: 'It just can’t <em>find you.</em>',
      heroSub:
        'Western brands and importers vet manufacturers on LinkedIn before they send an RFQ. World-class production with no presence loses to a trading company that simply has a better profile.',
      heroGloss:
        '西方品牌与进口商在发出询价前，先在领英考察工厂。没有存在感的一流产能，会输给一家「主页更好看」的贸易公司。',
      problemTitle: 'The middleman in front of you took your margin',
      problemP: [
        'You run the line. You hold the certifications. You take the quality risk. And a trading company with a laptop and a LinkedIn profile sits between you and the buyer — taking the margin.',
        'When a Western brand looks for a supplier, they search LinkedIn. They find the trader, not the factory. You never even know the RFQ existed.',
        'Direct relationships are worth more than any single order — and they start with being findable.',
      ],
      costTitle: 'What staying hidden is costing you',
      costItems: [
        { title: 'Direct buyers routed through a middleman', body: 'The margin a trader takes is margin that should have been yours.' },
        { title: 'RFQs that never reached you', body: 'Brands sourcing your exact category found a profile — just not yours.' },
        { title: 'Reorders lost to a “safer”-looking supplier', body: 'Buyers stick with whoever looks established. Right now, that is not you.' },
      ],
      faq: [
        { q: 'We sell through trading companies. Won’t this upset them?', a: 'This builds a direct channel alongside your existing one — higher-margin relationships you own, on your terms.' },
        { q: 'We are a factory, not marketers.', a: 'Exactly why this is done-for-you. You keep making product; we make you findable and trusted.' },
        { q: 'Our buyers speak English; we don’t.', a: 'We run the English-language presence and outreach for you, and hand you warm, qualified conversations.' },
      ],
      finalSub:
        'We will show you what a Western brand sees when they search for your category on LinkedIn today — and the direct pipeline you are missing.',
    },
    zh: {
      eyebrow: '专为工厂与制造商打造 · 东莞 / 佛山 / 义乌',
      heroT1: '世界买的东西，是你造的。',
      heroT2: '可惜，它<em>找不到你。</em>',
      heroSub:
        '西方品牌与进口商在发出询价（RFQ）前，先在领英上考察工厂。没有存在感的一流产能，会输给一家「主页更好看」的贸易公司。',
      problemTitle: '你面前的中间商，拿走了你的利润',
      problemP: [
        '你管着产线，握着认证，承担着品质风险。而一家只有一台笔记本和一个领英主页的贸易公司，横在你和买家之间——赚走了利润。',
        '当西方品牌寻找供应商时，他们上领英搜索。找到的是贸易商，不是工厂。你甚至从不知道那份询价存在过。',
        '直接的关系，比任何单笔订单都更有价值——而它始于「被找到」。',
      ],
      costTitle: '继续「隐身」，正让你付出什么',
      costItems: [
        { title: '被中间商截流的直接买家', body: '贸易商赚走的利润，本该是你的。' },
        { title: '从未抵达你的询价', body: '正在采购你所在品类的品牌找到了一个主页——只是不是你的。' },
        { title: '输给「更靠谱」供应商的返单', body: '买家倾向于选看起来更成熟的一方。而现在，那一方不是你。' },
      ],
      faq: [
        { q: '我们通过贸易公司出货，这会得罪他们吗？', a: '这是在你现有渠道之外，另建一条直接渠道——由你掌控、条件由你定的高毛利关系。' },
        { q: '我们是工厂，不是做营销的。', a: '正因如此，这是「全托管」服务。你专心生产，我们让你被找到、被信任。' },
        { q: '买家讲英文，我们不会。', a: '英文的形象与触达由我们代运营，最终把温热、合格的对话交到你手上。' },
      ],
      finalSub:
        '我们会让你看到：当一个西方品牌今天在领英搜索你的品类时，看到的是什么——以及你正在错过的直接客户管道。',
    },
  },
};
