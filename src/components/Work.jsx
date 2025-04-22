import React, { useState } from "react";
import "./Work.css";

const images = [
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238437/IMG_20250418_141112_879_fsfhnz.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238426/IMG_20250418_141131_810_qkohq9.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238418/IMG_20250418_141130_822_mrx3x1.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745238409/IMG_20250418_141131_696_expcsj.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745252480/IMG_20250418_141001_201_rykzws.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745252502/IMG_20250418_141000_799_pormor.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253042/photo6_w0ggwg.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253132/photo4_s0gpon.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253120/photo3_kuo9l9.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253554/photo8_i4helv.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253535/photo7_ugtded.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253543/photo5_dxarhb.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1745253563/photo2_suvbhr.jpg",
  "https://res.cloudinary.com/dofxtaas7/image/upload/v1744980164/photo1_wzhhtk.jpg"
]

const Work = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="work">
        <h4>Видео-работы</h4>
        <div className="video">
          <iframe
            src="https://rutube.ru/play/embed/d4224087d2e5491e4be4cf6539572d8d"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Rutube Video"
          />
        </div>
      
      <h4>Фото-работы</h4>
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

      {selectedPhoto && (
        <div className="photo-overlay" onClick={closePhoto}>
          <img
            src={selectedPhoto}
            alt="Увеличенное фото"
            className="image-large"
          />
        </div>
      )}
    </section>
  );
};

export default Work;
