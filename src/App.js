import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from './pages/Canvas';
import './App.css';
import Results from './components/render/Results';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/list' element={<Results />}/>
        {/* <Canvas /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
