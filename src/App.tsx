import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MG_router } from './router/MG_router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MG_router />
      </div>
    </BrowserRouter>
  );
}

export default App;
