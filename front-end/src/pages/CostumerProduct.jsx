import React, { useEffect, useState } from 'react';

import axios from 'axios';
import CardProduct from '../components/CardProduct';
import NavBar from '../components/Navbar';

function CostumerProduct() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:3001/product');

    setProducts(response.data);
  };

  const changeTotalPrice = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));

    let total = 0;
    Object.values(cart).forEach(({ quantity, price }) => {
      total += quantity * price;
    });

    setTotalPrice(total);
  };

  const renderCards = () => products.map(({ id, name, price, urlImage }) => (
    <CardProduct
      key={ id }
      name={ name }
      price={ price }
      image={ urlImage }
      id={ id }
      changeTotalPrice={ changeTotalPrice }
    />
  ));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <NavBar />
      { renderCards() }
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        { totalPrice.toFixed(2).replace('.', ',') }
      </button>
    </main>
  );
}

export default CostumerProduct;
