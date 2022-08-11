import axios from 'axios';
import FormRegister from '../components/FormRegister';

function Register() {
  dataTestIds = {
    name: 'common_register__input-name',
    email: 'common_register__input-email',
    password: 'common_register__input-password',
    button: 'common_register__button-register',
    invalidFields: 'common_register__element-invalid_register',
  };

  onSubmitRegister = async (name, email, password) => {
    await axios.post('http://localhost:3001/register', {
      name,
      email,
      password,
    });
  };

  return (
    <main>
      <h1>Register</h1>
      <FormRegister dataTestIds={ dataTestIds } />
    </main>
  );
}

export default Register;
