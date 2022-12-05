import React from 'react';
import './App.css';
import { MGRouter } from 'router/MGRouter';
import Footer from 'components/Footer/Footer';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="Page">
          <MGRouter />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
