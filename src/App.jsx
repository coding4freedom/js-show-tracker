
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './provider/SearchContext';
import Home from './page/HomePage';
import NavBar from './components/NavBar';
import EpisodeForm from './page/EpisodeForm';

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
            <Route path="/episode" element={<EpisodeForm />} />
          </Routes>        
        </div>
      </Router>
    </SearchProvider>
    </>
  )
};

export default App;
