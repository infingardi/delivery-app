import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import NavBarSeller from '../components/NavBarSellers';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => axios.get('localhost:3001/seller/orders');
    console.log('entrou');
    setSales(getSales());
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
