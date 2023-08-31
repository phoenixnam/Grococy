import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://63aa9f0e7d7edb3ae62c5cea.mockapi.io/product/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Detail Page</h1>
      <h2>ID: {id}</h2>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Discount: {product.discount}</p>
      </div>
    </>
  );
};

export default DetailPage;