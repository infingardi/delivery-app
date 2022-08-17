import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';
import NavBarSeller from '../components/NavBarSellers';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const userData = getLocalStorage('user');
    const { email, name } = userData;
    const getSales = async () => {
      const resId = await axios
        .post('http://localhost:3001/userid', {
          email,
          name,
        });
      const resSales = await axios
        .post('http://localhost:3001/sales/seller', {
          id: resId.data.id,
        });

      setSales(resSales.data);
    };
    getSales();
  }, []);
  return (
    <main>

      <NavBarSeller />
      <section>
        {sales.map(
          ({ status, id, saleDate, deliveryAddress, totalPrice }) => (
            <Link to={ `${id}` } key={ id }>
              <h4 data-testid={ `seller_orders__element-order-id-${id}` }>
                {id}
              </h4>
              <h4 data-testid={ `seller_orders__element-delivery-status-${id}` }>
                {status}
              </h4>
              <h4 data-testid={ `seller_orders__element-order-date-${id}` }>
                {saleDate}
              </h4>
              <h4 data-testid={ `seller_orders__element-card-address-${id}` }>
                {deliveryAddress}
              </h4>
              <h4 data-testid={ `seller_orders__element-card-price-${id}` }>
                {totalPrice}
              </h4>
            </Link>
          ),
        )}
      </section>
    </main>
  );
}

export default SellerOrders;
