export interface StackItem { item: string; value: string; bonus?: boolean }
export interface OfferContent {
  magnetId: string;
  card: { label: string; n1: string; m1: string; n2: string; m2: string; foot: string };
  hero: { eyebrow: string; t1: string; t2: string; sub: string; gloss?: string; ctaPrimary: string; ctaSecondary: string; trust1: string; trust2: string };
  problem: { eyebrow: string; title: string; body: string[] };
  cost: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  offer: {
    eyebrow: string; name: string; tagline: string; sub: string; stack: StackItem[];
    totalLabel: string; totalRecurring: string; totalOnce: string;
    priceLabel: string; price: string; setupNote: string; cta: string;
  };
  guarantee: { eyebrow: string; title: string; body: string };
  scarcity: { eyebrow: string; title: string; body: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  final: { eyebrow: string; title: string; sub: string };
}
type Offer = { en: OfferContent; zh: OfferContent };

// Shared value-stack economics across verticals (same underlying service).
const GUAR_EN = { eyebrow: 'The guarantee · 保证', title: 'The 30-Conversation Guarantee.', body: '30 qualified buyer conversations in 90 days — or Month 4 is on us. Still not at 30 by Month 6? Every fee back. The only thing you risk is the deals you’re not winning right now.' };
const GUAR_ZH = { eyebrow: '保证', title: '30 次对话保证。', body: '90 天内 30 次高质量买家对话——否则第 4 个月免费。到第 6 个月仍未达标？全额退款。你唯一的风险，是此刻正在流失的那些订单。' };

export const offers: Record<'freight' | 'software' | 'factories', Offer> = {
  // ───────────────────────── FREIGHT ─────────────────────────
  freight: {
    en: {
      magnetId: '02',
      card: { label: 'Meanwhile, on LinkedIn…', n1: 'M. Rivera · DTC brand, US', m1: 'Need a dependable forwarder for 深圳→LA, 2×40HQ/mo. Loved your post on avoiding Q4 delays — can you quote?', n2: 'You · same day', m2: 'Absolutely — that’s our core lane. Rate + transit below, plus how we route around the Q4 backlog…', foot: 'Quote request · pipeline stage: warm' },
      hero: { eyebrow: 'For freight forwarders & NVOCCs · 深圳 / 宁波 / 上海', t1: 'Stop quoting into the void.', t2: 'Start booking <em>repeat shippers.</em>', sub: 'Western importers pick the forwarder they trust — not the cheapest line — and they decide on LinkedIn before they ever ask for a rate. We build you a pipeline of direct, repeat importer clients in 90 days. You don’t touch LinkedIn; you just take the conversations.', gloss: '西方进口商选的是他们信任的货代，而非最低价——而且在索要报价前，就已在领英上做出判断。', ctaPrimary: 'Get My Free LinkedIn Audit', ctaSecondary: 'See the offer', trust1: 'Two openings this quarter', trust2: '30 qualified importer conversations in 90 days — guaranteed' },
      problem: { eyebrow: 'The problem · 问题', title: 'You win on price and lose on margin.', body: ['You quote fast, you’re reliable, your rates are sharp. But the importer comparing you to five other forwarders has no reason to remember you a month later.', 'When a shipper is referred to you, their first move is to check you on LinkedIn. No presence, no proof — so they go with the forwarder who simply looks more established.', 'A price war is a race to the bottom. Trust is what lets you hold your rate.'] },
      cost: { eyebrow: 'The cost · 代价', title: 'What the silence is costing you.', items: [{ title: 'Repeat shippers you never landed', body: 'One-off bookings that could have been a book of steady, high-margin volume.' }, { title: 'Margin bled to price-only bidding', body: 'With nothing but a quote to judge you on, buyers pick the cheapest line — every time.' }, { title: 'Referrals that checked you and moved on', body: 'A warm introduction that went cold the moment they found an empty profile.' }] },
      offer: {
        eyebrow: 'The offer · 方案', name: 'The Direct-Shipper Engine', tagline: 'Everything it takes to turn LinkedIn into a book of repeat importer clients — built and run for you.', sub: 'Here’s exactly what’s included, priced as if you bought each piece on its own:',
        stack: [
          { item: 'Lane-positioned profile + company-page rebuild — you become “the 深圳→US specialist,” not a generic forwarder', value: '¥5,800' },
          { item: '400 hand-picked importer & e-commerce decision-makers every month, targeted to your lanes', value: '¥4,000 / mo' },
          { item: '12 ghost-written LinkedIn posts + 200 strategic comments every month', value: '¥9,000 / mo' },
          { item: 'Full done-for-you outbound — personalized messages that start real quote conversations', value: '¥8,000 / mo' },
          { item: 'Live pipeline dashboard + CRM setup — every shipper tracked cold → warm → booked', value: '¥2,800' },
          { item: 'Weekly strategy call with a senior operator', value: '¥6,000 / mo' },
          { item: 'Bonus — “12 Posts That Make Importers DM You” content calendar', value: '¥1,200', bonus: true },
          { item: 'Bonus — Lane-specific outreach script pack (深圳 / 宁波 / 上海 → US / EU)', value: '¥1,800', bonus: true },
          { item: 'Bonus — The Importer Objection Playbook', value: '¥1,200', bonus: true },
        ],
        totalLabel: 'Total real-world value', totalRecurring: '¥27,000 / month', totalOnce: '+ ¥12,800 in setup & bonuses', priceLabel: 'Your investment', price: 'From ¥6,000 / month', setupNote: 'Setup fee (¥8,400) waived for this quarter’s opening. We only win when your pipeline does.', cta: 'Claim an opening — free audit first',
      },
      guarantee: { eyebrow: 'The guarantee · 保证', title: 'The 30-Conversation Guarantee.', body: '30 qualified importer conversations in 90 days — or Month 4 is on us. Still not at 30 by Month 6? Every fee back. The only thing you risk is the lanes you’re not booking right now.' },
      scarcity: { eyebrow: 'Availability · 名额', title: 'Two clients at a time. One forwarder per lane-region.', body: 'We never pit our own clients against each other for the same shippers — so we take one forwarder per lane-region, two at a time. Two openings this quarter.' },
      faq: { eyebrow: 'Questions · 常见问题', title: 'Straight answers.', items: [{ q: 'We already have a sales team.', a: 'They close. We fill the top of the funnel with warm importers who already know you — better leads, not more cold ones.' }, { q: 'Our clients aren’t on LinkedIn.', a: 'The people who choose forwarders — importers’ ops leads and DTC founders — are. It’s where they shortlist before asking for a rate.' }, { q: 'Freight’s too commoditized for content.', a: 'Exactly why this works: a visible, trusted forwarder stops being a commodity — and stops competing on price alone.' }, { q: 'We don’t have time for LinkedIn.', a: 'You won’t touch it. We write, publish, comment, and prospect; you approve in minutes.' }, { q: 'Will it work for our lane?', a: 'We target your exact lanes and back it with the guarantee. No 30 conversations, no cost.' }] },
      final: { eyebrow: 'Free audit · 免费诊断', title: 'See what importers see when they look you up.', sub: 'Start with a free LinkedIn audit — we’ll mystery-shop your company as a Western importer and show you exactly what they see today, and the pipeline you’re missing.' },
    },
    zh: {
      magnetId: '02',
      card: { label: '与此同时，在领英上……', n1: 'M. Rivera · DTC 品牌，美国', m1: '需要一家可靠货代走 深圳→洛杉矶，每月 2×40HQ。很喜欢你那篇避开 Q4 拥堵的帖子——能报个价吗？', n2: '你 · 当天', m2: '当然——这正是我们的核心航线。报价与时效在下方，另附我们如何绕开 Q4 积压……', foot: '询价 · 管道阶段：温热' },
      hero: { eyebrow: '专为货运代理与无船承运人打造 · 深圳 / 宁波 / 上海', t1: '别再对着空气报价。', t2: '开始拿下<em>长期回头货主。</em>', sub: '西方进口商选的是他们信任的货代，而非最低价——而且在向你索要报价之前，就已在领英上做出判断。我们在 90 天内为你搭建一条「直客、回头、高毛利」的进口商管道。你不用碰领英，只管接对话。', ctaPrimary: '免费领取领英诊断', ctaSecondary: '查看方案', trust1: '本季度仅剩两个名额', trust2: '90 天 30 次高质量进口商对话 —— 保证达成' },
      problem: { eyebrow: '问题', title: '赢了价格，输了利润。', body: ['你报价快、履约稳、价格也有竞争力。但那个同时对比五家货代的进口商，一个月后没有任何理由记得你。', '当有人把货主介绍给你，他的第一步是上领英查你。没有存在感、没有背书——于是他选了那个「看起来更成熟」的货代。', '价格战是一场向下的竞赛。唯有信任，才能让你守住运价。'] },
      cost: { eyebrow: '代价', title: '沉默，正让你付出什么。', items: [{ title: '从未拿下的长期货主', body: '本可成为稳定、高毛利货量的合作，最终只做成了一票。' }, { title: '被纯比价蚕食的利润', body: '当买家只能靠报价判断你，他每一次都会选最低价。' }, { title: '查过你便离开的转介绍', body: '一次热情的引荐，在对方看到空白主页的那一刻冷却。' }] },
      offer: {
        eyebrow: '方案', name: '直客货代引擎', tagline: '把领英变成一本「长期进口商客户名册」所需的一切——由我们为你搭建并运营。', sub: '以下是全部内容，并按「单独购买」的市场价标注价值：',
        stack: [
          { item: '按航线定位的账号 + 公司主页重建——让你成为「深圳→美国专线专家」，而非普通货代', value: '¥5,800' },
          { item: '每月 400 个精选进口商与电商决策者，按你的航线精准锁定', value: '¥4,000 / 月' },
          { item: '每月 12 篇代笔领英内容 + 200 条战略评论', value: '¥9,000 / 月' },
          { item: '全流程代运营外呼——个性化消息，开启真实的询价对话', value: '¥8,000 / 月' },
          { item: '实时管道看板 + CRM 搭建——每个货主从冷、到温、到成交全程可见', value: '¥2,800' },
          { item: '每周与资深操盘手的策略沟通', value: '¥6,000 / 月' },
          { item: '赠品——「让进口商主动私信你的 12 篇帖子」内容日历', value: '¥1,200', bonus: true },
          { item: '赠品——按航线定制的外呼话术包（深圳 / 宁波 / 上海 → 美 / 欧）', value: '¥1,800', bonus: true },
          { item: '赠品——进口商异议手册', value: '¥1,200', bonus: true },
        ],
        totalLabel: '真实市场价值', totalRecurring: '¥27,000 / 月', totalOnce: '+ ¥12,800 启动费与赠品', priceLabel: '你的投入', price: '¥6,000 / 月 起', setupNote: '本季度名额启动费（¥8,400）全免。你的管道赢了，我们才算赢。', cta: '锁定名额 —— 先做免费诊断',
      },
      guarantee: { eyebrow: '保证', title: '30 次对话保证。', body: '90 天内 30 次高质量进口商对话——否则第 4 个月免费。到第 6 个月仍未达标？全额退款。你唯一的风险，是此刻正在流失的那些订单。' },
      scarcity: { eyebrow: '名额', title: '同一时间两家客户。每个航线区域只服务一家货代。', body: '我们绝不让自己的客户为同一批货主互相厮杀——因此每个航线区域只接一家货代，同时最多两家。本季度仅剩两个名额。' },
      faq: { eyebrow: '常见问题', title: '直接的答案。', items: [{ q: '我们已经有销售团队。', a: '他们负责成交，我们负责填满漏斗顶端——送来已经认识你的温热进口商，是更好的线索，而非更多的冷线索。' }, { q: '我们的客户不用领英。', a: '真正「选择货代」的人——进口商的运营负责人、DTC 品牌创始人——都在用。那正是他们在索要报价前筛选名单的地方。' }, { q: '货代太同质化，做内容有用吗？', a: '这正是关键：一个可见、可信的货代，才能跳出同质化、不再只靠价格竞争。' }, { q: '我们没时间搞领英。', a: '你不用碰。撰写、发布、评论、外呼都由我们完成；你几分钟确认，然后接对话。' }, { q: '这对我们的航线有用吗？', a: '我们按你的具体航线精准锁定，并以保证兜底。没有 30 次对话，就不收费。' }] },
      final: { eyebrow: '免费诊断', title: '看看进口商查你时，看到的是什么。', sub: '从一次免费领英诊断开始——我们会以西方进口商的视角「暗访」你的公司，让你看到他们今天眼中的你，以及你正在错过的客户管道。' },
    },
  },

  // ───────────────────────── SOFTWARE / SAAS ─────────────────────────
  software: {
    en: {
      magnetId: '03',
      card: { label: 'Meanwhile, on LinkedIn…', n1: 'K. Osei · Ops Lead, DTC brand', m1: 'Been following your posts on 3PL integrations — we’re evaluating tools for our 200-SKU catalog. Can we see a demo?', n2: 'You · same day', m2: 'For sure — grabbing you a slot this week. Here’s a 2-min teardown of your current setup so the demo’s tailored…', foot: 'Demo requested · pipeline stage: warm' },
      hero: { eyebrow: 'For supply-chain & e-commerce SaaS · 深圳 / 杭州', t1: 'Your product sells itself —', t2: 'if buyers ever <em>booked the demo.</em>', sub: 'Supply-chain and e-commerce decision-makers vet tools on LinkedIn long before they book a call. We turn your founder’s profile into a demo-booking machine — content, presence, and outbound, done for you — so qualified buyers land on your calendar already warm.', gloss: '供应链与电商决策者，在预约演示前，早已在领英上研究工具。', ctaPrimary: 'Get My Free LinkedIn Audit', ctaSecondary: 'See the offer', trust1: 'Two openings this quarter', trust2: '30 qualified buyer conversations in 90 days — guaranteed' },
      problem: { eyebrow: 'The problem · 问题', title: 'Great product. Empty demo calendar.', body: ['Your software is better than the tool they’re using. But they’ll never switch to a product they’ve never heard of, from a company with no visible track record.', 'B2B buyers self-educate on LinkedIn long before they talk to sales. If you’re not in that feed, you’re not on the shortlist.', 'Ads rent attention and stop the moment you stop paying. A trusted presence compounds.'] },
      cost: { eyebrow: 'The cost · 代价', title: 'What invisibility is costing you.', items: [{ title: 'Demos that never got booked', body: 'Buyers who would have loved the product never learned it existed.' }, { title: 'Deals lost to a noisier competitor', body: 'A weaker tool wins because its founder shows up in the feed and you don’t.' }, { title: 'CAC you overpay on ads', body: 'Paying for every click, when organic trust could fill the same pipeline.' }] },
      offer: {
        eyebrow: 'The offer · 方案', name: 'The Demo-Calendar Engine', tagline: 'Everything it takes to turn your founder’s LinkedIn into a full demo calendar — built and run for you.', sub: 'Here’s exactly what’s included, priced as if you bought each piece on its own:',
        stack: [
          { item: 'Founder + company-page positioning rebuild — you become the category’s obvious choice', value: '¥5,800' },
          { item: '400 hand-picked ICP buyers (ops leads, founders, supply-chain managers) every month', value: '¥4,000 / mo' },
          { item: '12 founder-voice posts + 200 strategic comments every month', value: '¥9,000 / mo' },
          { item: 'Full done-for-you outbound that books demos on your calendar', value: '¥8,000 / mo' },
          { item: 'Live pipeline dashboard — every buyer tracked lead → demo → deal', value: '¥2,800' },
          { item: 'Weekly growth-strategy call with a senior operator', value: '¥6,000 / mo' },
          { item: 'Bonus — “The Demo-Calendar Teardown” playbook', value: '¥1,200', bonus: true },
          { item: 'Bonus — Founder content swipe file (hooks that convert operators)', value: '¥1,800', bonus: true },
          { item: 'Bonus — The Demo No-Show Playbook', value: '¥1,200', bonus: true },
        ],
        totalLabel: 'Total real-world value', totalRecurring: '¥27,000 / month', totalOnce: '+ ¥12,800 in setup & bonuses', priceLabel: 'Your investment', price: 'From ¥6,000 / month', setupNote: 'Setup fee (¥8,400) waived for this quarter’s opening. We only win when your calendar fills.', cta: 'Claim an opening — free audit first',
      },
      guarantee: GUAR_EN,
      scarcity: { eyebrow: 'Availability · 名额', title: 'Two clients at a time. One SaaS per category.', body: 'We never put competing tools in front of the same buyers — so we take one SaaS per category, two at a time. Two openings this quarter.' },
      faq: { eyebrow: 'Questions · 常见问题', title: 'Straight answers.', items: [{ q: 'We run paid ads already.', a: 'Ads rent attention; presence builds it. We make the organic engine that lowers your blended CAC and warms buyers before they click anything.' }, { q: 'Our founder has no time to post.', a: 'That’s the service. We ghost-write in the founder’s voice, you approve in minutes, we run the outreach and comments.' }, { q: 'Is LinkedIn right for our niche?', a: 'If your buyers are operators, ops leads, or founders in commerce and supply chain — yes, they live there.' }, { q: 'We’re early / pre-scale.', a: 'Even better — this is how you build the trust and pipeline that ads can’t rent, before you burn budget.' }, { q: 'Will it work for our ICP?', a: 'We target your exact ICP and back it with the guarantee. No 30 conversations, no cost.' }] },
      final: { eyebrow: 'Free audit · 免费诊断', title: 'See how a buyer sizes you up on LinkedIn.', sub: 'Start with a free LinkedIn audit — we’ll review your founder + company presence the way a target buyer would, and map the demo pipeline you’re missing.' },
    },
    zh: {
      magnetId: '03',
      card: { label: '与此同时，在领英上……', n1: 'K. Osei · 运营负责人，DTC 品牌', m1: '一直在看你关于 3PL 集成的帖子——我们在为 200 个 SKU 的目录选型工具，能看个 Demo 吗？', n2: '你 · 当天', m2: '当然——这周给你安排一个时段。先附一份对你现有配置的 2 分钟拆解，好让 Demo 更贴合你……', foot: 'Demo 申请 · 管道阶段：温热' },
      hero: { eyebrow: '专为供应链与电商软件（SaaS）打造 · 深圳 / 杭州', t1: '你的产品会自己说话——', t2: '前提是买家<em>预约了 Demo。</em>', sub: '供应链与电商的决策者，早在预约通话前，就已在领英上研究工具。我们把创始人的领英主页变成一台「Demo 预约机」——内容、形象、外呼全程代运营——让合格买家温热地落到你的日程上。', ctaPrimary: '免费领取领英诊断', ctaSecondary: '查看方案', trust1: '本季度仅剩两个名额', trust2: '90 天 30 次高质量买家对话 —— 保证达成' },
      problem: { eyebrow: '问题', title: '产品很好，Demo 日历却空着。', body: ['你的软件比他们正在用的更好。但他们不会切换到一个从未听过、公司也毫无可见履历的产品。', 'B2B 买家在与销售交谈之前，早已在领英自我教育。你若不在那条信息流里，就进不了候选名单。', '广告是「租」注意力，你一停投放它就停；而可信的存在感会不断复利。'] },
      cost: { eyebrow: '代价', title: '「隐形」正让你付出什么。', items: [{ title: '从未被预约的演示', body: '本会爱上你产品的买家，根本不知道它的存在。' }, { title: '败给更「吵」对手的订单', body: '更弱的工具赢了，只因它的创始人出现在信息流里，而你没有。' }, { title: '在广告上多付的获客成本', body: '为每一次点击付费——而自然的信任本可以填满同样的管道。' }] },
      offer: {
        eyebrow: '方案', name: 'Demo 日历引擎', tagline: '把创始人的领英变成一份排满的 Demo 日历所需的一切——由我们搭建并运营。', sub: '以下是全部内容，并按「单独购买」的市场价标注价值：',
        stack: [
          { item: '创始人 + 公司主页定位重建——让你成为品类里「理所当然的选择」', value: '¥5,800' },
          { item: '每月 400 个精选 ICP 买家（运营负责人、创始人、供应链经理）', value: '¥4,000 / 月' },
          { item: '每月 12 篇「创始人口吻」内容 + 200 条战略评论', value: '¥9,000 / 月' },
          { item: '全流程代运营外呼——直接在你日程上约到 Demo', value: '¥8,000 / 月' },
          { item: '实时管道看板——每个买家从线索、到 Demo、到成交全程可见', value: '¥2,800' },
          { item: '每周与资深操盘手的增长策略沟通', value: '¥6,000 / 月' },
          { item: '赠品——《Demo 日历拆解报告》', value: '¥1,200', bonus: true },
          { item: '赠品——创始人内容话术库（打动运营者的开场钩子）', value: '¥1,800', bonus: true },
          { item: '赠品——Demo 爽约挽回手册', value: '¥1,200', bonus: true },
        ],
        totalLabel: '真实市场价值', totalRecurring: '¥27,000 / 月', totalOnce: '+ ¥12,800 启动费与赠品', priceLabel: '你的投入', price: '¥6,000 / 月 起', setupNote: '本季度名额启动费（¥8,400）全免。你的日历排满了，我们才算赢。', cta: '锁定名额 —— 先做免费诊断',
      },
      guarantee: GUAR_ZH,
      scarcity: { eyebrow: '名额', title: '同一时间两家客户。每个品类只服务一家 SaaS。', body: '我们绝不把互相竞争的工具推到同一批买家面前——因此每个品类只接一家 SaaS，同时最多两家。本季度仅剩两个名额。' },
      faq: { eyebrow: '常见问题', title: '直接的答案。', items: [{ q: '我们已经在投广告了。', a: '广告是「租」注意力，存在感是「建」注意力。我们打造自然增长引擎，降低你的综合获客成本，并在买家点击之前就预热他们。' }, { q: '创始人没时间发内容。', a: '这正是我们的服务。我们以创始人口吻代笔，你几分钟确认，外呼与评论我们全程运营。' }, { q: '领英适合我们这个细分吗？', a: '如果你的买家是电商与供应链的运营者、运营负责人或创始人——是的，他们就在那里。' }, { q: '我们还很早期。', a: '那更合适——在你烧预算之前，正是用这套方法建立广告租不来的信任与管道。' }, { q: '这对我们的 ICP 有用吗？', a: '我们按你的精确 ICP 锁定，并以保证兜底。没有 30 次对话，就不收费。' }] },
      final: { eyebrow: '免费诊断', title: '看看买家在领英上如何打量你。', sub: '从一次免费领英诊断开始——我们会以目标买家的视角审视你的创始人与公司形象，并为你梳理正在错过的 Demo 管道。' },
    },
  },

  // ───────────────────────── FACTORIES ─────────────────────────
  factories: {
    en: {
      magnetId: '04',
      card: { label: 'Meanwhile, on LinkedIn…', n1: 'S. Klein · Brand founder, EU', m1: 'Sourcing a long-term factory for stainless kitchenware, ~50k units/yr. Your posts on your QC line stood out — are you the actual manufacturer?', n2: 'You · same day', m2: 'Yes — direct factory, not a trader. BSCI + in-house QC. Here’s a virtual line tour and sample terms…', foot: 'RFQ started · pipeline stage: warm' },
      hero: { eyebrow: 'For factories & manufacturers · 东莞 / 佛山 / 义乌', t1: 'You make what the world buys.', t2: 'So why does the <em>middleman get paid?</em>', sub: 'Western brands vet manufacturers on LinkedIn before they send an RFQ — and they find the trading company, not your factory. We make you the manufacturer they discover, trust, and reorder from. Direct. Done for you. In 90 days.', gloss: '西方品牌在发出询价前，先在领英考察工厂——而他们找到的是贸易商，不是你的工厂。', ctaPrimary: 'Get My Free LinkedIn Audit', ctaSecondary: 'See the offer', trust1: 'Two openings this quarter', trust2: '30 qualified buyer conversations in 90 days — guaranteed' },
      problem: { eyebrow: 'The problem · 问题', title: 'The middleman in front of you took your margin.', body: ['You run the line. You hold the certifications. You take the quality risk. And a trading company with a laptop and a LinkedIn profile sits between you and the buyer — taking the margin.', 'When a Western brand looks for a supplier, they search LinkedIn. They find the trader, not the factory. You never even know the RFQ existed.', 'Direct relationships are worth more than any single order — and they start with being findable.'] },
      cost: { eyebrow: 'The cost · 代价', title: 'What staying hidden is costing you.', items: [{ title: 'Direct buyers routed through a middleman', body: 'The margin a trader takes is margin that should have been yours.' }, { title: 'RFQs that never reached you', body: 'Brands sourcing your exact category found a profile — just not yours.' }, { title: 'Reorders lost to a “safer”-looking supplier', body: 'Buyers stick with whoever looks established. Right now, that’s not you.' }] },
      offer: {
        eyebrow: 'The offer · 方案', name: 'The Direct-Buyer Engine', tagline: 'Everything it takes to turn LinkedIn into a book of direct brand & importer clients — built and run for you.', sub: 'Here’s exactly what’s included, priced as if you bought each piece on its own:',
        stack: [
          { item: '“Auditable factory” profile + company-page rebuild — the 8 credibility signals brands look for', value: '¥5,800' },
          { item: '400 hand-picked brand & importer buyers in your category every month', value: '¥4,000 / mo' },
          { item: '12 proof-driven posts (line, QC, certs) + 200 strategic comments every month', value: '¥9,000 / mo' },
          { item: 'Full done-for-you outbound — messages that start real RFQ conversations', value: '¥8,000 / mo' },
          { item: 'Live pipeline dashboard — every buyer tracked inquiry → sample → PO', value: '¥2,800' },
          { item: 'Weekly strategy call with a senior operator', value: '¥6,000 / mo' },
          { item: 'Bonus — “The Auditable Factory Profile Blueprint”', value: '¥1,200', bonus: true },
          { item: 'Bonus — Category buyer outreach script pack', value: '¥1,800', bonus: true },
          { item: 'Bonus — The RFQ-to-Reorder Playbook', value: '¥1,200', bonus: true },
        ],
        totalLabel: 'Total real-world value', totalRecurring: '¥27,000 / month', totalOnce: '+ ¥12,800 in setup & bonuses', priceLabel: 'Your investment', price: 'From ¥6,000 / month', setupNote: 'Setup fee (¥8,400) waived for this quarter’s opening. We only win when your orders do.', cta: 'Claim an opening — free audit first',
      },
      guarantee: GUAR_EN,
      scarcity: { eyebrow: 'Availability · 名额', title: 'Two clients at a time. One factory per product category.', body: 'We never pit competing factories in front of the same brands — so we take one factory per product category, two at a time. Two openings this quarter.' },
      faq: { eyebrow: 'Questions · 常见问题', title: 'Straight answers.', items: [{ q: 'We sell through trading companies — won’t this upset them?', a: 'This builds a direct channel alongside your existing one — higher-margin relationships you own, on your terms.' }, { q: 'We’re a factory, not marketers.', a: 'Exactly why it’s done-for-you. You keep making product; we make you findable and trusted.' }, { q: 'Our buyers speak English; we don’t.', a: 'We run the English-language presence and outreach for you, and hand you warm, qualified conversations.' }, { q: 'Isn’t our category too commoditized?', a: 'That’s the point — an auditable, visible factory escapes the commodity trap and wins direct.' }, { q: 'Will it work for our category?', a: 'We target buyers in your exact category and back it with the guarantee. No 30 conversations, no cost.' }] },
      final: { eyebrow: 'Free audit · 免费诊断', title: 'See what a brand finds when it searches your category.', sub: 'Start with a free LinkedIn audit — we’ll show you what a Western brand sees when they source your category today, and the direct pipeline you’re missing.' },
    },
    zh: {
      magnetId: '04',
      card: { label: '与此同时，在领英上……', n1: 'S. Klein · 品牌创始人，欧洲', m1: '在找一家长期合作的不锈钢厨具工厂，年约 5 万件。你关于品控产线的帖子很打动我——你们是真正的制造商吗？', n2: '你 · 当天', m2: '是的——直营工厂，不是贸易商。BSCI + 自有品控。附上产线云参观与打样条款……', foot: '询价开始 · 管道阶段：温热' },
      hero: { eyebrow: '专为工厂与制造商打造 · 东莞 / 佛山 / 义乌', t1: '世界买的东西，是你造的。', t2: '凭什么<em>钱让中间商赚了？</em>', sub: '西方品牌在发出询价前，先在领英考察工厂——而他们找到的是贸易商，不是你的工厂。我们让你成为他们发现、信任并反复下单的那家制造商。直客、代运营、90 天见效。', ctaPrimary: '免费领取领英诊断', ctaSecondary: '查看方案', trust1: '本季度仅剩两个名额', trust2: '90 天 30 次高质量买家对话 —— 保证达成' },
      problem: { eyebrow: '问题', title: '你面前的中间商，拿走了你的利润。', body: ['你管着产线，握着认证，承担着品质风险。而一家只有一台笔记本和一个领英主页的贸易公司，横在你和买家之间——赚走了利润。', '当西方品牌寻找供应商时，他们上领英搜索。找到的是贸易商，不是工厂。你甚至从不知道那份询价存在过。', '直接的关系，比任何单笔订单都更有价值——而它始于「被找到」。'] },
      cost: { eyebrow: '代价', title: '继续「隐身」，正让你付出什么。', items: [{ title: '被中间商截流的直接买家', body: '贸易商赚走的利润，本该是你的。' }, { title: '从未抵达你的询价', body: '正在采购你所在品类的品牌找到了一个主页——只是不是你的。' }, { title: '输给「更靠谱」供应商的返单', body: '买家倾向于选看起来更成熟的一方。而现在，那一方不是你。' }] },
      offer: {
        eyebrow: '方案', name: '直客工厂引擎', tagline: '把领英变成一本「直客品牌与进口商名册」所需的一切——由我们搭建并运营。', sub: '以下是全部内容，并按「单独购买」的市场价标注价值：',
        stack: [
          { item: '「可验厂」账号 + 公司主页重建——品牌寻找的 8 个可信度信号', value: '¥5,800' },
          { item: '每月 400 个你所在品类的精选品牌与进口商买家', value: '¥4,000 / 月' },
          { item: '每月 12 篇「有实证」的内容（产线、品控、认证）+ 200 条战略评论', value: '¥9,000 / 月' },
          { item: '全流程代运营外呼——开启真实询价（RFQ）对话的消息', value: '¥8,000 / 月' },
          { item: '实时管道看板——每个买家从询盘、到打样、到下单全程可见', value: '¥2,800' },
          { item: '每周与资深操盘手的策略沟通', value: '¥6,000 / 月' },
          { item: '赠品——《「可验厂」工厂主页蓝图》', value: '¥1,200', bonus: true },
          { item: '赠品——品类买家外呼话术包', value: '¥1,800', bonus: true },
          { item: '赠品——「询价到返单」手册', value: '¥1,200', bonus: true },
        ],
        totalLabel: '真实市场价值', totalRecurring: '¥27,000 / 月', totalOnce: '+ ¥12,800 启动费与赠品', priceLabel: '你的投入', price: '¥6,000 / 月 起', setupNote: '本季度名额启动费（¥8,400）全免。你的订单赢了，我们才算赢。', cta: '锁定名额 —— 先做免费诊断',
      },
      guarantee: GUAR_ZH,
      scarcity: { eyebrow: '名额', title: '同一时间两家客户。每个产品品类只服务一家工厂。', body: '我们绝不让互相竞争的工厂出现在同一批品牌面前——因此每个产品品类只接一家工厂，同时最多两家。本季度仅剩两个名额。' },
      faq: { eyebrow: '常见问题', title: '直接的答案。', items: [{ q: '我们通过贸易公司出货，这会得罪他们吗？', a: '这是在你现有渠道之外，另建一条直接渠道——由你掌控、条件由你定的高毛利关系。' }, { q: '我们是工厂，不是做营销的。', a: '正因如此，这是「全托管」服务。你专心生产，我们让你被找到、被信任。' }, { q: '买家讲英文，我们不会。', a: '英文的形象与触达由我们代运营，最终把温热、合格的对话交到你手上。' }, { q: '我们这个品类太同质化了吧？', a: '这正是关键——一个可验证、可见的工厂，能跳出同质化陷阱、赢得直客。' }, { q: '这对我们的品类有用吗？', a: '我们锁定你所在品类的买家，并以保证兜底。没有 30 次对话，就不收费。' }] },
      final: { eyebrow: '免费诊断', title: '看看品牌搜索你的品类时，找到的是什么。', sub: '从一次免费领英诊断开始——我们会让你看到：一个西方品牌今天采购你的品类时看到的是什么，以及你正在错过的直接客户管道。' },
    },
  },
};
