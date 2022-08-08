import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validLogin, setValidLogin] = useState(false);
  const navigate = useNavigate();

  const onSubmitLogin = () => {
    try {
      const response = axios
        .get('http://localhost:3001/login')
        .send({
          email,
          password,
        });
      if (response.data.role === 'administrator') return navigate('');
      if (response.data.role === 'seller') return navigate('');
      return navigate('');
    } catch (error) {
      setValidLogin(true);
    }
  };

  const validateFields = () => {
    const regexEmail = /\S+@\S+\.\S+/;
    const minPasswordLength = 6;
    if (regexEmail.test(email) || password.length < minPasswordLength) {
      return setValidLogin(true);
    }
    onSubmitLogin();
  };

  const onSubmitRegistration = () => {
    navigate('');
  };

  return (
    <main>
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="login">
          Login
          <input
            id="login"
            value={ email }
            onChange={ (e) => { setValidLogin(false); setEmail(e.target.value); } }
            placeholder="Digite seu usuário"
            data-testid="1"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            value={ password }
            onChange={ (e) => { setValidLogin(false); setPassword(e.target.value); } }
            type="password"
            data-testid="2"
          />
        </label>
        <button
          type="submit"
          onClick={ validateFields }
          data-testid="3"
        >
          Login
        </button>
        <button
          type="submit"
          onClick={ onSubmitRegistration }
          data-testid="4"
        >
          Ainda não tenho conta
        </button>
      </form>
      {validLogin && <h3 data-testid="5">Login Inválido</h3>}
    </main>
  );
}

export default Login;
