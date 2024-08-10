import React from 'react';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Contacts from './components/Contacts';
import profileImage from './assets/profile.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Withlove</h1>
      </header>
      <main>
        <About />
        <Education />
        <Work />
        <Contacts />
      </main>
    </div>
  );
}

export default App;

