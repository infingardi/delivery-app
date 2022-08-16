import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkHeader({ name, path, testid }) {
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    return navigate(path);
  };
  return (
    <li>
      <button
        type="button"
        onClick={ () => (name === 'Sair' ? clearLocalStorage() : navigate(path)) }
        data-testid={ testid }
      >
        { name }
      </button>
    </li>
  );
}

LinkHeader.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default LinkHeader;
