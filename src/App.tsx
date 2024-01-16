import { useRoutes } from './hooks/useRoutes';
import Header from './components/Header/Header';

function App() {
  const routes = useRoutes();

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;
