import { useAppSelector } from "./app";
import { Language } from "appTypes";

import en_us from 'assets/lang/en_us.json';
import ru_ru from 'assets/lang/ru_ru.json';

type UseTranslate = () => {
  __: (toTranslate: string) => string;
  languages: Language[];
}

export const useTranslate: UseTranslate = () => {
  const userLang = useAppSelector(state => state.reviews.lang);

  const languages: Language[] = [
    en_us,
    ru_ru
  ]

  const defaultLanguage: Language = en_us;

  const __ = (toTranslate: string) => {
    const lang = languages.find(el => el.code === userLang) || defaultLanguage;

    if (lang[toTranslate])
      return lang[toTranslate];
    
    return defaultLanguage[toTranslate];
  }

  return { __, languages };
}