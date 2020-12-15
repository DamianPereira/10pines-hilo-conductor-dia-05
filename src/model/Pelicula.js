export default class Pelicula {
  constructor(nombre, portada, alt, link, votos = 0) {
    this.nombre = nombre;
    this.portada = portada;
    this.portadaAlt = alt;
    this.link = link;
    this.votos = votos;
  }
  votar() {
    this.votos++;
  }
  desvotar() {
    if (this.votos === 0) {
      throw new Error("Los votos son 0, no puedo desvotar");
    }
    this.votos--;
  }
}
