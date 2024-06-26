import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
