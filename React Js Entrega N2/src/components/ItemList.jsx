import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="mt-4">No hay productos en esta categoría.</p>;
  }

  return (
    <div className="row mt-4">
      {items.map(item => (
        <div className="col-md-4 mb-3" key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
