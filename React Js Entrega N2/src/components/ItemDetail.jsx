import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="card" style={{ maxWidth: 800 }}>
      <div className="card-body">
        <h3 className="card-title">{item.nombre}</h3>
        <p className="card-text"><strong>Categoría:</strong> {item.categoria}</p>
        <p className="card-text"><strong>Precio:</strong> ${item.precio}</p>
        <p className="card-text">{item.descripcion}</p>
        <ItemCount stock={10} />
      </div>
    </div>
  );
};

export default ItemDetail;
