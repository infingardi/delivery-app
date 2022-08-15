import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBarCustomer from '../components/NavBarCustomer';
import { getLocalStorage } from '../services/localStorage';

function CustomerOrders() {
  const [user, setUser] = useState('');
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getLocalStorage('user');
    if (!userData) return navigate('/');
    setUser(userData.name);

    const getPurchases = async () => {
      const resId = await axios
        .post('http://localhost:3001/userid', {
          email: userData.email,
          name: userData.name,
        });
      const resPurchases = await axios
        .post('http://localhost:3001/sales/customer', {
          id: resId.data.id,
        });
      setPurchases(resPurchases.data);
    };
    getPurchases();
  }, []);

  return (
    <main>
      <NavBarCustomer user={ user } />
      <h1>Customer Purchase</h1>
      {purchases.map((p) => (
        <Link
          to={ `${p.id}` }
          key={ p.id }
        >
          <p data-testid={ `customer_orders__element-order-id-${p.id}` }>{p.id}</p>
          <p data-testid={ `customer_orders__element-order-date-${p.id}` }>
            {p.saleDate}
          </p>
          <p data-testid={ `customer_orders__element-card-price-${p.id}` }>
            {p.totalPrice}
          </p>
          <p data-testid={ `customer_orders__element-delivery-status-${p.id}` }>
            {p.status}
          </p>
        </Link>
      ))}

    </main>
  );
}

export default CustomerOrders;
