import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Link to='/' className={cls.mainLink}>
          Main
        </Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
};
