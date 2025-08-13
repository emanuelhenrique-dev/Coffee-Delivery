import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

interface DefaultLayoutProps {
  toggleTheme: () => void;
}

export function DefaultLayout({ toggleTheme }: DefaultLayoutProps) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  );
}
