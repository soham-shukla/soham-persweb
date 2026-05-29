import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {HideMainHeader} from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Career from './pages/Career';

function Layout(){

  const location = useLocation();
  const isHome = location.pathname === '/';

  return(
    <>
      {!isHome && <HideMainHeader/>}
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path= "/About" element={<About />} />
        <Route path = "/Projects" element={<Projects/>} />
        <Route path = "/Contact" element={<Contact/>} />
        <Route path = "/Career" element={<Career/>} />
      </Routes>
        <Footer />
    </>
  );
}

function App(){

  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;