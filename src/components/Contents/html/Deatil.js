import React from 'react';

const ProductDetail = ({ match }) => {
  const categoryId = match.params.id;
  const products = [
    { id: 1, category: 'vegetable', image: 'https://tepbac.com/upload/news/ge_image/2022/09/2_1663666420.jpg', discount: 'upto 45% off', shop: 'Shop Now' },
    { id: 2, category: 'vegetable', image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/19/1025152/Kiem-Tra-Ca-Tuoi-Son-01.jpg', discount: 'upto 45% off', shop: 'Shop Now' },
    { id: 3, category: 'vegetable', image: 'https://tepbac.com/upload/news/ge_image/2022/09/2_1663666420.jpg', discount: 'upto 45% off', shop: 'Shop Now' },
    { id: 4, category: 'vegetable', image: 'https://tepbac.com/upload/news/ge_image/2022/09/2_1663666420.jpg', discount: 'upto 45% off', shop: 'Shop Now' },
    { id: 5, category: 'vegetable', image: 'https://tepbac.com/upload/news/ge_image/2022/09/2_1663666420.jpg', discount: 'upto 45% off', shop: 'Shop Now' },
  ];

  const product = products.find((product) => product.id === parseInt(categoryId));

  return (
    <div>
      {product ? (
        <div className="box">
          <img src={product.image} alt="" />
          <h3>{product.category}</h3>
          <p>{product.discount}</p>
          <a href="#" className="btn">{product.shop}</a>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;