import React, { useEffect, useState } from 'react';

import axios from 'axios';
import CardProduct from '../components/CardProduct';
import NavBar from '../components/Navbar';

function CostumerProduct() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get('http://localhost:3001/product');

    setProducts(response.data);
    console.log(response.data);
  };

  const renderCards = () => products.map(({ id, name, price, urlImage }) => (
    <CardProduct
      key={ id }
      name={ name }
      price={ price.replace('.', ',') }
      image={ urlImage }
      id={ id }
    />
  ));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <NavBar />
      { renderCards() }
    </main>
  );
}

export default CostumerProduct;
