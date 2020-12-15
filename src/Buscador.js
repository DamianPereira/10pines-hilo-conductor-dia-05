import React from "react";

const Buscador = () => {
  const handleClickAyuda = () => {
    alert(
      "Buscador para IMDB, Actores busca por nombre de actor, Peliculas busca por titulo de pelicula."
    );
  };
  return (
    <form action="https://www.imdb.com/find">
      <input
        title="Buscador de peliculas"
        className="barra-de-busqueda"
        name="q"
        placeholder="Nombre de la pelicula o actor..."
        required
      />
      <label>
        <input name="s" value="nm" type="radio" defaultChecked />
        Actores
      </label>
      <label>
        <input name="s" value="tt" type="radio" />
        Peliculas
      </label>
      <button type="submit">Buscar</button>
      <button onClick={handleClickAyuda} type="button" id="ayuda">
        ?
      </button>
    </form>
  );
};

export default Buscador;
