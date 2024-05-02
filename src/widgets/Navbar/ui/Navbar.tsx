import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/' className={cls.mainLink}>
          {t('mainLink')}
        </AppLink>
        <AppLink to='/about'>{t('aboutLink')}</AppLink>
      </div>
    </div>
  );
};
