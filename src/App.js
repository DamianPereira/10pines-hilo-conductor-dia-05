import React from "react";
import "./styles.css";
import ListadoDePeliculas from "./ListadoDePeliculas";
import Buscador from "./Buscador";

const Descripcion = () => (
  <p>
    La pelicula mas votada entre las siguientes sera seleccionada para el
    proximo arifici.
  </p>
);

const Titulo = ({ titulo }) => <h1 className="titulo">{titulo}</h1>;
const Subtitulo = ({ children }) => <h2 className="subtitulo">{children}</h2>;

export default function App({ PeliculaService }) {
  const peliculas = PeliculaService.all();
  return (
    <>
      <Titulo
        titulo={`Películas para el artifici ${new Date().getFullYear()}`}
      />
      <Descripcion />
      <Subtitulo>Películas</Subtitulo>
      {peliculas.length > 0 && <ListadoDePeliculas peliculas={peliculas} />}
      <Subtitulo>Buscar películas o actores en IMDB</Subtitulo>
      <Buscador />
    </>
  );
}
