export interface SiteConfig {
  domain: string;
  brand: string;
  seal: string;
  contact: {
    email: string;
    wechat: string;
  };
  mailerlite: {
    accountId: string;
    formId: string;
    actionUrl: string;
  };
  analytics: {
    provider: string;
    id: string;
  };
}

export const SITE: SiteConfig = {
  domain: 'https://www.chinawinsglobal.com',
  brand: 'China Wins Global',
  seal: '赢',
  contact: {
    email: '3932482662@qq.com',
    wechat: 'tehsin369',
  },
  mailerlite: {
    accountId: '2518242',
    formId: '193374527848187512',
    actionUrl: 'https://assets.mailerlite.com/jsonp/2518242/forms/193374527848187512/subscribe',
  },
  analytics: {
    provider: '',
    id: '',
  },
};
