import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Services from '../Pages/Services';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
];

const AppRoutes = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default AppRoutes;
