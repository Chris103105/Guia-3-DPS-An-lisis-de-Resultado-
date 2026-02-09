    import React from 'react';

    const ProductItem = ({ productId, productName, price, imageUrl }) => {
    return (
        <div className="product-item">
        
        <span className="product-id">#{productId}</span>

        <img 
            src={imageUrl || "https://via.placeholder.com/50"} 
            alt={productName} 
            className="product-thumbnail"
        />
        
        <div className="product-info">
            <span className="product-name">{productName}</span>
            <span className="product-price">${Number(price).toFixed(2)}</span>
        </div>
        </div>
    );
    };

    export default ProductItem;