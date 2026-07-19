import { ui, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function t(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.en[key] ?? key;
}

export function getAlternatePath(url: URL): string {
  const path = url.pathname;
  if (path === '/zh' || path === '/zh/') return '/';
  if (path.startsWith('/zh/')) return path.slice(3);
  if (path === '/') return '/zh/';
  return `/zh${path}`;
}
