import FichaPelicula from "./FichaPelicula";
import React from "react";
import Pelicula from "./model/Pelicula";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("FichaPelicula", () => {
  const sharknado = new Pelicula(
    "Sharknado",
    "https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UY837_.jpg",
    "Tornados de tiburones",
    "https://www.imdb.com/title/tt2724064/"
  );

  it("renderiza el nombre", () => {
    render(
      <FichaPelicula
        nombre={sharknado.nombre}
        portada={sharknado.portada}
        portadaAlt={sharknado.portadaAlt}
        link={sharknado.link}
        votos={sharknado.votos}
      />
    );
    const nombre = screen.getByText(sharknado.nombre);
    expect(nombre).toBeInTheDocument();
  });
});
