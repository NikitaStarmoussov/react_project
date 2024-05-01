import { createRoot } from 'react-dom/client';
import App from './app/App';
import { StrictMode } from 'react';
import { ThemeProvider } from 'app/providers/themeProvider';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
