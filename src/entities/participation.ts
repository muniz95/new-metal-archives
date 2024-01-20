import type Band from "./band";
import DBEntity from "./base/DBEntity";

class Participation extends DBEntity {
  band!: Band;
}

export default Participation;
