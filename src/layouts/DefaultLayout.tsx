import { Outlet } from 'react-router-dom';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import AppSidebar from '@/components/sidebar/AppSidebar';

const DefaultLayout: React.FC = () => {
  return (
    <div className="font-roboto flex h-screen flex-col bg-gray-200">
      <div>
        <Header />
      </div>

      <main className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <div className="container">
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
