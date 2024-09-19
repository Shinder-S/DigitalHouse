import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state.product;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="product-detail-container">
      <header className="product-header">
        <h1 className="product-title">{product.name}</h1>
        <button className="back-button" onClick={goBack}>← Go back</button>
      </header>
      <div className="product-body">
        <p className="product-description">{product.description}</p>
        <div className="product-images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Producto ${index + 1}`} className="product-image" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;