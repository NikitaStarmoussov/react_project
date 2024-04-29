import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import ThemeProvider from './providers/themeProvider';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
   
  </StrictMode>);