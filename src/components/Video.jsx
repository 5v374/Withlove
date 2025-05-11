import React from "react";
import video from './video.json';

const Video = () => {
  return (
    <section id="video">
      <h4>Видео-работы</h4>

      <div className="video-list">
        {video.map((video, index) => (
          <div key={index} className="video-item" style={{ marginBottom: '20px' }}>
            <iframe
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Video;