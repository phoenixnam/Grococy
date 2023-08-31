import React, { useEffect, useState } from 'react';
import '../css/detail.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Sanpham = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://63aa9f0e7d7edb3ae62c5cea.mockapi.io/product');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <div className='container'>
      {categories.map((category) => (
          <div className='product' key={category.id}>
            <img src={category.avatar} alt={category.name} />
            <h3>{category.name}</h3>
            <h5>{category.description.slice(0, 70)}...</h5>
            <h4>{category.price}</h4>
            <h6>{category.discount}%</h6>
            <button className='btn'>Detail</button>
          </div>
      ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Sanpham;