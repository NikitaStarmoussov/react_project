import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Button.module.scss';

enum ButtonTheme {
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme = ButtonTheme.CLEAR, children, ...otherProps } = props;
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
