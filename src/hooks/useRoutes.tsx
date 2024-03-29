import routes from '@/constants/routes.json';
import AboutUsPage from '@/pages/AboutUs/AboutUs';
import ContactPage from '@/pages/Contact/ContactPage';
import Gallery from '@/pages/Gallery/Gallery';
import Home from '@/pages/Home/Home';
import PageNotFound from '@/pages/NotFound/PageNotFound';
import PricesForServices from '@/pages/PricesForServices/PricesForServices';
import { Route, Routes } from 'react-router-dom';

export const useRoutes = () => {
  const [home, gallery, pricesForServices, aboutUs, contacts] = routes;

  return (
    <Routes>
      <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path={home.url} element={<Home />} />
      <Route path={gallery.url} element={<Gallery />} />
      <Route path={pricesForServices.url} element={<PricesForServices />} />
      <Route path={aboutUs.url} element={<AboutUsPage />} />
      <Route path={contacts.url} element={<ContactPage />} />
    </Routes>
  );
};
