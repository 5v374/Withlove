import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

function AnimatedText({ text }) {
    const [letterStyles, setLetterStyles] = useState([]);
  
    useEffect(() => {
      const styles = Array.from(text).map((_, index) => ({
        animation: `fadeInLetters 0.5s forwards`,
        animationDelay: `${index * 0.1}s`,
      }));
      setLetterStyles(styles);
    }, [text]);
  
    return (
      <h1 className="animated-text">
        {Array.from(text).map((char, index) => (
          <span
            key={index}
            className="animated-letter"
            style={letterStyles[index] || {}}
          >
            {char}
          </span>
        ))}
      </h1>
    );
  }

export default AnimatedText;
