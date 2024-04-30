import { useTheme } from 'app/providers/themeProvider';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';

export default function Layout() {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button type='button' onClick={toggleTheme}>
        Theme
      </button>
      <Navbar />
      <Outlet />
    </div>
  );
}
