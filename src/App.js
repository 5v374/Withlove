import React from 'react';
import './App.css';
import Video from './components/Video';
import Work from './components/Work';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://i.ibb.co/TxpFpycy/image.png"  alt="Profile" className="profile-image" />
      <div>
        <p className="about-text">Привет, меня зовут Татьяна. И я видеограф-фотограф.</p>
        </div>
      </header>
      <main>
        <Video />
        <Work />
        <Contacts />
      </main>
    </div>
  );
}

export default App;

