import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import React from "react";
import "@testing-library/jest-dom";
import Pelicula from "./model/Pelicula";

class FakePeliculaService {
  all() {
    const sharknado = new Pelicula(
      "Sharknado",
      "https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UY837_.jpg",
      "Tornados de tiburones",
      "https://www.imdb.com/title/tt2724064/"
    );
    return [sharknado, sharknado, sharknado];
  }
}

describe("App", () => {
  it("al iniciar, la primer pelicula tiene los votos en 0", () => {
    render(<App PeliculaService={new FakePeliculaService()} />);
    const votos = screen.getAllByText(/votos:/i)[0];
    expect(votos).toHaveTextContent("0");
  });

  it("al clickear votar, suben los votos", () => {
    render(<App PeliculaService={new FakePeliculaService()} />);
    const botonVotar = screen.getAllByRole("button", { name: "Votar" })[0];
    userEvent.click(botonVotar);
    const votos = screen.getAllByText(/votos:/i)[0];
    expect(votos).toHaveTextContent("1");
  });
});
