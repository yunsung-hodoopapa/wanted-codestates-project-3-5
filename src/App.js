import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from './pages/Canvas';
import './App.css';
import Results from './components/render/Results';
import DetailView from './components/render/DetailView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<Results />} />
        <Route path="/left-side" element={<DetailView />} />
        {/* <Canvas /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
