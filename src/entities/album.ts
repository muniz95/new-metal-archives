import type Label from "./label";
import type Participation from "./participation";
import DBEntity from "./base/DBEntity";

class Album extends DBEntity {
  identifiers!: string;
  album_date!: string;
  participations!: Participation[];
  description!: string;
  name!: string
  album_type!: string;
  label!: Label;
  catalog_id!: string;
  num_copies!: number;
  additional_notes!: string;
  recording_info!: string;
  genre!: string;
  format!: string;
  image!: string;
  info!: string;
  discs!: string;
}

export default Album;
