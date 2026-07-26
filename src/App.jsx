import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {HideMainHeader} from './components/Header';
import './App.css'; 
import ResetScroll from './components/ResetScroll';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Career from './pages/Career';
import DriveSafe from './pages/projects/DriveSafe';
import Diesel from './pages/projects/Diesel';
import WangLab from './pages/projects/WangLab';
import PersWeb from './pages/projects/PersWeb';
import Bvbrc from './pages/projects/Bvbrc';



function Layout(){

  const location = useLocation();
  const isHome = location.pathname === '/';

  return(
    <>
      {!isHome && <HideMainHeader/>}
      <ResetScroll/>

      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path= "/About" element={<About />} />
        <Route path = "/Projects" element={<Projects/>} />
        <Route path = "/Contact" element={<Contact/>} />
        <Route path = "/Career" element={<Career/>} />
        <Route path = "/Projects/drivesafe" element = {<DriveSafe/>} />
        <Route path = "/Projects/diesel" element = {<Diesel/>} />
        <Route path = "/Projects/wanglab" element = {<WangLab/>} />
        <Route path = "/Projects/persweb" element = {<PersWeb/>} />
        <Route path = "/Projects/bvbrc" element = {<Bvbrc/>} />
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