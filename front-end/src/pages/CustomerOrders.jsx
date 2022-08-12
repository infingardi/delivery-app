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
        .get('http://localhost:3000/userid', {
          email: userData.email,
          name: userData.user,
        });
      console.log(resId);
      const resPurchases = await axios
        .get('http://localhost:3000/purchases', {
          id: resId.data.id,
        });
      console.log(resPurchases);

      setPurchases(resPurchases.data);
    };
    getPurchases();
  }, []);

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
        </div>
      ))}
    </main>
  );
}

export default CustomerOrders;
