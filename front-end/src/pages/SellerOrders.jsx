import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import NavBarSeller from '../components/NavBarSellers';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/seller/orders')
      .then((response) => setSales(response.data));
  }, []);
  return (
    <main>

      <NavBarSeller />
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

export default SellerOrders;
