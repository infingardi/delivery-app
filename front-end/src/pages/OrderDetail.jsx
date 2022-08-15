import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBarCustomer from '../components/NavBarCustomer';
import { getLocalStorage } from '../services/localStorage';

function OrderDetail() {
  const [{ saleOrder, sales }, setOrder] = useState(
    { saleOrder: { seller: {} }, sales: [] },
  );
  const nameUser = getLocalStorage('user').name;
  const sliceString = 17;
  const id = window.location.pathname.slice(sliceString);
  useEffect(() => {
    const getOrder = async () => axios
      .get(`http://localhost:3001/sales/${id}`)
      .then((response) => setOrder(response.data));
    getOrder();
  }, []);

  const onArrivedOrder = () => {
    axios
      .put(`http://localhost:3001/sales/${id}`, {
        status: 'delivered',
      });
  };

  useEffect(() => {

  }, []);
  return (
    <main>
      <NavBarCustomer user={ nameUser } />
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
      <button
        onClick={ onArrivedOrder }
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </button>
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
