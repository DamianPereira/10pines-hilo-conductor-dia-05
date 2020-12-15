import React, {useState} from "react";
import PropTypes from "prop-types";

const FichaPelicula = (props) => {
  const [votos, setVotos] = useState(0)
  const votar = () => {
    setVotos(votos + 1)
  }

  return (
    <li className="pelicula">
      <h3 className="pelicula-titulo">{props.nombre}</h3>
      <a href={props.link}>
        <img alt={props.portadaAlt} className="pelicula-imagen" src={props.portada}/>
      </a>
      <span className="pelicula-votos">Votos: {votos}</span>
      <button onClick={votar} className="pelicula-votar">Votar</button>
    </li>
  );
};

FichaPelicula.propTypes = {
  nombre: PropTypes.string,
  portada: PropTypes.string,
  portadaAlt: PropTypes.string,
  link: PropTypes.string,
  votos: PropTypes.number,
};

export default FichaPelicula;
