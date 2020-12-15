import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Buscador from "./Buscador";
import userEvent from "@testing-library/user-event";

describe("Buscador", () => {
  beforeAll(() => {
    global.alert = jest.fn();
  });

  it("Se abre la ayuda al clickear ayuda", () => {
    render(<Buscador />);
    const botonDeAyuda = screen.getByRole("button", { name: "?" });
    userEvent.click(botonDeAyuda);
    expect(global.alert).toHaveBeenCalledWith("Buscador para IMDB, Actores busca por nombre de actor, Peliculas busca por titulo de pelicula.");
  });
});
