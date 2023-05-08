import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';
import Scores from './pages/Scores';

function App() {

  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<Games />} />
        <Route path="/scores" element={<Scores/>}/>
      </Routes>
    </Router>
  );
}

export default App;
