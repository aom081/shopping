import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider>
      <NavBar/>

      </Provider>
    </div>
  );
}

export default App;
