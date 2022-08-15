import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductDetail() {
  const [order, setOrder] = useState({});
  useEffect(() => {
    const noMagicNumber = 17;
    const id = window.location.pathname.slice(noMagicNumber);
    const getProducts = async () => axios.get(`http://localhost:3001/sales/${id}`);
    setOrder(getProducts().data);
  }, []);
  return (
    <main>
      <h2>{order.name}</h2>
    </main>
  );
}

export default ProductDetail;
