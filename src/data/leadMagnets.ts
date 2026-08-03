export interface MagnetCopy { title: string; blurb: string; }
export interface Magnet {
  file: string; // basename in /downloads (EN) and /downloads/zh (ZH)
  tag?: 'sourcing' | 'freight' | 'software' | 'factories' | 'all';
  en: MagnetCopy;
  zh: MagnetCopy;
}

export const magnets: Record<string, Magnet> = {
  '01': {
    file: '01-sourcing-agency-vetting-scorecard.pdf',
    tag: 'sourcing',
    en: { title: "The Amazon Seller's Vetting Scorecard", blurb: 'The 9 things US & EU sellers check on your LinkedIn before they reply — and how to score yourself.' },
    zh: { title: '亚马逊卖家的供应商筛选评分表', blurb: '欧美卖家在回复你之前，会在你领英资料上检查的 9 件事——以及如何为自己打分。' },
  },
  '02': {
    file: '02-freight-forwarder-12-posts.pdf',
    tag: 'freight',
    en: { title: '12 LinkedIn Posts That Make Importers DM You', blurb: 'A ready-to-use content calendar for freight forwarders serving Western importers & e-commerce brands.' },
    zh: { title: '让进口商主动私信你的 12 篇领英帖子', blurb: '面向服务欧美进口商与电商品牌的货代，一套可直接使用的内容日历。' },
  },
  '03': {
    file: '03-saas-demo-calendar-teardown.pdf',
    tag: 'software',
    en: { title: 'The Demo-Calendar Teardown', blurb: 'How the fastest-growing cross-border & supply-chain SaaS fill their demo calendars from LinkedIn.' },
    zh: { title: 'Demo 日历拆解报告', blurb: '增长最快的跨境与供应链 SaaS，是如何用领英把 Demo 日历排满的。' },
  },
  '04': {
    file: '04-factory-auditable-profile-blueprint.pdf',
    tag: 'factories',
    en: { title: 'The Auditable Factory Profile Blueprint', blurb: 'The 8 credibility signals that make Western brands trust — and reorder from — your factory.' },
    zh: { title: '「可验厂」工厂主页蓝图', blurb: '让西方品牌信任你的工厂、并持续返单的 8 个可信度信号。' },
  },
  '05': {
    file: '05-supplier-linkedin-scorecard.pdf',
    tag: 'all',
    en: { title: 'The Chinese-Supplier LinkedIn Scorecard', blurb: 'Score your LinkedIn against the top 10% of suppliers Western buyers actually contact.' },
    zh: { title: '中国供应商领英评分表', blurb: '用西方买家真正会联系的「前 10% 供应商」作为标准，为你的领英形象打分。' },
  },
  '07': {
    file: '07-western-buyer-headline-formula.pdf',
    tag: 'all',
    en: { title: 'The Western-Buyer Headline Formula', blurb: 'A swipe file of LinkedIn headlines that get Chinese suppliers found in the searches Western buyers run.' },
    zh: { title: '西方买家标题公式', blurb: '一份「话术库」：让中国供应商出现在西方买家真正会搜索的领英结果里。' },
  },
  '09': {
    file: '09-15-point-prereply-checklist.pdf',
    tag: 'all',
    en: { title: 'The 15-Point Pre-Reply Checklist', blurb: 'The 15 things a Western buyer subconsciously checks before replying to a Chinese supplier.' },
    zh: { title: '回复前 15 项自查清单', blurb: '西方买家在回复中国供应商之前，下意识会检查的 15 件事。' },
  },
  '10': {
    file: '10-un-bypassable-supplier-playbook.pdf',
    tag: 'sourcing',
    en: { title: 'The Un-Bypassable Supplier Playbook', blurb: '7 moves that make the Western buyer refuse to go around you to the factory.' },
    zh: { title: '「工厂跳不掉你」实战手册', blurb: '让海外买家宁愿多付一层、也不绕过你直连工厂的 7 个动作。' },
  },
  '11': {
    file: '11-targeted-50-method.pdf',
    tag: 'sourcing',
    en: { title: 'The Targeted-50 Method', blurb: 'Why 50 right LinkedIn connections beat 4,200 random ones — and exactly how to pick the 50.' },
    zh: { title: '「精准50人」开发法', blurb: '为什么 50 个精准联系人，胜过 4,200 个乱加好友，以及如何锁定这 50 人。' },
  },
  '12': {
    file: '12-trust-signals-price-haggle.pdf',
    tag: 'all',
    en: { title: 'The 5 Trust Signals That End the Price Haggle', blurb: 'Five things beyond price that move you from cheapest to safest choice.' },
    zh: { title: '让客户不再只砍价的 5 个信任信号', blurb: '除了价格，给客户 5 样可以判断你的东西——从「最便宜」变成「最放心」。' },
  },
};

export const downloadPath = (file: string, lang: 'en' | 'zh') =>
  lang === 'zh' ? `/downloads/zh/${file}` : `/downloads/${file}`;
