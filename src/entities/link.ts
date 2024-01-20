import type Artist from "./artist";
import type Band from "./band";
import DBEntity from "./base/DBEntity";
import type Label from "./label";

class Link extends DBEntity {
  site!: string;
  url!: string;
  artist!: Artist;
  band!: Band;
  label!: Label;
}

export default Link;
