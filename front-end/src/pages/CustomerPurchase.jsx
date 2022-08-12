import axios from 'axios';
import NavBarCustomer from '../components/NavBarCustomer';

function CustomerPurchase() {
  const [user, setUser] = useState();
  const [purchases, setPurchases] = useState();

  useEffect(() => {
    const userData = getLocalStorage('user');
    if (!userData) return navigate('/');
    setUser(userData.name);
    axios
      .get('http://localhost:3000/customer/orders', {
        email,
        name: user,
      })
      .then((response) => setPurchases(response));
  });

  return (
    <main>
      <NavBarCustomer user={ user } />
      <h1>Customer Purchase</h1>
      {purchases.map((p, index) => (
        <div key={ index }>
          <p>{index}</p>
          <p>{p.name}</p>
          <p>{p.totalPrice}</p>
          <p>{p.status}</p>
          <p>{p.quantity}</p>
        </div>
      ))}
    </main>
  );
}

export default CustomerPurchase;
