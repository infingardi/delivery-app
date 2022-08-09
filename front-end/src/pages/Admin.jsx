// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import setLocalStorage from '../../services/localStorage';
// // import CadastroBtn from '../components/CadastroBtn';
// // import DeleteBtn from '../components/DeleteBtn';
// // import { requestRegister } from '../services/requests';

// export default function Admin() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [failedTryRegister, setFailedTryRegister] = useState(false);

//   const admin = async (event) => {
//     event.preventDefault();

//     try {
//       const endpoint = '/admin/manage';

//       const { token, user } = await requestRegister(endpoint, { name, email, password });

//       setLocalStorage.setItem('user', JSON.stringify({ token, ...user }));
//       setIsRegistered(true);
//     } catch (err) {
//       setFailedTryRegister(true);
//       setIsRegistered(false);
//     }
//   };

//   useEffect(() => {
//     setFailedTryRegister(false);
//   }, [name, email, password]);

//   if (isRegistered) return <Link to="/admin/manage" />;

//   return (
//     <>
//       <Header
//         page="Admin"
//         FirstNavigationLink="oi1"
//         SecondNavegationLink="oi2"
//       />
//       <section className="">
//         <form>
//           <h1>Cadastrar novo usuário</h1>
//           <label htmlFor="Input-name">
//             <input
//               className=""
//               type="text"
//               value={ name }
//               onChange={ ({ target: { value } }) => setName(value) }
//               data-testid="admin_manage__input_name"
//               placeholder="Nome e sobrenome"
//             />
//           </label>
//           <label htmlFor="Input-email">
//             <input
//               type="email"
//               value={ email }
//               onChange={ ({ target: { value } }) => setEmail(value) }
//               data-testid="admin_manage__input_email"
//               placeholder="seu-email@site.com.br"
//             />
//           </label>
//           <label htmlFor="Input-password">
//             <input
//               type="password"
//               value={ password }
//               onChange={ ({ target: { value } }) => setPassword(value) }
//               data-testid="admin_manage__input_password"
//               placeholder="*********"
//             />
//           </label>
//           <select
//             data-testid="admin_manage__select_role"
//             type="select"
//             // onClick={ (event) => login(event) }
//             placeholder="Vendedor"
//           >
//             CADASTRAR
//           </select>
//           {
//             (failedTryRegister)
//               ? (
//                 <p data-testid="">
//                   Os dados estão incorretos. Por favor, tente novamente.
//                 </p>
//               )
//               : null
//           }
//           <button
//             data-testid="admin_manage__button_register"
//             type="submit"
//             onClick={ (event) => admin(event) }
//           >
//             CADASTRAR
//           </button>
//           <button
//             data-testid="admin_manage__element_user-table-remove"
//             type="submit"
//             onClick={ (event) => admin(event) }
//           >
//             EXCLUIR
//           </button>
//         </form>
//       </section>
//     </>
//   );
// }
