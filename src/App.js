import React from 'react';
import './App.css';
import AnimatedText from './components/AnimatedText';
import Work from './components/Work';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://i.ibb.co/TxpFpycy/image.png"  alt="Profile" className="profile-image" />
      <div>
        <AnimatedText text="Withlove" />
        <p className="about-text">Привет, меня зовут Татьяна. И я видеограф-фотограф.</p>
        </div>
      </header>
      <main>
        <Work />
        <Contacts />
      </main>
    </div>
  );
}

export default App;

