import React from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar/sidebar';
import Header from './Components/Header/header';
import Body from './Components/Body/body';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Sidebar/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
