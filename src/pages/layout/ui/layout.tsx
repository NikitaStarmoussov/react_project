import { Outlet } from 'react-router-dom';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/';
import { Navbar } from 'widgets/Navbar';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <ThemeSwitcher />
      <Outlet />
    </div>
  );
}
