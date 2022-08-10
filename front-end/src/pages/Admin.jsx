import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';
import FormRegister from '../components/FormRegister';

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyRole = () => {
      const user = getLocalStorage('user');
      if (user.role !== 'admin') return navigate('/');
    };
    verifyRole();
  }, []);

  const onSubmitRegister = async (name, email, password) => {
    await axios.post('http://localhost:3001/admin/manage', {
      name,
      email,
      password,
    });
  };

  const dataTestIds = {
    1: 'admin_manage__input_name',
    2: 'admin_manage__input_email',
    3: 'admin_manage__input_password',
    4: 'admin_manage__button_register',
  };

  return (
    <main>
      <section className="Formulário cadastro">
        <FormRegister dataTestIds={ dataTestIds } onSubmitRegister={ onSubmitRegister } />
        {/* <button
            type="submit"
            onClick={  }
            data-testid="admin_manage__element_user-table-remove"
          >
            EXCLUIR
          </button> */}
      </section>
    </main>
  );
}
