import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem', 
      backgroundColor: '#f4f4f4'
    }}>
      {/* Logo */}
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        MiTienda
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="/">Inicio</a>
        <a href="/productos">Productos</a>
        <a href="/contacto">Contacto</a>
      </div>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
