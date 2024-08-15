import React, { useState } from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

const Work = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleVideoOpen = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  const togglePhotoOpen = () => {
    setIsPhotoOpen(!isPhotoOpen);
  };

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="work">
      <h2>Снимаю фильмы о разном</h2>
      <ul>
        <li> - венчания</li>
        <li> - семейные истории</li>
        <li> - различные события</li>
        <li> - контент для личных и производственных брендов</li>
        <li> - реклама</li>
      </ul>
      <h3>Мои работы:</h3>
      <h4 onClick={toggleVideoOpen} style={{ cursor: 'pointer' }}>
        Видео-работы {isVideoOpen ? '-' : '+'}
      </h4>
      {isVideoOpen && (
        <div>
          <a href="https://disk.yandex.ru/d/6s1ItvGQlB6Xfg" target="_blank" rel="noopener noreferrer">Вика видео</a>
          <p></p>
          <a href="https://disk.yandex.ru/i/oG1b7eciIT8oEw" target="_blank" rel="noopener noreferrer">Саша_Ваня</a>
        </div>
      )}
      <h4 onClick={togglePhotoOpen} style={{ cursor: 'pointer' }}>
        Фото-работы {isPhotoOpen ? '-' : '+'}
      </h4>
      {isPhotoOpen && (
        <div className="photo-grid">
          <img src={photo1} alt="Фото работы" className="image-small" onClick={() => openPhoto(photo1)} />
          <img src={photo2} alt="Фото работы" className="image-small" onClick={() => openPhoto(photo2)} />
          <img src={photo3} alt="Фото работы" className="image-small" onClick={() => openPhoto(photo3)} />
          <img src={photo4} alt="Фото работы" className="image-small" onClick={() => openPhoto(photo4)} />
        </div>
      )}
      {selectedPhoto && (
        <div className="photo-overlay" onClick={closePhoto}>
          <img src={selectedPhoto} alt="Увеличенное фото" className="image-large" />
        </div>
      )}
      </section>
  );
};

export default Work; 