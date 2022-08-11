import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import setLocalStorage from '../services/setLocalStorage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validLogin, setValidLogin] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const navigate = useNavigate();
  // Remove dados do usuário ao entrar na pagina de login (logout)
  useEffect(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
  }, []);

  useEffect(() => {
    const validateFields = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      const minPasswordLength = 5;
      if (regexEmail.test(email) && password.length > minPasswordLength) {
        return setDisableBtn(false);
      }
      return setDisableBtn(true);
    };

    validateFields();
  }, [email, password]);

  const sucessLogin = (response) => {
    setLocalStorage('user', response.data);

    if (response.data.role === 'administrator') return navigate('/admin/manage');
    if (response.data.role === 'seller') return navigate('/seller');
    return navigate('/customer/products');
  };

  const onSubmitLogin = async () => {
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((response) => sucessLogin(response))
      .catch(() => setValidLogin(true));
  };

  const handleChange = (event, setAttr) => {
    setValidLogin(false);
    setAttr(event.target.value);
  };

  return (
    <main>
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="login">
          Login
          <input
            id="login"
            value={ email }
            onChange={ (e) => handleChange(e, setEmail) }
            placeholder="Digite seu usuário"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            value={ password }
            onChange={ (e) => handleChange(e, setPassword) }
            type="password"
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="submit"
          onClick={ onSubmitLogin }
          data-testid="common_login__button-login"
          disabled={ disableBtn }
        >
          Login
        </button>
        <button
          type="submit"
          onClick={ () => navigate('/register') }
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      { validLogin && (
        <h3
          data-testid="common_login__element-invalid-email"
        >
          Login Inválido
        </h3>
      ) }
    </main>
  );
}

export default Login;
