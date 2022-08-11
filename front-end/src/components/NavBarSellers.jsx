import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';

function NavbarSeller() {
  const navigate = useNavigate();
  const [sellerName, setSellerName] = useState('');

  function removeLocalStorageAndLogout() {
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    const obj = getLocalStorage('user');
    setSellerName(obj.name);
  }, []);

  return (
    <header>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => navigate('/seller/orders') }
      >
        PEDIDOS
      </button>
      <span data-testid="customer_products__element-navbar-user-full-name">
        {sellerName}
      </span>
      <button
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ removeLocalStorageAndLogout }
      >
        Sair
      </button>
    </header>

  );
}
export default NavbarSeller;
