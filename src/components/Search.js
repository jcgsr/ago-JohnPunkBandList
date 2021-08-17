// import React, { useState, useEffect } from "react";

// import api from "../assets/services/api";

// const SearchBar = () => {
//   const [searchBand, setSearchBand] = useState("");
//   const [bands, setBands] = useState([]);
//   useEffect(() => {
//     const loadBands = async () => {
//       const response = await api.get();
//       setBands(response.data);
//       console.log(response.data);
//     };
//     loadBands();
//   }, []);
//   return (
//     <section>
//       <form>
//         <input
//           type="text"
//           placeholder="buscar bandas"
//           autoFocus
//           value={searchBand}
//           aria-label="Search"
//           onChange={e => setSearchBand(e.target.value)}
//         />
//       </form>
//       {bands
//         .filter(val => {
//           if (searchBand == "") {
//             return val;
//           } else if (
//             val.bands.toLowerCase().includes(searchBand.toLowerCase())
//           ) {
//             return val;
//           }
//         })
//         .map(bands => (
//           <article key={bands.band}>
//             <h2>{bands.band}</h2>
//           </article>
//         ))}
//     </section>
//   );
// };

// export default SearchBar;

import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get" autoComplete="off">
    <label htmlFor="header-search">
      <span className="visually-hidden">Buscar Bandas</span>
    </label>
    <input
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="buscar bandas"
      name="s"
    />
    {/* <button type="submit">Search</button>*/}
  </form>
);

export default SearchBar;
