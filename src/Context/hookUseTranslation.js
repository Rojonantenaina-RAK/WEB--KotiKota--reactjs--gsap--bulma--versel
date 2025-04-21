import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const useTranslation = () => {
  const { t } = useContext(LanguageContext);
  return t;
};