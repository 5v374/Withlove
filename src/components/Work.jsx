import React, { useState } from "react";
import "./Work.css";

const portraitImages = [
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745252480/IMG_20250418_141001_201_rykzws.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745252502/IMG_20250418_141000_799_pormor.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253042/photo6_w0ggwg.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745422988/IMG_20250418_141047_873_mr7aaz.jpg"
]
const natureImages = [
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238437/IMG_20250418_141112_879_fsfhnz.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253132/photo4_s0gpon.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253120/photo3_kuo9l9.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253554/photo8_i4helv.jpg"
]
const eventImages = [
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238426/IMG_20250418_141131_810_qkohq9.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238418/IMG_20250418_141130_822_mrx3x1.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238409/IMG_20250418_141131_696_expcsj.jpg"
]

const Work = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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
