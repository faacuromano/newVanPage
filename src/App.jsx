import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DUMMY_ARTS from './db/db.jsx';
import './App.css';

import ContainerArtWorks from './Components/ArWorks/ContainerArtWorks';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Artist from './Components/Artist/Artist';

function App() {
  const [artworks, setArtWorks] = useState('');

  useState(() => {
    setArtWorks(DUMMY_ARTS);
  }, []);

  return (
    <HashRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artworks" element={<ContainerArtWorks artworks={artworks} />} />
        <Route path="/about" element={<About />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
