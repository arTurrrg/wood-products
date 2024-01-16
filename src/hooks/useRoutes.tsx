//TODO add routes here

import routes from '@/constants/routes.json';
import Home from '@/pages/Home';
import { Route, Routes } from 'react-router-dom';

export const useRoutes = () => {
  const [home, gallery, pricesForServices, aboutUs, contacts] = routes;

  return (
    <Routes>
      <Route path={home.url} element={<Home />} />
    </Routes>
  );
};
