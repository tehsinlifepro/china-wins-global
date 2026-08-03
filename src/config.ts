export interface SiteConfig {
  domain: string;
  brand: string;
  seal: string;
  contact: {
    email: string;
    wechat: string;
  };
  capture: {
    endpoint: string;
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
  capture: {
    // Brevo relay (Google Apps Script web app) — see China Visit/capture-relay/ENDPOINTS.md
    endpoint: 'https://script.google.com/macros/s/AKfycbxrkkgOgCbHaxtdW43uGLlCXd2oAdOY9ebMJeDh8iqW-lqvRaKR9g0D0GX2ttaxhFB4/exec',
  },
  analytics: {
    provider: '',
    id: '',
  },
};
