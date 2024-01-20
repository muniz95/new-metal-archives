import DBEntity from "./base/DBEntity";
import type Role from "./role";

class Artist extends DBEntity {
  name!: string;
  roles!: Role[];
}

export default Artist;
