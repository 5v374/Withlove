import React from 'react';
import './App.css';
import AnimatedText from './components/AnimatedText';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Contacts from './components/Contacts';
import Film from './components/Film'; 
import profileImage from './assets/profile.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={profileImage} alt="Profile" className="profile-image" />
        <AnimatedText text="Withlove" />
      </header>
      <main>
        <About />
        <Education />
        <Film />
        <Work />
        <Contacts />
      </main>
    </div>
  );
}

export default App;

