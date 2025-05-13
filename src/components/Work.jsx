import React, { useState } from "react";
import "./Work.css";
import photoData from './photos.json';

const Work = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const {portraitImages, natureImages, eventImages} = photoData;
  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const toggleVisibility = () => {
    setIsVisible(currentValue => !currentValue)
  };

  const PhotoSection = ({ title, images, openPhoto }) => (
    <>
      <h5>{title}</h5>
      <div className="photo-grid">
        {images.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={index + 1}
            className="image-small"
            onClick={() => openPhoto(photo)}
          />
        ))}
      </div>
    </>
  );

  return (
    <section id="work">
      <h4 style={{cursor: 'pointer'}} onClick={toggleVisibility}>Фото-работы</h4>
      
      {isVisible && (
        <>
        <PhotoSection title="Портреты" images={portraitImages} openPhoto={openPhoto} />
        <PhotoSection title="Природа" images={natureImages} openPhoto={openPhoto} />
        <PhotoSection title="Мероприятия" images={eventImages} openPhoto={openPhoto} />
        </>
      )}
        
      {selectedPhoto && (
        <div className="photo-overlay" onClick={closePhoto}>
          <img
            src={selectedPhoto}
            alt="увеличенное фото"
            className="image-large"
          />
        </div>
      )}
    </section>
  );
};

export default Work;
