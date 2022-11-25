import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './pages/Games';
import Home from './pages/Home';

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
