import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">Precio: ${item.precio}</p>
        <p className="text-muted">{item.categoria}</p>
        <div className="mt-auto">
          <Link to={`/item/${item.id}`} className="btn btn-sm btn-primary">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
