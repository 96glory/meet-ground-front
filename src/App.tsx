import React from 'react';
import './App.css';
import { MGRouter } from 'router/MGRouter';
import Footer from 'components/Footer/Footer';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <MGRouter />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
