import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchChampions from './Components/SearchChampions';
import DetailedChampion from './Components/DetailedChampion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchChampions />} />
        <Route path="/champion/:id" element={<DetailedChampion />} />
      </Routes>
    </Router>
  );
}

export default App;
