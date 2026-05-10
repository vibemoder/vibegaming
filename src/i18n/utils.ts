export const ui = {
  en: {
    'nav.builds': 'Builds',
    'nav.news': 'News',
    'nav.login': 'Login',
    'hero.title': 'The Ultimate ARPG Intelligence Hub',
    'hero.subtitle': 'Master Diablo IV, Path of Exile, and more with our expert builds and latest news.',
  },
  pt: {
    'nav.builds': 'Builds',
    'nav.news': 'Notícias',
    'nav.login': 'Entrar',
    'hero.title': 'O Hub Supremo de Inteligência ARPG',
    'hero.subtitle': 'Domine Diablo IV, Path of Exile e mais com nossas builds de especialistas e últimas notícias.',
  },
  es: {
    'nav.builds': 'Builds',
    'nav.news': 'Noticias',
    'nav.login': 'Entrar',
    'hero.title': 'El Hub Definitivo de Inteligencia ARPG',
    'hero.subtitle': 'Domina Diablo IV, Path of Exile y más con nuestras builds de expertos y últimas noticias.',
  },
} as const;

export type Locale = keyof typeof ui;

export function useTranslations(lang: string | undefined) {
  const safeLang = (lang && lang in ui ? lang : 'en') as Locale;
  return function t(key: keyof typeof ui['en']) {
    return ui[safeLang][key] || ui['en'][key];
  };
}
