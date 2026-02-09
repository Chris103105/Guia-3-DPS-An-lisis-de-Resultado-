import React from 'react';
import ProductList from './components/ProductList';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Lista de Productos de Tienda </h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;