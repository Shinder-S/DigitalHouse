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

    // Enviar datos al backend
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
        // Manejar el éxito
        alert('Producto agregado correctamente');
      } else if (response.status === 409) {
        setErrorMessage('El nombre del producto ya está en uso.');
      } else {
        setErrorMessage('Error al agregar el producto.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Agregar Producto</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del producto</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Imágenes del producto</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
          />
        </div>

        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};

export default AddProduct;
