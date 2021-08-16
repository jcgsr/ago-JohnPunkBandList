import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get" autoComplete="off">
    <label htmlFor="header-search">
      <span className="visually-hidden">Buscar bandas</span>
    </label>
    <input
      type="text"
      value={searchQuery}
      onInput={e => setSearchQuery(e.target.value)}
      id="header-search"
      placeholder="buscar bandas"
      name="s"
    />{" "}
    <button type="submit">buscar</button>
  </form>
);

export default SearchBar;
