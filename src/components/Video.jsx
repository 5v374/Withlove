import React from "react";

const Video = () => {
  return (
    <section id="video">
      <h4>Видео-работы</h4>

      <div className="video">
        {/* Rutube Video */}
        <iframe
          src="https://rutube.ru/play/embed/d4224087d2e5491e4be4cf6539572d8d"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Rutube Video"
        ></iframe>
      </div>

      <div className="video">
        {/* VK Video */}
        <iframe
          src="https://vk.com/video_ext.php?oid=-230081631&id=456239017&hash=ab469f7115ef3372"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          title="VK Video"
        ></iframe>
      </div>
    </section>
  );
};

export default Video;