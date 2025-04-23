import React, { useState } from "react";

const Video = () => {
    return (
        <section id="video">
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
            </section>
    )
}

export default Video;