import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/sidebar';
import Header from './Components/Header/header';
import Body from './Components/Body/body';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Sidebar/>
        <Header/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
