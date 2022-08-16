import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBarCustomer from '../components/NavBarCustomer';
import { getLocalStorage } from '../services/localStorage';
import formatDate from '../services/functions';

function OrderDetail() {
  const [{ saleOrder, sales }, setOrder] = useState(
    { saleOrder: { seller: {} }, sales: [] },
  );
  // const [arrivedOrder, setArrivedOrder] = useState(true);
  const nameUser = getLocalStorage('user').name;
  const sliceString = 17;
  const id = window.location.pathname.slice(sliceString);

  // const checkStatus = () => setArrivedOrder(saleOrder.status === 'delivered');
  const getOrder = async () => axios
    .get(`http://localhost:3001/sales/${id}`)
    .then((response) => setOrder(response.data));
    // .then(() => checkStatus());

  useEffect(() => {
    getOrder();
  }, []);

  const onArrivedOrder = async () => {
    await axios
      .put(`http://localhost:3001/sales/${id}`, {
        status: 'delivered',
      });
    await getOrder();
  };

  // useEffect(() => {
  //   checkStatus();
  // }, [saleOrder.status]);

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
        {saleOrder.saleDate && formatDate(saleOrder.saleDate)}

      </h2>
      <h2
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {saleOrder.status}

      </h2>
      <h2
        data-testid="customer_order_details__element-order-total-price"
      >
        {saleOrder.totalPrice && saleOrder.totalPrice.replace('.', ',')}

      </h2>
      <button
        onClick={ onArrivedOrder }
        disabled
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
            {s.product.price && s.product.price.replace('.', ',')}

          </p>
          <p
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            {s.product.price
              && (s.product.price * s.quantity).toString().replace('.', ',')}

          </p>
        </div>
      ))}
    </main>
  );
}

export default OrderDetail;
