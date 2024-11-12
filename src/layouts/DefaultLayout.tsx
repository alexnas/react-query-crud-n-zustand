import { Outlet } from 'react-router-dom';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import AppSidebar from '@/components/sidebar/AppSidebar';

const DefaultLayout: React.FC = () => {
  return (
    <div className="font-roboto flex h-screen flex-col bg-gray-200 dark:bg-gray-500 dark:text-gray-200">
      <Header />

      <main className="flex overflow-hidden">
        <AppSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
