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
      {console.log(dataTestIds)}
      <h2>Cadastrar novo usuário</h2>
      <label htmlFor="Input-name">
        <input
          className="cadastro-nome"
          value={ name }
          onChange={ (e) => handleChange(e, setName) }
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
        />
      </label>
      <label htmlFor="Input-email">
        <input
          className="cadastro-email"
          type="email"
          value={ email }
          onChange={ (e) => handleChange(e, setEmail) }
          placeholder="seu-email@site.com.br"
          data-testid="admin_manage__input-email"
        />
      </label>
      <label htmlFor="Input-password">
        <input
          className="cadastro-password"
          type="password"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          placeholder="*********"
        />
      </label>

      <button
        data-testid="admin_manage__button-register"
        type="submit"
        onClick={ () => onSubmitRegister(name, email, password) }
        disabled={ validRegister }
      >
        CADASTRAR
      </button>
      { invalidRegister
      && (<h2 data-testid={ dataTestIds.invalidFields }>Dados inválidos</h2>) }
    </form>
  );
}

export default FormRegister;

FormRegister.propTypes = {
  dataTestIds: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmitRegister: PropTypes.func.isRequired,
};
