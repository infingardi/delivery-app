// export default function Header({ title, toggleSearchIcon, page }) {
//   const history = useHistory();

//   const [click, setClick] = useState(false);
//   const [items, setItems] = useState([]);
//   const [itemIndex, setItemIndex] = useState(0);
//   const [itemPageNumber, setItemPageNumber] = useState([]);

//   const maxItemPerPage = 12;

//   return (
//     <div>
//       <h1 data-testid="page-title">
//         { title }
//       </h1>
//       <button onClick={ () => history.push('/perfil') } type="button">
//         <img
//           data-testid="profile-top-btn"
//           src={ profileIcon }
//           alt="profile-icon"
//         />
//       </button>

//       { toggleSearchIcon
//         && (
//           <button type="button" onClick={ () => setClick(!click) }>
//             <img
//               data-testid="search-top-btn"
//               src={ searchIcon }
//               alt="search-icon"
//             />
//           </button>
//         ) }
//       { click && <SearchBar
//         items={ items }
//         itemIndex={ itemIndex }
//         setItemIndex={ setItemIndex }
//         itemPageNumber={ itemPageNumber }
//         setItems={ setItems }
//         setItemPageNumber={ setItemPageNumber }
//         page={ page }
//         maxItemPerPage={ maxItemPerPage }
//       /> }
//       {items.length > 1
//         && <ItemList
//           items={ items }
//           itemIndex={ itemIndex }
//           page={ page }
//           setItemIndex={ setItemIndex }
//           itemPageNumber={ itemPageNumber }
//           maxItemPerPage={ maxItemPerPage }
//           setClick={ setClick }
//           click={ click }
//         />}
//     </div>
//   );
// }
