import React, { useEffect } from 'react';

import LinkHeader from './LinkHeader';

function NavBar() {
  useEffect(() => {

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
        name="Nome"
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
