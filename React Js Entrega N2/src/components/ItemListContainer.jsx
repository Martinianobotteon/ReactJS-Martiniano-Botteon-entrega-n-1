import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from './mockData';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaId) {
          resolve(productos.filter(p => p.categoria === categoriaId));
        } else {
          resolve(productos);
        }
      }, 800);
    });

    fetchProducts.then(res => {
      setItems(res);
      setLoading(false);
    });
  }, [categoriaId]);

  return (
    <div className="text-center">
      <h2>{greeting}</h2>
      {loading ? <p className="mt-4">Cargando productos...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
