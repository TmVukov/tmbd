import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';
import { useInitialData } from '../hooks/useInitialData';

const RootLayout = () => {
  useInitialData();

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2023 TheMovies. All rights reserved.</p>
      </footer>
    </>
  );
};

export default RootLayout;
