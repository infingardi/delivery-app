import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CardProduct({ name, price, image, id, changeTotalPrice }) {
  const [quantity, setQuantity] = useState(0);

  const verifyValidQuantity = (value) => {
    const reg = /\d+/g;
    if (value === '') setQuantity(0);
    if (typeof value === 'string') value = parseInt(value, 10);
    if (value >= 0 && reg.test(value)) setQuantity(value);
  };

  useEffect(() => {
    // Cria o localStorage do carrinha de compras, ou cria caso não exista
    const cartJson = JSON.parse(localStorage.getItem('carrinho')) || {};
    cartJson[name] = { quantity, price, id };
    if (quantity === 0) delete cartJson[name];

    localStorage.setItem('carrinho', JSON.stringify(cartJson));
    changeTotalPrice();
  }, [quantity]);

  return (
    <main>
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h2>
      <h3 data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </h3>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ name }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => verifyValidQuantity(quantity - 1) }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="text"
        value={ quantity }
        onChange={ ({ target }) => verifyValidQuantity(target.value) }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => verifyValidQuantity(quantity + 1) }
      >
        +
      </button>
    </main>
  );
}

CardProduct.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  changeTotalPrice: PropTypes.func.isRequired,
};

export default CardProduct;
