import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <div className="images">
        <img src="path_to_image1.jpg" alt="Gallery Image 1" />
        <img src="path_to_image2.jpg" alt="Gallery Image 2" />
        {/* Add more images */}
      </div>
    </div>
  );
};

export default Gallery;
