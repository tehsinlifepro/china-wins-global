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
      hero: { eyebrow: 'For freight forwarders & NVOCCs · 深圳 / 宁波 / 上海', t1: 'Stop quoting into the void.', t2: 'Start booking <em>repeat shippers.</em>', sub: 'The importer about to compare five forwarders trusts the one they can find and vet, not the cheapest line. Before they ask your rate, they look you up. You do not have to take our word for it: we will show you free exactly what they find when they search your company today. Then we build you a pipeline of direct, repeat importer clients in 90 days. You never touch LinkedIn. You just take the conversations.', gloss: '进口商向你要价之前，早已在网上查过你。先免费看看他查到的是什么。', ctaPrimary: 'See what importers find when they look you up', ctaSecondary: 'See the offer', trust1: 'Two openings this quarter', trust2: '30 qualified importer conversations in 90 days, guaranteed' },
      problem: { eyebrow: 'The problem · 问题', title: 'You win on price and lose on margin.', body: ['You quote fast, you are reliable, your rates are sharp. But the importer comparing you to five other forwarders has no reason to remember you a month later.', 'When a shipper is referred to you, their first move is to look you up. No presence, no proof, so they go with the forwarder who simply looks more established. Want to see what they see? That is the free audit below, and it is the whole point.', 'A price war is a race to the bottom. Trust is what lets you hold your rate.'] },
      cost: { eyebrow: 'The cost · 代价', title: 'What staying invisible is costing you.', items: [{ title: 'Repeat shippers you never landed', body: 'One-off bookings that could have been a book of steady, high-margin volume.' }, { title: 'Margin bled to price-only bidding', body: 'With nothing but a quote to judge you on, buyers pick the cheapest line every time.' }, { title: 'The referral that went cold the moment they looked', body: 'A warm introduction lost the instant they found an empty profile.' }] },
      offer: {
        eyebrow: 'The offer · 方案', name: 'The Direct-Shipper Engine', tagline: 'Everything it takes to turn LinkedIn into a book of repeat importer clients, built and run for you.', sub: 'Here’s exactly what’s included, priced as if you bought each piece on its own:',
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
        totalLabel: 'Total real-world value', totalRecurring: '¥27,000 / month', totalOnce: '+ ¥12,800 in setup & bonuses', priceLabel: 'Your investment', price: 'From ¥6,000 / month', setupNote: 'Setup fee (¥8,400) waived for this quarter’s opening. We only win when your pipeline does.', cta: 'Claim an opening: free audit first',
      },
      guarantee: { eyebrow: 'The guarantee · 保证', title: 'The 30-Conversation Guarantee.', body: '30 qualified importer quote conversations in 90 days, the start of your repeat book, or Month 4 is on us. Still not at 30 by Month 6? Every fee back. Conversations are what turn into booked lanes and held margin, and they are the one thing we can put our fee behind. The only thing you risk is the lanes you are not booking right now.' },
      scarcity: { eyebrow: 'Availability · 名额', title: 'Two clients at a time. One forwarder per lane-region.', body: 'We never pit our own clients against each other for the same shippers, so we take one forwarder per lane-region, two at a time. Two openings this quarter.' },
      faq: { eyebrow: 'Questions · 常见问题', title: 'Straight answers.', items: [{ q: 'We already have a sales team.', a: 'They close. We fill the top of the funnel with warm importers who already know you: better leads, not more cold ones.' }, { q: 'Our clients aren’t on LinkedIn.', a: 'Your current clients may not be. The Western importers and DTC founders you want next are, and it is where they shortlist forwarders before asking a rate. Not sure? The free audit shows you who is searching your lane.' }, { q: 'Freight’s too commoditized for content.', a: 'Exactly why this works: a visible, trusted forwarder stops being a commodity, and stops competing on price alone.' }, { q: 'We don’t have time for LinkedIn.', a: 'You won’t touch it. We write, publish, comment, and prospect. You approve in minutes, then take the conversations.' }, { q: 'Will it work for our lane?', a: 'We target your exact lanes and back it with the guarantee. No 30 conversations, no cost.' }, { q: 'Never heard of you. Why should we trust a done-for-you provider?', a: 'Fair: you should not trust anyone in this feed on their word, so we do not ask you to. Before you pay, we mystery-shop your own company and show you exactly what importers find when they search your lane today. We work alongside easeamazon and Sellerexa as go-to-market partners in the cross-border ecosystem (proximity, not borrowed results). And the guarantee means you risk nothing but the lanes you are already losing.' }] },
      final: { eyebrow: 'Free audit · 免费诊断', title: 'See what importers see when they look you up.', sub: 'Start with a free LinkedIn audit. We mystery-shop your company as a Western importer and show you exactly what they see today, and the pipeline you are missing.' },
    },
    zh: {
      magnetId: '02',
      card: { label: '与此同时，在领英上……', n1: 'M. Rivera · DTC 品牌，美国', m1: '需要一家可靠货代走 深圳→洛杉矶，每月 2×40HQ。很喜欢你那篇避开 Q4 拥堵的帖子——能报个价吗？', n2: '你 · 当天', m2: '当然——这正是我们的核心航线。报价与时效在下方，另附我们如何绕开 Q4 积压……', foot: '询价 · 管道阶段：温热' },
      hero: { eyebrow: '专为货运代理与无船承运人打造 · 深圳 / 宁波 / 上海', t1: '别再对着空气报价。', t2: '开始拿下<em>长期回头货主。</em>', sub: '那个正在对比五家货代的进口商，信的是他查得到、看得清的那一家，而非最低价。在向你要价之前，他会先查你。这一点你不用听我们说：我们免费让你看到，他今天搜索你公司时究竟看到了什么。然后，我们在 90 天内为你搭一条「直客、回头、高毛利」的进口商管道。你从不碰领英，只管接对话。', ctaPrimary: '看看进口商查你时看到了什么', ctaSecondary: '查看方案', trust1: '本季度仅剩两个名额', trust2: '90 天 30 次高质量进口商对话，保证达成' },
      problem: { eyebrow: '问题', title: '赢了价格，输了利润。', body: ['你报价快、履约稳、价格也有竞争力。但那个同时对比五家货代的进口商，一个月后没有任何理由记得你。', '有人把货主介绍给你，他的第一步就是查你。没有存在感、没有背书，于是他选了那个「看起来更成熟」的货代。想知道他看到的是什么？下方那次免费诊断，正是为此而设。', '价格战是一场向下的竞赛。唯有信任，才能让你守住运价。'] },
      cost: { eyebrow: '代价', title: '继续「隐形」，正让你付出什么。', items: [{ title: '从未拿下的长期回头货主', body: '本可成为稳定、高毛利货量的合作，最终只做成了一票。' }, { title: '被纯比价蚕食的利润', body: '当买家只能靠报价判断你，他每一次都会选最低价。' }, { title: '查过你便离开的转介绍', body: '一次热情的引荐，在对方看到空白主页的那一刻冷却。' }] },
      offer: {
        eyebrow: '方案', name: '直客货代引擎', tagline: '把领英变成一本「长期进口商客户名册」所需的一切，由我们为你搭建并运营。', sub: '以下是全部内容，并按「单独购买」的市场价标注价值：',
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
        totalLabel: '真实市场价值', totalRecurring: '¥27,000 / 月', totalOnce: '+ ¥12,800 启动费与赠品', priceLabel: '你的投入', price: '¥6,000 / 月 起', setupNote: '本季度名额启动费（¥8,400）全免。你的管道赢了，我们才算赢。', cta: '锁定名额：先做免费诊断',
      },
      guarantee: { eyebrow: '保证', title: '30 次对话保证。', body: '90 天内 30 次高质量进口商询价对话，也就是你回头货主名册的起点，否则第 4 个月免费。到第 6 个月仍未达标？全额退款。对话，正是转化为已订舱航线与守住毛利的那一步，也是我们唯一敢押上服务费的东西。你唯一的风险，是此刻正在流失的那些订单。' },
      scarcity: { eyebrow: '名额', title: '同一时间两家客户。每个航线区域只服务一家货代。', body: '我们绝不让自己的客户为同一批货主互相厮杀，因此每个航线区域只接一家货代，同时最多两家。本季度仅剩两个名额。' },
      faq: { eyebrow: '常见问题', title: '直接的答案。', items: [{ q: '我们已经有销售团队。', a: '他们负责成交，我们负责填满漏斗顶端：送来已经认识你的温热进口商，是更好的线索，而非更多的冷线索。' }, { q: '我们的客户不用领英。', a: '你现在的客户也许不用。但你接下来想要的西方进口商与 DTC 创始人在用，那正是他们在要价之前筛选货代的地方。不确定？免费诊断会让你看到谁在搜索你的航线。' }, { q: '货代太同质化，做内容有用吗？', a: '这正是关键：一个可见、可信的货代，才能跳出同质化、不再只靠价格竞争。' }, { q: '我们没时间搞领英。', a: '你不用碰。撰写、发布、评论、外呼都由我们完成；你几分钟确认，然后接对话。' }, { q: '这对我们的航线有用吗？', a: '我们按你的具体航线精准锁定，并以保证兜底。没有 30 次对话，就不收费。' }, { q: '没听说过你们，凭什么信任一家代运营方？', a: '问得好：在这条信息流里，你不该只凭一面之词信任任何人，所以我们也不要求你这样做。在你付费之前，我们会以西方进口商的视角「暗访」你自己的公司，让你看到他今天搜索你所在航线时究竟看到了什么。我们与 easeamazon、Sellerexa 作为共同进入市场的伙伴同处跨境生态（这只是「同源」的接近性，而非借来的成绩）。而保证意味着：你唯一承担的风险，就是你此刻正在流失的那些航线。' }] },
      final: { eyebrow: '免费诊断', title: '看看进口商查你时，看到的是什么。', sub: '从一次免费领英诊断开始：我们会以西方进口商的视角「暗访」你的公司，让你看到他们今天眼中的你，以及你正在错过的客户管道。' },
    },
  },

  // ───────────────────────── SOFTWARE / SAAS ─────────────────────────
  software: {
    en: {
      magnetId: '03',
      card: { label: 'Meanwhile, on LinkedIn…', n1: 'K. Osei · Ops Lead, DTC brand', m1: 'Been following your posts on 3PL integrations — we’re evaluating tools for our 200-SKU catalog. Can we see a demo?', n2: 'You · same day', m2: 'For sure — grabbing you a slot this week. Here’s a 2-min teardown of your current setup so the demo’s tailored…', foot: 'Demo requested · pipeline stage: warm' },
      hero: { eyebrow: 'For supply-chain & e-commerce SaaS · 深圳 / 杭州', t1: 'Your product sells itself -', t2: 'if buyers ever <em>booked the demo.</em>', sub: 'Supply-chain and e-commerce decision-makers vet tools on LinkedIn long before they book a call. We turn your founder’s profile into a booked-demo calendar (content, presence, and outbound, done for you) in the founder’s own voice and minutes of their time - so qualified buyers land already warm.', gloss: '供应链与电商决策者，在预约演示前，早已在领英上研究工具。', ctaPrimary: 'Get My Free LinkedIn Audit', ctaSecondary: 'See the offer', trust1: 'Two openings this quarter · alongside easeamazon & Sellerexa', trust2: '30 qualified demo conversations in 90 days - guaranteed' },
      problem: { eyebrow: 'The problem · 问题', title: 'Great product. Empty demo calendar.', body: ['Your software is better than the tool they’re using. But they’ll never switch to a product they’ve never heard of, from a company with no visible track record.', 'B2B buyers self-educate on LinkedIn long before they talk to sales. If you’re not in that feed, you’re not on the shortlist.', 'Ads rent attention and stop the moment you stop paying. A trusted presence compounds.'] },
      cost: { eyebrow: 'The cost · 代价', title: 'The demos you’re losing while you stay invisible.', items: [{ title: 'Demos that never got booked', body: 'Buyers who would have loved the product never learned you existed.' }, { title: 'Deals lost to a noisier competitor', body: 'A weaker tool wins because its founder shows up in the feed and you don’t.' }, { title: 'Pipeline you rent instead of own', body: 'Paying for every click, when organic trust could fill the same calendar and keep filling it after you stop.' }] },
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
      guarantee: { eyebrow: 'The guarantee · 保证', title: 'The Booked-Demo Guarantee.', body: '30 qualified demo conversations in 90 days - or Month 4 is on us. Still not at 30 by Month 6? Every fee back. A qualified demo conversation means an in-market Western buyer who books or agrees to a demo (the exact thing you track in your CRM, not a vanity “chat”). The only thing you risk is the demos you’re not winning right now.' },
      scarcity: { eyebrow: 'Availability · 名额', title: 'Two clients at a time. One SaaS per category.', body: 'We never put competing tools in front of the same buyers — so we take one SaaS per category, two at a time. Two openings this quarter.' },
      faq: { eyebrow: 'Questions · 常见问题', title: 'Straight answers.', items: [{ q: 'We run paid ads already.', a: 'Ads rent attention; presence builds it. We make the organic engine that lowers your blended CAC and warms buyers before they click anything.' }, { q: 'Our founder has no time to post.', a: 'That’s the service. We ghost-write in the founder’s voice, you approve in minutes, we run the outreach and comments.' }, { q: 'Is LinkedIn right for our niche?', a: 'If your buyers are operators, ops leads, or founders in commerce and supply chain — yes, they live there.' }, { q: 'We’re early / pre-scale.', a: 'Even better — this is how you build the trust and pipeline that ads can’t rent, before you burn budget.' }, { q: 'Will it work for the buyers we sell to?', a: 'We target your exact segment and back it with the Booked-Demo Guarantee. No 30 qualified demo conversations, no cost.' }, { q: 'Never heard of you. Why should we trust a done-for-you provider?', a: 'Fair - you shouldn’t trust anyone in this feed on their word. So we don’t ask you to: we work alongside easeamazon and Sellerexa inside the cross-border ecosystem, we show you the engine running live on a real profile before you pay, and the guarantee means you risk nothing but the demos you’re already losing.' }] },
      final: { eyebrow: 'Free audit · 免费诊断', title: 'See how a buyer sizes you up on LinkedIn.', sub: 'Start with a free LinkedIn audit: we’ll show you exactly what a target buyer sees on your founder and company today, map the demo pipeline you’re missing, and show you the engine running live on a real profile. No fee until you’ve seen it work.' },
    },
    zh: {
      magnetId: '03',
      card: { label: '与此同时，在领英上……', n1: 'K. Osei · 运营负责人，DTC 品牌', m1: '一直在看你关于 3PL 集成的帖子——我们在为 200 个 SKU 的目录选型工具，能看个 Demo 吗？', n2: '你 · 当天', m2: '当然——这周给你安排一个时段。先附一份对你现有配置的 2 分钟拆解，好让 Demo 更贴合你……', foot: 'Demo 申请 · 管道阶段：温热' },
      hero: { eyebrow: '专为供应链与电商软件（SaaS）打造 · 深圳 / 杭州', t1: '你的产品会自己说话——', t2: '前提是买家<em>预约了 Demo。</em>', sub: '供应链与电商的决策者，早在预约通话前，就已在领英上研究工具。我们把创始人的领英主页变成一份排满的 Demo 日历（内容、形象、外呼全程代运营）——以创始人本人的口吻，只占用他几分钟时间——让合格买家温热地落到你的日程上。', ctaPrimary: '免费领取领英诊断', ctaSecondary: '查看方案', trust1: '本季度仅剩两个名额 · 与 easeamazon、Sellerexa 同源', trust2: '90 天 30 次高质量 Demo 对话 —— 保证达成' },
      problem: { eyebrow: '问题', title: '产品很好，Demo 日历却空着。', body: ['你的软件比他们正在用的更好。但他们不会切换到一个从未听过、公司也毫无可见履历的产品。', 'B2B 买家在与销售交谈之前，早已在领英自我教育。你若不在那条信息流里，就进不了候选名单。', '广告是「租」注意力，你一停投放它就停；而可信的存在感会不断复利。'] },
      cost: { eyebrow: '代价', title: '你「隐形」的每一天，正在流失的 Demo。', items: [{ title: '从未被预约的演示', body: '本会爱上你产品的买家，根本不知道你的存在。' }, { title: '败给更「吵」对手的订单', body: '更弱的工具赢了，只因它的创始人出现在信息流里，而你没有。' }, { title: '你在「租」而非「拥有」的管道', body: '为每一次点击付费——而自然的信任本可以填满同样的日历，并在你停投后继续填。' }] },
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
      guarantee: { eyebrow: '保证', title: 'Demo 保证。', body: '90 天内 30 次高质量 Demo 对话——否则第 4 个月免费。到第 6 个月仍未达标？全额退款。「高质量 Demo 对话」指的是：一位在市场中的西方买家预约或同意进行 Demo（也就是你在 CRM 里追踪的那件事，而非充数的「闲聊」）。你唯一的风险，是此刻正在流失的那些 Demo。' },
      scarcity: { eyebrow: '名额', title: '同一时间两家客户。每个品类只服务一家 SaaS。', body: '我们绝不把互相竞争的工具推到同一批买家面前——因此每个品类只接一家 SaaS，同时最多两家。本季度仅剩两个名额。' },
      faq: { eyebrow: '常见问题', title: '直接的答案。', items: [{ q: '我们已经在投广告了。', a: '广告是「租」注意力，存在感是「建」注意力。我们打造自然增长引擎，降低你的综合获客成本，并在买家点击之前就预热他们。' }, { q: '创始人没时间发内容。', a: '这正是我们的服务。我们以创始人口吻代笔，你几分钟确认，外呼与评论我们全程运营。' }, { q: '领英适合我们这个细分吗？', a: '如果你的买家是电商与供应链的运营者、运营负责人或创始人——是的，他们就在那里。' }, { q: '我们还很早期。', a: '那更合适——在你烧预算之前，正是用这套方法建立广告租不来的信任与管道。' }, { q: '这对我们要卖的买家有用吗？', a: '我们按你的精确细分锁定，并以「Demo 保证」兜底。没有 30 次高质量 Demo 对话，就不收费。' }, { q: '没听说过你们，凭什么信任一家代运营方？', a: '问得好——在这条信息流里，你不该只凭一面之词信任任何人。所以我们不要求你这样做：我们在跨境生态里与 easeamazon、Sellerexa 同行，会在你付费前，让你亲眼看到引擎在真实主页上的运转，而保证意味着你唯一承担的风险，就是你此刻正在流失的那些 Demo。' }] },
      final: { eyebrow: '免费诊断', title: '看看买家在领英上如何打量你。', sub: '从一次免费领英诊断开始：我们会让你看到目标买家今天在你的创始人与公司主页上究竟看到了什么，为你梳理正在错过的 Demo 管道，并向你展示这台引擎在真实主页上的实时运转。在你亲眼看到它奏效之前，不收任何费用。' },
    },
  },

  // ───────────────────────── FACTORIES ─────────────────────────
  factories: {
    en: {
      magnetId: '04',
      card: { label: 'Meanwhile, on LinkedIn…', n1: 'S. Klein · Brand founder, EU', m1: 'Sourcing a long-term factory for stainless kitchenware, ~50k units/yr. Your posts on your QC line stood out — are you the actual manufacturer?', n2: 'You · same day', m2: 'Yes — direct factory, not a trader. BSCI + in-house QC. Here’s a virtual line tour and sample terms…', foot: 'RFQ started · pipeline stage: warm' },
      hero: { eyebrow: 'For factories & manufacturers · 东莞 / 佛山 / 义乌', t1: 'You make what the world buys.', t2: 'So why does the <em>middleman get paid?</em>', sub: 'A Western brand is sourcing your exact category this week. Before they place the order, they look you up, and the trader with a polished profile comes up, not your factory. So the order, and every reorder behind it, goes to him. We make you the factory brands find, trust, and order from directly. Done for you, in the buyer’s language, in 90 days. First, see it for yourself: we will show you free exactly what a brand finds when they search your category today.', gloss: '品牌下单前，会先查你。先免费看看：今天他们查到的，到底是不是你。', ctaPrimary: 'Show me what a brand finds when they search my category', ctaSecondary: 'See the offer', trust1: 'One factory per category · two openings this quarter', trust2: '30 real buyer conversations in 90 days: the kind that turn into samples and reorders. Guaranteed.' },
      problem: { eyebrow: 'The problem · 问题', title: 'The middleman in front of you took your margin.', body: ['You run the line. You hold the certifications. You take the quality risk. And a trading company with a laptop and a profile sits between you and the buyer, taking the margin on a product you made.', 'Here is the part that stings the most: when a brand sources your category, the RFQ reaches the trader and stops there. You never quote. You never even know the order existed. He collects, you keep waiting for the phone to ring.', 'And the first order is the small loss. The reorders, the buyer’s feedback, the next product they develop: all of it routes through him, forever. Every direct relationship you don’t own is a lifetime of margin you hand away.'] },
      cost: { eyebrow: 'The cost · 代价', title: 'What staying hidden is costing you.', items: [{ title: 'Direct buyers intercepted by a middleman', body: 'The margin a trader takes is margin that should have landed in your factory.' }, { title: 'RFQs that never reached you', body: 'Brands sourcing your exact category found a supplier this month. It just wasn’t you.' }, { title: 'Reorders lost to a “safer”-looking supplier', body: 'The reorder is where the real money is. Buyers stay with whoever looks established. Right now, that isn’t you.' }] },
      offer: {
        eyebrow: 'The offer · 方案', name: 'The Direct-Buyer Engine', tagline: 'Everything it takes to make Western brands find you, trust you, and place the order direct: built and run for you.', sub: 'Here’s exactly what’s included, priced as if you bought each piece on its own:',
        stack: [
          { item: '“Auditable factory” profile + company-page rebuild: the proof signals a Western brand checks before they trust a supplier', value: '¥5,800' },
          { item: '400 hand-picked brand & importer buyers in your exact category, every month', value: '¥4,000 / mo' },
          { item: '12 proof posts a month that show the real factory (your line, your QC, your certs) so a buyer believes you before you speak, plus 200 strategic comments', value: '¥9,000 / mo' },
          { item: 'Full done-for-you outbound: messages, in the buyer’s language, that start real RFQ conversations', value: '¥8,000 / mo' },
          { item: 'Live pipeline dashboard: every buyer tracked inquiry → sample → PO → reorder', value: '¥2,800' },
          { item: 'Weekly strategy call with a senior operator', value: '¥6,000 / mo' },
          { item: 'Bonus - “The Auditable Factory Blueprint”: the proof a brand looks for before they go direct', value: '¥1,200', bonus: true },
          { item: 'Bonus - Category buyer outreach script pack (in the buyer’s language)', value: '¥1,800', bonus: true },
          { item: 'Bonus - The RFQ-to-Reorder Playbook', value: '¥1,200', bonus: true },
        ],
        totalLabel: 'Total real-world value', totalRecurring: '¥27,000 / month', totalOnce: '+ ¥12,800 in setup & bonuses', priceLabel: 'Your investment', price: 'From ¥6,000 / month', setupNote: 'Setup fee (¥8,400) waived for this quarter’s opening. We only get paid to win you orders you own.', cta: 'Claim an opening: free audit first',
      },
      guarantee: { eyebrow: 'The guarantee · 保证', title: 'The 30-Conversation Guarantee.', body: '30 real buyer conversations in 90 days (the kind that turn into samples, POs, and reorders, not idle chat) or Month 4 is on us. Still not at 30 by Month 6? Every fee back. Conversations with in-market Western buyers are the one thing we can put our fee behind, because they are the step that becomes an order you own. The only thing you risk is the orders you are already losing to the middleman.' },
      scarcity: { eyebrow: 'Availability · 名额', title: 'Two clients at a time. One factory per product category.', body: 'We never put competing factories in front of the same brands, so we take one factory per product category, two at a time. When your category is taken, a competitor took the slot, not you. Two openings this quarter.' },
      faq: { eyebrow: 'Questions · 常见问题', title: 'Straight answers.', items: [{ q: 'We sell through trading companies — won’t this upset them?', a: 'This builds a direct channel alongside your existing one: higher-margin relationships you own, on your terms. Keep every trader who still pays. This is more demand, not less.' }, { q: 'We’re a factory, not marketers.', a: 'Exactly why it’s done for you. You keep making product; we make you the factory brands find and trust, and hand you the warm conversations. You never post, never write English, never touch LinkedIn.' }, { q: 'Our buyers speak English; we don’t.', a: 'We run the English-language presence and the outreach for you, in the buyer’s language, and hand your export sales the warm, qualified conversations to close.' }, { q: 'Isn’t our category too commoditized?', a: 'That’s the point. When every supplier looks the same, the one a buyer can audit and verify stops competing on price alone and wins direct. Commodity is exactly the trap an auditable factory escapes.' }, { q: 'Will it work for our category?', a: 'We target buyers in your exact category and back it with the guarantee: no 30 conversations, no cost. The free audit shows you who a brand finds in your category today, before you decide anything.' }, { q: 'Never heard of you. Why should we trust a done-for-you provider?', a: 'Fair. You should not trust anyone in this feed on their word, so we don’t ask you to. Before you pay a cent, we mystery-shop your own factory the way a Western brand would and show you exactly what they find when they search your category today: whether it’s you or the trader. We work alongside easeamazon and Sellerexa inside the cross-border ecosystem (that’s proximity, not borrowed results, and we won’t pretend otherwise). And the guarantee puts our fee on the line, so the only thing you risk is the orders the middleman is already taking.' }] },
      final: { eyebrow: 'Free audit · 免费诊断', title: 'See what a brand finds when it searches your category, and who’s showing up instead of you.', sub: 'Start with a free LinkedIn audit. We’ll mystery-shop your factory the way a Western brand sources your category today, show you exactly what they see, and map the direct orders you’re missing. It commits you to nothing. But one factory per category: when yours is taken, it’s taken.' },
    },
    zh: {
      magnetId: '04',
      card: { label: '与此同时，在领英上……', n1: 'S. Klein · 品牌创始人，欧洲', m1: '在找一家长期合作的不锈钢厨具工厂，年约 5 万件。你关于品控产线的帖子很打动我——你们是真正的制造商吗？', n2: '你 · 当天', m2: '是的——直营工厂，不是贸易商。BSCI + 自有品控。附上产线云参观与打样条款……', foot: '询价开始 · 管道阶段：温热' },
      hero: { eyebrow: '专为工厂与制造商打造 · 东莞 / 佛山 / 义乌', t1: '世界买的东西，是你造的。', t2: '凭什么<em>钱让中间商赚了？</em>', sub: '这个星期，就有西方品牌在采购你所在的品类。在下单之前，他们会先查一查——查出来的，是那个主页做得漂亮的贸易商，不是你的工厂。于是订单、还有后面所有的返单，都进了他的口袋。我们要让你成为品牌直接找到、信任、并下单的那家工厂：全程代运营，用买家的语言，90 天见效。先别急着信我们，自己看：我们免费让你看到，一个品牌今天搜索你的品类时，究竟找到了谁。', ctaPrimary: '看看品牌搜我的品类时，找到的是谁', ctaSecondary: '查看方案', trust1: '每个品类只服务一家工厂 · 本季度仅剩两个名额', trust2: '90 天 30 次真实买家对话（能走到打样、下单、返单的那种）。保证达成。' },
      problem: { eyebrow: '问题', title: '你面前的中间商，拿走了你的利润。', body: ['产线是你在管，认证是你在握，品质风险是你在担。可一家只有一台笔记本、一个主页的贸易公司，就横在你和买家中间，赚走了你造出来的东西的利润。', '最扎心的是这一点：品牌来采购你的品类，那份询价到了贸易商那里就停住了。你没报过价，你甚至从不知道有这笔订单。他把钱收了，你还在等电话响。', '而第一笔订单，只是小的那笔损失。后面的返单、买家的反馈、下一款要开发的产品，全都从他手里过，永远如此。每一段不属于你的直接关系，都是你白白送出去的、一辈子的利润。'] },
      cost: { eyebrow: '代价', title: '继续「隐身」，正让你付出什么。', items: [{ title: '被中间商截流的直接买家', body: '贸易商赚走的那部分利润，本该落进你的工厂。' }, { title: '从未抵达你的询价', body: '这个月，采购你这个品类的品牌找到了供应商，只不过那不是你。' }, { title: '输给「更靠谱」供应商的返单', body: '真正赚钱的是返单。买家会一直跟着看起来更成熟的那一方，而现在，那一方不是你。' }] },
      offer: {
        eyebrow: '方案', name: '直供直客系统', tagline: '让西方品牌找到你、信任你、把订单直接下给你，所需的一切，我们全包，替你搭建、替你运营。', sub: '以下是全部内容，并按「单独购买」的市场价标注价值：',
        stack: [
          { item: '「可验厂」账号 + 公司主页重建：西方品牌信任供应商前会核对的那几项证明', value: '¥5,800' },
          { item: '每月 400 个你所在品类的精选品牌与进口商买家', value: '¥4,000 / 月' },
          { item: '每月 12 篇「拿证据说话」的内容：你的产线、你的品控、你的认证，让买家开口前就已经信你，另配 200 条战略评论', value: '¥9,000 / 月' },
          { item: '全流程代运营外呼：用买家的语言，开启真实的询价（RFQ）对话', value: '¥8,000 / 月' },
          { item: '实时管道看板：每个买家从询盘、到打样、到下单、到返单，全程可见', value: '¥2,800' },
          { item: '每周与资深操盘手的策略沟通', value: '¥6,000 / 月' },
          { item: '赠品——《「可验厂」工厂蓝图》：品牌决定直采前，会找的那些证据', value: '¥1,200', bonus: true },
          { item: '赠品——品类买家外呼话术包（买家母语版）', value: '¥1,800', bonus: true },
          { item: '赠品——「询价到返单」手册', value: '¥1,200', bonus: true },
        ],
        totalLabel: '真实市场价值', totalRecurring: '¥27,000 / 月', totalOnce: '+ ¥12,800 启动费与赠品', priceLabel: '你的投入', price: '¥6,000 / 月 起', setupNote: '本季度名额启动费（¥8,400）全免。我们只为帮你拿下属于你自己的订单而收费。', cta: '锁定名额：先做免费诊断',
      },
      guarantee: { eyebrow: '保证', title: '30 次买家对话保证。', body: '90 天内 30 次真实买家对话，是能走到打样、下单、返单的那种，不是闲聊，否则第 4 个月免费。到第 6 个月仍未达标？全额退款。真正在市场里的西方买家对话，是我们唯一敢押上服务费的东西，因为那正是通向一笔属于你自己的订单的那一步。你唯一的风险，是此刻正被中间商截走的那些订单。' },
      scarcity: { eyebrow: '名额', title: '同一时间两家客户。每个产品品类只服务一家工厂。', body: '我们绝不让互相竞争的工厂出现在同一批品牌面前，因此每个产品品类只接一家工厂，同时最多两家。当你的品类被占了，就是同行抢了这个位置，不是你。本季度仅剩两个名额。' },
      faq: { eyebrow: '常见问题', title: '直接的答案。', items: [{ q: '我们通过贸易公司出货，这会得罪他们吗？', a: '这是在你现有渠道之外，另建一条直接渠道：由你掌控、条件你定、毛利更高的关系。还在给你下单的贸易商，一个都不用动。这是多一条需求，不是少一条。' }, { q: '我们是工厂，不是做营销的。', a: '正因如此，这才是「全托管」。你只管生产；我们让你成为品牌能找到、能信任的那家工厂，再把谈热了的对话交到你手上。你不用发帖、不用写英文、不用碰领英。' }, { q: '买家讲英文，我们不会。', a: '英文的形象和触达都由我们代运营，用买家的语言来做，最后把谈热了的、合格的对话交给你的外贸去成交。' }, { q: '我们这个品类太同质化了吧？', a: '这正是关键。当所有供应商看起来都一样，那个买家能验厂、能核实的工厂，就不再只拼价格，而是赢下直客。同质化，恰恰是一个「可验厂」工厂能跳出去的陷阱。' }, { q: '这对我们的品类有用吗？', a: '我们锁定你所在品类的买家，并以保证兜底：没有 30 次对话，就不收费。在你决定任何事之前，免费诊断会先让你看到：今天品牌在你的品类里，找到的是谁。' }, { q: '没听说过你们，凭什么信任一家代运营方？', a: '问得好。在这条信息流里，你本就不该只凭一面之词信任任何人，所以我们也不要求你这样。在你付一分钱之前，我们会站在西方品牌的角度「暗访」你自己的工厂，让你看到他们今天搜索你的品类时，到底找到的是你、还是那个贸易商。我们与 easeamazon、Sellerexa 同处跨境生态、并肩做事（这只是「同源」的接近，不是借来的成绩，我们不会含糊其辞）。而保证把服务费押在了台面上，所以你唯一的风险，是那些中间商此刻正在截走的订单。' }] },
      final: { eyebrow: '免费诊断', title: '看看品牌搜索你的品类时找到的是什么，以及此刻顶替你的，是谁。', sub: '从一次免费领英诊断开始。我们会按一个西方品牌今天采购你品类的方式「暗访」你的工厂，让你看到他们眼中的你，并梳理出你正在错过的那些直接订单。这不需要你承诺任何事。但每个品类只服务一家工厂：等你的品类被占了，就是占了。' },
    },
  },
};
