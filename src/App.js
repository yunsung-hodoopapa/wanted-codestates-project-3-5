import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from './pages/Canvas';
import Search from './pages/Search';
import './App.css';
import Main from './pages/Main';
import UserPage from './pages/UserPage';
import Results from './components/render/Results';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question1" element={<Search />} />
        <Route path="/question2" element={<Canvas />} />
        <Route path="/question1/list/:keyword" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
