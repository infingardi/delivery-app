import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';
import FormRegister from '../components/FormRegister';

export default function Admin() {
  const [role, setRole] = useState('');
  const [users, setUsers] = useState('');
  console.log(users);
  const navigate = useNavigate();

  const url = 'http://localhost:3001/admin/manage';

  useEffect(() => {
    const verifyRole = () => {
      const user = getLocalStorage('user');
      if (!user) return navigate('/');
      if (user.role !== 'administrator') return navigate('/');
    };
    verifyRole();
    const getUsers = async () => axios.get(url);

    setUsers(getUsers());
  }, []);

  const onSubmitRegister = async (nameRegs, emailRegs, passwordRegs) => {
    await axios.post(url, {
      name: nameRegs,
      email: emailRegs,
      password: passwordRegs,
      role,
    });
  };

  // const onDeleteUser = async (nameDlt, emailDlt) => {
  //   await axios.delete(url, {
  //     name: nameDlt,
  //     email: emailDlt,
  //   });
  // };

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

        <select
          name="tipo"
          data-testid="admin_manage__select-role"
          onChange={ (e) => setRole(e.target.value) }
        >
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
          <option value="customer">Usuário</option>
        </select>
      </section>
      {/* <ul>
        {users
          .map(({ name: nUser, email: eUser, role: rUser }, index) => (
            <li key={ eUser }>
              <p
                data-testid="admin_manage__element-user-table-item-number"
              >
                {index + 1}

              </p>
              <h4>{nUser}</h4>
              <h4>{eUser}</h4>
              <h4>{rUser}</h4>
              <button
                type="submit"
                onClick={ onDeleteUser(nUser, eUser) }
                data-testid="admin_manage__element_user-table-remove"
              >
                EXCLUIR
              </button>
            </li>))}
      </ul> */}
    </main>
  );
}
