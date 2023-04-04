import Home from './pages/Home';
import Music from './pages/Music';
import Code from './pages/Code';
import Navbar from './components/Navbar';
import Header from './components/Header';
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
            <Header />
            <Navbar />
            <GooBlob />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/code" element={<Code />} />
              <Route path="/music" element={<Music />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
