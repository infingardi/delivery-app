import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validLogin, setValidLogin] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const navigate = useNavigate();

  const onSubmitLogin = () => {
    try {
      const response = axios
        .get('http://localhost:3001/login')
        .send({
          email,
          password,
        });
      if (response.data.role === 'administrator') return navigate('/admin/manage');
      if (response.data.role === 'seller') return navigate('/seller');
      return navigate('/user');
    } catch (error) {
      setValidLogin(true);
    }
  };

  const validateFields = () => {
    const regexEmail = /\S+@\S+\.\S+/;
    const minPasswordLength = 5;
    if (regexEmail.test(email) && password.length > minPasswordLength) {
      return setDisableBtn(false);
    }
    return setDisableBtn(true);
  };

  useEffect(() => { validateFields(); }, [email, password]);

  const onSubmitRegistration = () => {
    navigate('/register');
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
            data-testid="1"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            value={ password }
            onChange={ (e) => handleChange(e, setPassword) }
            type="password"
            data-testid="2"
          />
        </label>
        <button
          type="submit"
          onClick={ onSubmitLogin }
          data-testid="3"
          disabled={ disableBtn }
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
