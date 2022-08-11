import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FormRegister(props) {
  const { dataTestIds, onSubmitRegister } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validRegister, setValidRegister] = useState(true);
  const [invalidRegister, setInvalidRegister] = useState(false);

  useEffect(() => {
    const validateFields = () => {
      const minNameLength = 11;
      const regexEmail = /\S+@\S+\.\S+/;
      const minPasswordLength = 5;
      if (name.length > minNameLength && regexEmail
        .test(email) && password.length > minPasswordLength) {
        return setValidRegister(false);
      }
      setValidRegister(true);
    };

    validateFields();
  }, [email, password, name]);

  const handleChange = (event, setAttr) => {
    setInvalidRegister(false);
    setAttr(event.target.value);
  };

  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <h2>Cadastrar novo usuário</h2>
      <label htmlFor="Input-name">
        <input
          className="cadastro-nome"
          value={ name }
          onChange={ (e) => handleChange(e, setName) }
          placeholder="Nome e sobrenome"
          data-testid={ dataTestIds['1'] }
        />
      </label>
      <label htmlFor="Input-email">
        <input
          className="cadastro-email"
          type="email"
          value={ email }
          onChange={ (e) => handleChange(e, setEmail) }
          placeholder="seu-email@site.com.br"
          data-testid={ dataTestIds['2'] }
        />
      </label>
      <label htmlFor="Input-password">
        <input
          className="cadastro-password"
          type="password"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          placeholder="*********"
          data-testid={ dataTestIds['3'] }
        />
      </label>
      <select
        data-testid="admin_manage__select_role"
        type="select"
        // onClick={ (event) => login(event) }
        placeholder="Vendedor"
      >
        Tipo
      </select>
      <button
        data-testid={ dataTestIds['4'] }
        type="submit"
        onClick={ () => onSubmitRegister(name, email, password) }
        disabled={ validRegister }
      >
        CADASTRAR
      </button>
      { invalidRegister && <h2>Dados inválidos</h2> }
    </form>
  );
}

export default FormRegister;

FormRegister.propTypes = {
  dataTestIds: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmitRegister: PropTypes.func.isRequired,
};
