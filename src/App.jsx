
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './provider/SearchContext';
import Home from './page/HomePage';
import NavBar from './components/NavBar';
import Theme from './components/Theme';
import Episode from './page/EpisodePage';

import './App.css';

function App() {
  

  return (
    <>
    <SearchProvider>
      <Router>
        <div className='main'>
          <NavBar />
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/episode" element={<Episode />} />
          </Routes>        
        </div>
      </Router>
    </SearchProvider>
    </>
  )
};

export default App;
