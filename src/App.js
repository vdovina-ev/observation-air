import React from 'react';
import profileImage from './img/logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Observation Air</h1>
      <h2>Author: Vdovina Elena</h2>
      <img src={profileImage} alt="profile-img"/>
    </div>
  );
}

export default App;
