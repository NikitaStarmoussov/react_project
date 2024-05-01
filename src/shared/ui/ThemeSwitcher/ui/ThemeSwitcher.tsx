import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ThemeSwitcher.module.scss';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { useTheme } from 'app/providers/themeProvider';
import { Theme } from 'shared/config/theme/themeContext';
import { Button } from 'shared/ui/Button';
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
