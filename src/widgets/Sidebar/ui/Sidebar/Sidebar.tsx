import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={onToggle}>switch</Button>
      <div className={cls.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
