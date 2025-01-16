import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detailes from './Components/Details';
import SearchChampions from './Components/SearchChampions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchChampions />} />
        <Route path="/champion/:id" element={<Detailes />} />
      </Routes>
    </Router>
  );
}

export default App;
