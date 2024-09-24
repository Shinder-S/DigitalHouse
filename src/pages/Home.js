import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const productsArray = [
    { id: 1, name: 'Product 1', description: 'Product description 1', images: [require('../pic/backpackers.jpg')]  },
    { id: 2, name: 'Product 2', description: 'Product description 2', images: [require('../pic/beach-house.jpg')]  },
    { id: 3, name: 'Product 3', description: 'Product description 3', images: [require('../pic/enter.jpg')]  },
    { id: 4, name: 'Product 4', description: 'Product description 4', images: [require('../pic/hallway.jpg')]  },
    { id: 5, name: 'Product 5', description: 'Product description 5', images: [require('../pic/home.jpg')]  },
    { id: 6, name: 'Product 6', description: 'Product description 6', images: [require('../pic/house-on-the-breakwater.jpg')]  },
    { id: 7, name: 'Product 7', description: 'Product description 7', images: [require('../pic/house-forest.jpg')]  },
    { id: 8, name: 'Product 8', description: 'Product description 8', images: [require('../pic/old-house.jpg')]  },
    { id: 9, name: 'Product 9', description: 'Product description 9', images: [require('../pic/pointer.jpg')]  },
    { id: 10, name: 'Product 10', description: 'Product description 10', images: [require('../pic/seafaring-bed.jpg')]  },
    { id: 11, name: 'Product 11', description: 'Product description 11', images: [require('../pic/trip.jpg')]  },
    { id: 12, name: 'Product 12', description: 'Product description 12', images: [require('../pic/venece.jpg')]  },
  ];

  const getRandomProducts = (productsArray, num) => {
    const shuffled = [...productsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    const randomProducts = getRandomProducts(productsArray, 10);
    setProducts(randomProducts);
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="home-container">
      <h2>Recommended products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.images[0]} alt={product.name} className="product-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;