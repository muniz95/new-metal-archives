import type Artist from "./artist";
import type Band from "./band";
import DBEntity from "./base/DBEntity";

class Role extends DBEntity {
  start!: number;
  end!: number;
  title!: string;
  band!: Band;
  artist!: Artist;
}

export default Role;
