import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';

// localhost:3000/seller/orders

function NavbarSeller() {
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);
  const [sellerName, setSellerName] = useState('');

  function removeLocalStorageAndLogout() {
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    const obj = getLocalStorage('user');
    setSellerName(obj.name);
    const getSales = async () => axios.get('localhost:3001/seller/orders');
    setSales(getSales());
  }, []);

  return (
    <main>
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
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ removeLocalStorageAndLogout }
        >
          Sair
        </button>
      </header>
      <section>
        {sales.map(
          ({ status, saleDate, deliveryNumber, deliveryAddress, totalPrice }, index) => (
            <div key={ index }>
              <h4>{status}</h4>
              <h4>{saleDate}</h4>
              <h4>{deliveryNumber}</h4>
              <h4>{deliveryAddress}</h4>
              <h4>{totalPrice}</h4>
            </div>
          ),
        )}
      </section>
    </main>
  );
}
export default NavbarSeller;
