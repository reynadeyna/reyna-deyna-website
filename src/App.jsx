import About from './pages/About';
import Music from './pages/Music';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ama from './pages/Ama';
import Delufesto from './pages/Delufesto';
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
        <video src={w} autoPlay loop playsInline muted />
        </div>

        <div className='content'>
          <BrowserRouter>
            <Navbar />
            <GooBlob />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ama" element={<Ama />} />
              <Route path="/about" element={<About />} />
              <Route path="/music" element={<Music />} />
              <Route path="/delufesto" element={<Delufesto />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
