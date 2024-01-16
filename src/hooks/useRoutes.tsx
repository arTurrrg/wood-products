//TODO add routes here

import routes from '@/constants/routes.json';
import Home from '@/pages/Home/Home';
import PageNotFound from '@/pages/NotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';

export const useRoutes = () => {
  const [home, gallery, pricesForServices, aboutUs, contacts] = routes;

  return (
    <Routes>
      <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path={home.url} element={<Home />} />
    </Routes>
  );
};
