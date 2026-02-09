import React, { useState } from 'react';
import ProductItem from './ProductItem';


const ProductList = () => {

  const [products, setProducts] = useState([
    { 
      productId: 1, 
      productName: 'Laptop Gamer', 
      price: 1200.00, 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png' 
    },
    { 
      productId: 2, 
      productName: 'Smartphone', 
      price: 800.00, 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/644/644458.png' 
    },
  ]);

  const [newProduct, setNewProduct] = useState({ 
    productName: '', price: '', imageUrl: '' 
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  
  const addProduct = (e) => {
    e.preventDefault();
    if (!newProduct.productName.trim() || !newProduct.price.trim()) return;

   
    const maxId = products.length > 0 
        ? Math.max(...products.map(p => p.productId)) 
        : 0;

    const nextId = maxId + 1;

    setProducts([...products, {
        productId: nextId, 
        productName: newProduct.productName,
        price: parseFloat(newProduct.price),
        imageUrl: newProduct.imageUrl
    }]);
    
    setNewProduct({ productName: '', price: '', imageUrl: '' });
  };
 

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.productId !== id));
  };

  return (
    <div className="App">
      <h2>Gestión de Inventario</h2>

      <form onSubmit={addProduct}>
        <div className="input-container">
          <input type="text" name="productName" placeholder="Nombre Producto" value={newProduct.productName} onChange={handleChange} autoComplete="off" />
          <input type="text" name="imageUrl" placeholder="URL Imagen" value={newProduct.imageUrl} onChange={handleChange} autoComplete="off" />
          <input type="number" name="price" placeholder="Precio" value={newProduct.price} onChange={handleChange} min="0" />
          <button type="submit" className="agregar" title="Agregar">+</button>
        </div>
      </form>

      <h3>Lista de Productos ({products.length})</h3>
      <div className="product-list">
        {products.length === 0 ? (
           <p className="empty-message">No hay productos aún.</p>
        ) : (
           products.map((item) => (
             <div key={item.productId} className="row-wrapper">
               <ProductItem
                 productId={item.productId}
                 productName={item.productName}
                 price={item.price}
                 imageUrl={item.imageUrl}
               />
               <button className="eliminar" onClick={() => deleteProduct(item.productId)}>×</button>
             </div>
           ))
        )}
      </div>
    </div>
  );
};

export default ProductList;