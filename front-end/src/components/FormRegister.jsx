import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FormRegister(props) {
  const { onSubmitRegister } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
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
  }, [email, password, name, role]);

  const handleChange = (event, setAttr) => {
    setInvalidRegister(false);
    setAttr(event.target.value);
  };

  const handleDelete = () => {
    onSubmitRegister(name, email, password, role);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <h2>Cadastrar novo usuário</h2>
      <label htmlFor="Input-name">
        Nome
        <input
          label="Nome"
          className="cadastro-nome"
          value={ name }
          onChange={ (e) => handleChange(e, setName) }
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
        />
      </label>
      <label htmlFor="Input-email">
        Email
        <input
          label="Email"
          className="cadastro-email"
          type="email"
          value={ email }
          onChange={ (e) => handleChange(e, setEmail) }
          placeholder="seu-email@site.com.br"
          data-testid="admin_manage__input-email"
        />
      </label>
      <label htmlFor="Input-password">
        Senha
        <input
          label="Senha"
          className="cadastro-password"
          type="password"
          value={ password }
          onChange={ (e) => handleChange(e, setPassword) }
          placeholder="*********"
          data-testid="admin_manage__input-password"
        />
      </label>
      <label htmlFor="Select-type">
        <select
          label="Tipo"
          data-testid="admin_manage__select-role"
          onChange={ (e) => setRole(e.target.value) }
        >
          <option value="administrator">Administrador</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </select>
      </label>
      <button
        data-testid="admin_manage__button-register"
        type="submit"
        onClick={ () => handleDelete() }
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
  onSubmitRegister: PropTypes.func.isRequired,
};
