import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
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
          ({ status, saleDate, deliveryNumber, deliveryAddress, totalPrice }, index) => (
            <div key={ index }>
              <h4 data-testid={ `seller_orders__element-order-id-${index + 1}` }>
                {index}
              </h4>
              <h4 data-testid={ `seller_orders__element-delivery-status-${index + 1}` }>
                {status}
              </h4>
              <h4 data-testid={ `seller_orders__element-order-date-${index + 1}` }>
                {saleDate}
              </h4>
              {/* <h4 data-testid={``}>{deliveryNumber}</h4> */}
              <h4 data-testid={ `seller_orders__element-card-address-${index + 1}` }>
                {deliveryAddress}
              </h4>
              <h4 data-testid={ `seller_orders__element-card-price-${index + 1}` }>
                {totalPrice}
              </h4>
            </div>
          ),
        )}
      </section>
    </main>
  );
}

export default SellerOrders;
