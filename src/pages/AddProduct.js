import React, { useState } from 'react';
import '../style/AddProduct.css';  


const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', description);
    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Managing success
        alert('Product added correctly');
      } else if (response.status === 409) {
        setErrorMessage('The product name is already in use.');
      } else {
        setErrorMessage('Error when adding the product.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Product images</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
          />
        </div>

        <button type="submit">Save Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
