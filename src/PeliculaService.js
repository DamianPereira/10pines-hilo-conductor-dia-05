import Pelicula from "./model/Pelicula";

class PeliculaService {
  all() {
    const sharknado1 = new Pelicula(
      "Sharknado",
      "https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UY837_.jpg",
      "Portada de sharknado 1, un tornado de tiburones",
      "https://www.imdb.com/title/tt2724064/"
    );
    const sharknado2 = new Pelicula(
      "Sharknado 2: The second one",
      "https://m.media-amazon.com/images/M/MV5BMjA0MTIxMDEwNF5BMl5BanBnXkFtZTgwMDk3ODIxMjE@._V1_FMjpg_UY912_.jpg",
      "Portada de sharknado 2, un tornado de tiburones",
      "https://www.imdb.com/title/tt3062074/"
    );
    const sharknado3 = new Pelicula(
      "Sharknado 3: Oh hell no!",
      "https://m.media-amazon.com/images/M/MV5BMTc5MDUzNzQzOF5BMl5BanBnXkFtZTgwMDg4NTYzNTE@._V1_FMjpg_UY864_.jpg",
      "Portada de sharknado 3, un tornado de tiburones",
      "https://www.imdb.com/title/tt3899796/"
    );
    return [sharknado1, sharknado2, sharknado3];
  }
}

export default new PeliculaService();
