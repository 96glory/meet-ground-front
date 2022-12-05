import React from 'react';
import './App.css';
import { MGRouter } from 'router/MGRouter';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <MGRouter />
      </div>
    </RecoilRoot>
  );
}

export default App;
