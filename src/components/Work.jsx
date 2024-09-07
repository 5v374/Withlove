import React, { useState } from "react";
import "./Work.css";
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../assets/photos", false, /\.(png|jpe?g|svg)$/)
);

const Work = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleSection = (section) => {
    if (section === "video") {
      setIsVideoOpen(!isVideoOpen);
    }
  };

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="work">
      <h4 onClick={() => toggleSection("video")} style={{ cursor: "pointer" }}>
        Видео-работы
      </h4>
      {isVideoOpen && (
        <div>
          <a href="https://disk.yandex.ru/i/oG1b7eciIT8oEw">Саша-видео</a>
          <br />
          <a href="https://disk.yandex.ru/d/6s1ItvGQlB6Xfg">Вика-видео</a>
        </div>
      )}
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
