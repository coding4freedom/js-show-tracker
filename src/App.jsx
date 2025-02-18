
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/HomePage';

import Theme from './components/Theme';

import './App.css';

function App() {
  

  return (
    <Router>
      <div className='main'>
        <Theme />
        <Routes>
          <Route path='/' element={ <Home />} />
        </Routes>        
      </div>
    </Router>
  )
};

export default App;
