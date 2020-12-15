import React from "react";
import FichaPelicula from "./FichaPelicula";

const ListadoDePeliculas = ({ peliculas }) => (
  <ul className="lista-de-peliculas">
    {peliculas.map((pelicula, index) => (
      <FichaPelicula
        key={index}
        nombre={pelicula.nombre}
        portada={pelicula.portada}
        portadaAlt={pelicula.portadaAlt}
        link={pelicula.link}
        votos={pelicula.votos}
      />
    ))}
  </ul>
);

export default ListadoDePeliculas;
