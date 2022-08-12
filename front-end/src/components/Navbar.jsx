import React, { useEffect, useState } from 'react';

import LinkHeader from './LinkHeader';

function NavBar() {
  const [name, setName] = useState('');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    setName(user.name);
  }, []);
  return (
    <nav>
      <LinkHeader
        name="Produtos"
        path="/customer/products"
        testid="customer_products__element-navbar-link-products"
      />

      <LinkHeader
        name="Meus Pedidos"
        path="/customer/orders"
        testid="customer_products__element-navbar-link-orders"
      />

      <LinkHeader
        name={ name }
        path="/profile"
        testid="customer_products__element-navbar-user-full-name"
      />

      <LinkHeader
        name="Sair"
        path="/login"
        testid="customer_products__element-navbar-link-logout"
      />
    </nav>
  );
}

export default NavBar;
