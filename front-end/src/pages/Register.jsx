import { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validRegister, setValidRegister] = useState(true);
  const [invalidRegister, setInvalidRegister] = useState(false);

  const dataTestIds = {
    name: 'common_register__input-name',
    email: 'common_register__input-email',
    password: 'common_register__input-password',
    button: 'common_register__button-register',
    invalidFields: 'common_register__element-invalid_register',
  };

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

  const onSubmitRegister = async () => {
    await axios.post('http://localhost:3001/register', {
      name,
      email,
      password,
    });
  };

  return (
    <main>
      <h1>Register</h1>
      <form onSubmit={ (event) => event.preventDefault() }>
        <h2>Cadastrar novo usuário</h2>
        <label htmlFor="Input-name">
          <input
            className="cadastro-nome"
            value={ name }
            onChange={ (e) => handleChange(e, setName) }
            placeholder="Nome e sobrenome"
            data-testid={ dataTestIds.name }
          />
        </label>
        <label htmlFor="Input-email">
          <input
            className="cadastro-email"
            type="email"
            value={ email }
            onChange={ (e) => handleChange(e, setEmail) }
            placeholder="seu-email@site.com.br"
            data-testid={ dataTestIds.email }
          />
        </label>
        <label htmlFor="Input-password">
          <input
            className="cadastro-password"
            type="password"
            value={ password }
            onChange={ (e) => handleChange(e, setPassword) }
            placeholder="*********"
            data-testid={ dataTestIds.password }
          />
        </label>
        <button
          type="submit"
          onClick={ onSubmitRegister }
          disabled={ validRegister }
          data-testid={ dataTestIds.button }
        >
          CADASTRAR
        </button>
        { invalidRegister
      && (
        <h2
          data-testid={ dataTestIds.invalidFields }
        >
          Dados inválidos

        </h2>
      ) }
      </form>
    </main>
  );
}

export default Register;
