import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getProduct } from '../../Data/asyncMock'


export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
      <h1>Detalle del producto {id}</h1>
      <p>ID: {product.id}</p>
      <h3>Nombre: {product.nombre}</h3>
      <img src={product.img} alt="" />
      <p>Category: {product.category}</p>
      <p>Precio ${product.precio}</p>
    </>
  );
}

