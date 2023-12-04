import React from 'react';

const Youtube = ({ videoUrl }) => {
  return (
    <div>
      <iframe
        width="1000"
        height="615"
        src={videoUrl}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
