import React from 'react';
import Canvas from './pages/Canvas';
// import Results from './components/render/Results';
// import RenderPage from './pages/RenderPage';
// import Input from './components/Input';
import Search from './pages/Search';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question1" element={<Search />} />
        <Route path="/question2" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
