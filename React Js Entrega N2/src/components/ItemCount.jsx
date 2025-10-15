import React, { useState } from 'react';

const ItemCount = ({ stock = 10 }) => {
  const [cantidad, setCantidad] = useState(1);
  const aumentar = () => setCantidad(prev => Math.min(prev + 1, stock));
  const disminuir = () => setCantidad(prev => Math.max(prev - 1, 1));

  const agregar = () => {
    alert(`Agregaste ${cantidad} unidades al carrito (simulado).`);
  };

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary btn-sm" onClick={disminuir}>-</button>
        <span>{cantidad}</span>
        <button className="btn btn-outline-secondary btn-sm" onClick={aumentar}>+</button>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={agregar}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
