import { useTranslation } from 'react-i18next';

export const Fallback = () => {
  const { t } = useTranslation();
  return <div>{t('loading')}</div>;
};
