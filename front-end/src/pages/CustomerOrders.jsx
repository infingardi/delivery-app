import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBarCustomer from '../components/NavBarCustomer';

function CustomerOrders() {
  const [user, setUser] = useState();
  const [purchases, setPurchases] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getLocalStorage('user');
    if (!userData) return navigate('/');
    setUser(userData.name);

    const getPurchases = async () => {
      const resId = await axios
        .post('http://localhost:3000/userid', {
          email: userData.email,
          name: userData.user,
        });
      const resPurchases = await axios
        .post('http://localhost:3000/orders/customer', {
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
        <div key={ p.id }>
          <p data-testid="">{p.id}</p>
          <p data-testid="">{p.name}</p>
          <p data-testid="">{p.totalPrice}</p>
          <p data-testid="">{p.status}</p>
        </div>
      ))}
    </main>
  );
}

export default CustomerOrders;
