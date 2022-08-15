import { useEffect } from 'react';
import { getLocalStorage } from '../services/localStorage';
import FormRegister from '../components/FormRegister';

export default function Admin() {
  useEffect(() => {
    const verifyRole = () => {
      const localUser = getLocalStorage('user');
      setToken(localUser.token);
    };

    verifyRole();
  }, []);

  return (
    <main>
      <section className="Formulário cadastro">
        <FormRegister />
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
