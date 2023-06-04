// import Home from './pages/Home';
import About from './pages/About';
import Angelware from './pages/Angelware';
import Code from './pages/Code';
import Navbar from './components/Navbar';
import AngelicBeats from './pages/AngelicBeats';
// import Header from './components/Header';
import GooBlob from './components/Metaball';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import blob from './assets/blob.mp4'



function App() {

  return (
    <>
      <div className='main'>
        {/* <div className='overlay'></div> */}
        <video src={blob} autoPlay loop muted />

        <div className='content'>
          <BrowserRouter>
            {/* <Header /> */}
            <Navbar />
            <GooBlob />
            <Routes>
              <Route path="/" element={<Angelware />} />
              <Route path='about' element={<About />} />
              <Route path="/code" element={<Code />} />
              <Route path="/angelicbeats" element={<AngelicBeats />} />
              {/* <Route path="/angelware" element={<Angelware />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
