import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from './mockData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(p => p.id === parseInt(id)));
      }, 800);
    });

    fetchItem.then(res => {
      setItem(res);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      {loading ? <p>Cargando producto...</p> : (item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>)}
    </div>
  );
};

export default ItemDetailContainer;
