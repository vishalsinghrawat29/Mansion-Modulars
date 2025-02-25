import { Route, Routes } from 'react-router-dom'

import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Projects from '../Projectsages/Projects';
import Services from '../Pages/Services';
import Home from '../Pages/Home'

const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/services', Component: Services },
  { path: '/projects', Component: Projects },
  { path: '/contact', Component: Contact },
]

const AppRoutes = () => (
  <Routes>
    {routes.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
)

export default AppRoutes
