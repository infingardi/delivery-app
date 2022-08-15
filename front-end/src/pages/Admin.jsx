import axios from 'axios';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';
import FormRegister from '../components/FormRegister';

export default function Admin() {
  const [token, setToken] = useState('');
  // const navigate = useNavigate();

  const url = 'http://localhost:3001/admin/manage/register';

  useEffect(() => {
    const verifyRole = () => {
      const localUser = getLocalStorage('user');
      setToken(localUser.token);
    };

    verifyRole();
    // const getUsers = async () => axios.get(url);
    // setUsers(getUsers());
  }, []);

  const onSubmitRegister = async (nameRegs, emailRegs, passwordRegs, roleRegs) => {
    await axios({
      method: 'post',
      url,
      headers: {
        authorization: token,
      },
      data: {
        name: nameRegs,
        email: emailRegs,
        password: passwordRegs,
        role: roleRegs,
      },
    });
  };

  // const onDeleteUser = async (nameDlt, passwordlDlt) => {
  //   await axios.delete(url, {
  //     name: nameDlt,
  //     password: passwordlDlt,
  //   });
  // };

  return (
    <main>
      <section className="Formulário cadastro">
        <FormRegister onSubmitRegister={ onSubmitRegister } />
      </section>
      {/* <table>
        { users
          .map(({ name: nUser, email: eUser, role: rUser }, index) => (
            <thead key={ eUser }>
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
            </thead>))}
      </table> */}
    </main>
  );
}
