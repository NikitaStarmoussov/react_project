import { useTheme } from 'app/providers/themeProvider';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button type='button' onClick={toggleTheme}>
        Theme
      </button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Outlet />
    </div>
  );
}
