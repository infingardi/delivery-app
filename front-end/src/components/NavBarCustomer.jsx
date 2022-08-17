import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function NavBarCustomer(props) {
  const { user } = props;
  const navigate = useNavigate();

  function removeLocalStorageAndLogout() {
    localStorage.clear();
    navigate('/');
  }

  return (
    <header>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos

      </Link>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos

      </Link>
      <h2 data-testid="customer_products__element-navbar-user-full-name">{user}</h2>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ removeLocalStorageAndLogout }
      >
        Sair
      </button>
    </header>
  );
}

export default NavBarCustomer;

NavBarCustomer.propTypes = {
  user: PropTypes.string.isRequired,
};
