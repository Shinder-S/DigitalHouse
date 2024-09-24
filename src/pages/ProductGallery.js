import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ProductGallery.css';

const ProductGallery = ({ images }) => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/view-all-images', { state: { images } });
  };

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={images[0]} alt="Principal" />
      </div>

      <div className="thumbnail-grid">
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="thumbnail">
            <img src={image} alt={`Aditional ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="view-more-button" onClick={handleViewMoreClick}>
        See More
      </button>
    </div>
  );
};

export default ProductGallery;