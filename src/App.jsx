import AppRoutes from './Routes/AppRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

const App = () => (
  <>
    <header id='site-header' className='header'>
      <Navbar />
    </header>
    <main id='site-main' className='main-content'>
      <AppRoutes />
    </main>
    <Footer />
  </>
)

export default App
