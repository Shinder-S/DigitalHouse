import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/ViewAllImages.css';

const ViewAllImages = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Si location.state es null, manejarlo adecuadamente
  const images = location.state?.images || [];

  if (images.length === 0) {
    return (
      <div className="view-all-images-container">
        <p>No images were found. Please return to the product page.</p>
        <button className="back-button" onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    );
  }

  return (
    <div className="view-all-images-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Go Back</button>
      <div className="images-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllImages;