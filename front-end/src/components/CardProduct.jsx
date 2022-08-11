import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CardProduct({ name, price, image, id }) {
  const [quantity, setQuantity] = useState(0);

  const verifyValidQuantity = () => {
    if (quantity >= 1) setQuantity(quantity - 1);
  };

  return (
    <main>
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h2>
      <h3 data-testid={ `customer_products__element-card-price-${id}` }>
        {price}
      </h3>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ name }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => verifyValidQuantity() }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        readOnly
        type="text"
        value={ quantity }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => setQuantity(quantity + 1) }
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
};

export default CardProduct;
