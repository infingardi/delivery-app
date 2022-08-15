import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBarCustomer from '../components/NavBarCustomer';
import { getLocalStorage } from '../services/localStorage';

function OrderDetail() {
  const [{ saleOrder, sales }, setOrder] = useState(
    { saleOrder: { seller: {} }, sales: [] },
  );
  const nameUser = getLocalStorage('user').name;
  useEffect(() => {
    const noMagicNumber = 17;
    const id = window.location.pathname.slice(noMagicNumber);

    axios
      .get(`http://localhost:3001/sales/${id}`)
      .then((response) => setOrder(response.data));
  }, []);
  return (
    <main>
      <NavBarCustomer user={ nameUser } />
      {console.log({ saleOrder, sales })}
      <h2
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {saleOrder.id}

      </h2>
      <h2
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {saleOrder.seller.name}

      </h2>
      <h2
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {saleOrder.saleDate}

      </h2>
      <h2
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {saleOrder.status}

      </h2>
      <h2
        data-testid="customer_order_details__element-order-total-price"
      >
        {saleOrder.totalPrice}

      </h2>
      {sales.map((s, index) => (
        <div key={ s.id }>

          <h5
            data-testid={
              `customer_order_details__element-order-table-item-number-${index}`
            }
          >
            {index}

          </h5>
          <h5
            data-testid={ `customer_order_details__element-order-table-name-${index}` }
          >
            {s.product.name}

          </h5>
          <p
            data-testid={
              `customer_order_details__element-order-table-quantity-${index}`
            }
          >
            {s.quantity}

          </p>
          <p
            data-testid={
              `customer_order_details__element-order-table-unit-price-${index}`
            }
          >
            {s.product.price}

          </p>
          <p
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            {Number(s.product.price) * Number(s.quantity)}

          </p>
        </div>
      ))}
    </main>
  );
}

export default OrderDetail;
