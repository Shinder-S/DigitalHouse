import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AdminPanel.css';

const AdminPanel = () => {
    const navigate = useNavigate(); // New hook of react-router-dom v6

    const navigateToAddProduct = () => {
      navigate('/admin/add-product'); // Redirect to the add product page
    };
  
    return (
      <div className="admin-container">
        <button onClick={navigateToAddProduct}>Add products</button>
        {/*  */}
      </div>
    );
  };

export default AdminPanel;