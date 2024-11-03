import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout';
import HomeView from '@/views/HomeView';
import AboutView from '@/views/AboutView';
import NotFoundView from '@/views/NotFoundView';

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
