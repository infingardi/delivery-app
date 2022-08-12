import { useNavigate } from 'react';
import PropTypes from 'prop-types';

function NavBarCustomer(props) {
  const { user } = props;
  const navigate = useNavigate();

  return (
    <header>
      <h2>Meus Pedidos</h2>
      <h2>Produtos</h2>
      <h2>{user}</h2>
      <button type="button" onClick={ navigate('/') }>
        Sair
      </button>
    </header>
  );
}

export default NavBarCustomer;

NavBarCustomer.propTypes = {
  user: PropTypes.string.isRequired,
};
