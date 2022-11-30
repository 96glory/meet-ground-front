import React from 'react';
import './App.css';
import { MG_router } from 'router/MG_router';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <MG_router />
      <Footer />
    </div>
  );
}

export default App;
