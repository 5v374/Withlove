import React from 'react';
import './App.css';
import Video from './components/Video.jsx';
import Work from './components/Work';
import Contacts from './components/Contacts';
import About from './components/About.jsx';
import Feedblack from './components/Feedback.jsx';


function App() {
  return (
    <div className="App">
      
      <main>
        <About />
        <Work />
        <Video />
        <Feedblack />
        <Contacts />
      </main>
    </div>
  );
}

export default App;

