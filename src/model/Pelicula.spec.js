import Pelicula from "./Pelicula";

describe("Pelicula", () => {
  const nombreDePelicula = "Nombre de la pelicula";
  const portadaDePelicula = "https://some-domain.com/some-image.png";
  const altDeLaPortada = "Esta es la imagen de portada";
  const linkDePelicula = "https://wikipedia.org/una-pelicula";

  const crearPelicula = (votos) =>
    new Pelicula(
      nombreDePelicula,
      portadaDePelicula,
      altDeLaPortada,
      linkDePelicula,
      votos
    );

  it("Tiene un nombre", () => {
    const pelicula = crearPelicula();

    expect(pelicula.nombre).toBe(nombreDePelicula);
  });

  it("Tiene un link a una imagen de portada", () => {
    const pelicula = crearPelicula();

    expect(pelicula.portada).toBe(portadaDePelicula);
  });

  it("Tiene un texto alternativo para la imagen", () => {
    const pelicula = crearPelicula();

    expect(pelicula.portadaAlt).toBe(altDeLaPortada);
  });

  it("empieza con 0 votos", () => {
    const pelicula = crearPelicula();

    expect(pelicula.votos).toBe(0);
  });

  it("al votar suben los votos", () => {
    const pelicula = crearPelicula();

    pelicula.votar();

    expect(pelicula.votos).toBe(1);
  });

  it("puedo inicializar con votos", () => {
    const pelicula = crearPelicula(5);
    expect(pelicula.votos).toBe(5);
  });

  it("puedo desvotar cuando tiene votos", () => {
    const peliculaVotada = crearPelicula(5);

    peliculaVotada.desvotar();

    expect(peliculaVotada.votos).toBe(4);
  });

  it("desvotar si tiene 0 levanta una excepcion y no cambia los votos", () => {
    const pelicula = crearPelicula();

    expect(() => pelicula.desvotar()).toThrow(
      "Los votos son 0, no puedo desvotar"
    );

    expect(pelicula.votos).toBe(0);
  });
});
