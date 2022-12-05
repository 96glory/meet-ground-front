import React from 'react';
import './App.css';
import { MG_router } from 'router/MG_router';
import Footer from 'components/Footer/Footer';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <MG_router />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
