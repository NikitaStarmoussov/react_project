import React from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from './providers/router/';

const App = (): React.ReactElement => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <AppRouter />
    </div>
  );
};

export default App;
