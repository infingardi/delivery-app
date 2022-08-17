import FormRegister from '../components/FormRegister';

export default function Admin() {
  return (
    <main>
      <section className="Formulário cadastro">
        <FormRegister />
      </section>
      {/* <table>
        { users
          .map(({ name, email, role }, index) => (
            <thead key={ email }>
              <p
                data-testid="admin_manage__element-user-table-item-number"
              >
                {index + 1}
              </p>
              <h4>{name}</h4>
              <h4>{email}</h4>
              <h4>{role}</h4>
              <button
                type="submit"
                onClick={ onDeleteUser(name, email) }
                data-testid="admin_manage__element_user-table-remove"
              >
                EXCLUIR
              </button>
            </thead>))}
      </table> */}
    </main>
  );
}
