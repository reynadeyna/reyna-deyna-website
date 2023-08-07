import About from './pages/About';
import Angelware from './pages/Angelware';
import Code from './pages/Code';
import Navbar from './components/Navbar';
import AngelicBeats from './pages/AngelicBeats';
import Footer from './components/Footer';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import Shop from './pages/Shop';
import GooBlob from './components/Metaball';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import w from './assets/Website8.mp4'
import bg1 from './assets/2.png'
import bg2 from './assets/3.png'
import './styles.css'

import Lenis from '@studio-freight/lenis'


function App() {

  if(window.innerWidth > 768) {
    const lenis = new Lenis({
      duration: 1.5,
      wheelMultiplier: .5
    })


    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  return (
    <>
      <div className='main'>
        <div className='bg1'><img src={bg1} /></div>
        <div className='bg2'><img src={bg2} /></div>
        <video src={w} autoPlay loop muted />
        </div>

        <div className='content'>
          <BrowserRouter>
            <Navbar />
            <GooBlob />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path="/code" element={<Code />} />
              <Route path="/angelicbeats" element={<AngelicBeats />} />
              <Route path="/angelware" element={<Angelware />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
