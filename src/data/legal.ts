export interface LegalSection { h: string; body: string[]; }
export interface LegalContent {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  note: string;
}
type Doc = { en: LegalContent; zh: LegalContent };

const REVIEW_EN =
  'This document is a good-faith template. Before launch it should be reviewed by qualified legal counsel and completed with China Wins Global’s registered business entity name and address. Questions: 3932482662@qq.com.';
const REVIEW_ZH =
  '本文件为善意起草的模板。正式上线前，应由合格法律顾问审阅，并补充「中国赢全球」的注册主体名称与地址。如有疑问：3932482662@qq.com。';
const UPDATED_EN = 'Last updated: 20 July 2026';
const UPDATED_ZH = '最后更新：2026 年 7 月 20 日';

export const legal: Record<'privacy' | 'terms' | 'cookies' | 'disclaimer' | 'refund', Doc> = {
  privacy: {
    en: {
      title: 'Privacy Policy',
      updated: UPDATED_EN,
      intro: 'This Privacy Policy explains how China Wins Global (“we”, “us”) collects, uses, and protects your personal information. We aim to comply with the EU General Data Protection Regulation (GDPR) and China’s Personal Information Protection Law (PIPL).',
      sections: [
        { h: 'Information we collect', body: ['The email address you submit through our forms, and basic analytics data such as pages visited and device/browser type. We do not collect payment or financial information on this website.'] },
        { h: 'How we use it', body: ['To respond to your audit request, deliver resources you ask for, send occasional relevant updates (which you can opt out of at any time), and improve our website.'] },
        { h: 'Legal basis & your rights', body: ['We process your data based on your consent and our legitimate interest in responding to your enquiry. Under GDPR and PIPL you have the right to access, correct, delete, or port your data, and to withdraw consent at any time. Email us to exercise these rights.'] },
        { h: 'Sharing & storage', body: ['We use MailerLite to store and manage email subscriptions; your data is processed under their security terms. We do not sell your personal information.'] },
      ],
      note: REVIEW_EN,
    },
    zh: {
      title: '隐私政策',
      updated: UPDATED_ZH,
      intro: '本隐私政策说明「中国赢全球」（「我们」）如何收集、使用与保护你的个人信息。我们力求遵守欧盟《通用数据保护条例》（GDPR）与中国《个人信息保护法》（PIPL）。',
      sections: [
        { h: '我们收集的信息', body: ['你通过表单提交的邮箱地址，以及基本的分析数据（如访问页面、设备/浏览器类型）。本网站不收集任何支付或金融信息。'] },
        { h: '我们如何使用', body: ['用于回复你的诊断申请、发送你索取的资源、不定期发送相关更新（你可随时退订），以及改进我们的网站。'] },
        { h: '法律依据与你的权利', body: ['我们基于你的同意，以及回应你咨询的正当利益处理数据。根据 GDPR 与 PIPL，你有权访问、更正、删除或转移你的数据，并可随时撤回同意。请邮件联系我们行使这些权利。'] },
        { h: '共享与存储', body: ['我们使用 MailerLite 存储与管理邮件订阅，你的数据依其安全条款处理。我们不会出售你的个人信息。'] },
      ],
      note: REVIEW_ZH,
    },
  },
  terms: {
    en: {
      title: 'Terms of Service',
      updated: UPDATED_EN,
      intro: 'These Terms of Service govern your use of the China Wins Global website.',
      sections: [
        { h: 'Use of this site', body: ['This website is provided for informational purposes. By using it, you agree to these terms and to our Privacy Policy.'] },
        { h: 'Services', body: ['The scope, deliverables, and pricing of any engagement are set out in a separate written agreement between you and China Wins Global. Information on this site does not constitute a binding offer.'] },
        { h: 'Intellectual property', body: ['All content on this site is owned by China Wins Global unless stated otherwise, and may not be reproduced without permission.'] },
        { h: 'Limitation of liability', body: ['The website and its content are provided “as is”, without warranties of any kind, to the maximum extent permitted by law.'] },
      ],
      note: REVIEW_EN,
    },
    zh: {
      title: '服务条款',
      updated: UPDATED_ZH,
      intro: '本服务条款约束你对「中国赢全球」网站的使用。',
      sections: [
        { h: '网站使用', body: ['本网站仅供信息参考。使用本网站即表示你同意本条款及我们的隐私政策。'] },
        { h: '服务', body: ['任何合作的范围、交付内容与价格，均以你与「中国赢全球」之间另行签订的书面协议为准。本网站信息不构成具有约束力的要约。'] },
        { h: '知识产权', body: ['除另有说明外，本网站所有内容归「中国赢全球」所有，未经许可不得复制。'] },
        { h: '责任限制', body: ['在法律允许的最大范围内，本网站及其内容按「现状」提供，不作任何形式的担保。'] },
      ],
      note: REVIEW_ZH,
    },
  },
  cookies: {
    en: {
      title: 'Cookie Policy',
      updated: UPDATED_EN,
      intro: 'This Cookie Policy explains how we use cookies and similar technologies on this website.',
      sections: [
        { h: 'What we use', body: ['Essential cookies required for basic site function, and — where enabled — privacy-friendly analytics that help us understand how the site is used. We do not use cookies to build advertising profiles of you.'] },
        { h: 'Managing cookies', body: ['You can control or delete cookies through your browser settings. Disabling some cookies may affect how parts of the site work.'] },
      ],
      note: REVIEW_EN,
    },
    zh: {
      title: 'Cookie 政策',
      updated: UPDATED_ZH,
      intro: '本 Cookie 政策说明我们如何在本网站使用 Cookie 及类似技术。',
      sections: [
        { h: '我们使用哪些', body: ['用于基本网站功能的必要 Cookie；以及（在启用时）注重隐私的分析工具，帮助我们了解网站的使用情况。我们不会使用 Cookie 为你建立广告画像。'] },
        { h: '管理 Cookie', body: ['你可以通过浏览器设置控制或删除 Cookie。禁用部分 Cookie 可能影响网站部分功能。'] },
      ],
      note: REVIEW_ZH,
    },
  },
  disclaimer: {
    en: {
      title: 'Disclaimer',
      updated: UPDATED_EN,
      intro: 'Please read this disclaimer carefully.',
      sections: [
        { h: 'Results disclaimer', body: ['Any results, figures, or guarantees described on this site — including the “30 qualified conversations in 90 days” guarantee — reflect the terms of a specific service agreement and depend on factors including your industry, your participation, and market conditions. They are not a promise of revenue or profit, and individual results vary. Nothing on this site is financial, legal, or investment advice.'] },
        { h: 'Not affiliated', body: ['China Wins Global is an independent service. We are not affiliated with, endorsed by, or sponsored by LinkedIn, Amazon, or any other platform mentioned on this site. All trademarks are the property of their respective owners.'] },
        { h: 'Platform compliance', body: ['Our services are designed to be used in a manner consistent with the terms of the platforms involved. Clients are responsible for their own accounts and conduct.'] },
      ],
      note: REVIEW_EN,
    },
    zh: {
      title: '免责声明',
      updated: UPDATED_ZH,
      intro: '请仔细阅读本免责声明。',
      sections: [
        { h: '效果免责', body: ['本网站所述的任何效果、数据或保证——包括「90 天内 30 次高质量对话」保证——均以具体的服务协议条款为准，并取决于你的行业、你的配合程度及市场状况等因素。它们并非对收入或利润的承诺，个体结果会有差异。本网站的任何内容均不构成财务、法律或投资建议。'] },
        { h: '无隶属关系', body: ['「中国赢全球」为独立服务方。我们与领英（LinkedIn）、亚马逊（Amazon）或本网站提及的任何其他平台均无隶属、背书或赞助关系。所有商标归各自所有者所有。'] },
        { h: '平台合规', body: ['我们的服务旨在以符合相关平台条款的方式使用。客户须对自己的账户与行为负责。'] },
      ],
      note: REVIEW_ZH,
    },
  },
  refund: {
    en: {
      title: 'Refund Policy',
      updated: UPDATED_EN,
      intro: 'This Refund Policy describes the terms of the China Wins Global performance guarantee.',
      sections: [
        { h: 'The 30-Conversation Guarantee', body: ['For eligible engagements: if you do not reach 30 qualified conversations within 90 days, Month 4 is provided free of charge. If you have still not reached 30 qualified conversations by Month 6, you are entitled to a full refund of the monthly service fees paid.'] },
        { h: 'Conditions', body: ['The guarantee applies where the client has completed onboarding, provided the required access and materials, and followed the agreed process. The definition of a “qualified conversation” is set out in your service agreement. The one-time setup fee covers work performed and is non-refundable except as stated in your agreement.'] },
        { h: 'How to request', body: ['Refund requests are handled according to your written service agreement. Contact us at 3932482662@qq.com to begin.'] },
      ],
      note: REVIEW_EN,
    },
    zh: {
      title: '退款政策',
      updated: UPDATED_ZH,
      intro: '本退款政策说明「中国赢全球」绩效保证的条款。',
      sections: [
        { h: '30 次对话保证', body: ['对于符合条件的合作：若你在 90 天内未达成 30 次高质量对话，则第 4 个月免费提供；若到第 6 个月仍未达成 30 次高质量对话，你有权就已支付的月度服务费获得全额退款。'] },
        { h: '适用条件', body: ['该保证适用于客户已完成入驻、提供所需权限与素材，并遵循约定流程的情形。「高质量对话」的定义以你的服务协议为准。一次性启动费用于已开展的工作，除协议另有约定外不予退还。'] },
        { h: '如何申请', body: ['退款申请按你的书面服务协议处理。请邮件联系 3932482662@qq.com 开始办理。'] },
      ],
      note: REVIEW_ZH,
    },
  },
};
