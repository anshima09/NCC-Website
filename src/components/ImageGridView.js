// src/Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 m-10">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Images ${index + 1}`} className="object-cover w-full h-full" />
      ))}
    </div>
  );
};

export default Gallery;
