import type Album from "./album";
import type Artist from "./artist";
import DBEntity from "./base/DBEntity";

class Lineup extends DBEntity {
  role!: string;
  artist!: Artist;
  album!: Album;
}

export default Lineup;
