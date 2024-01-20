import type Country from "@/entities/country";
import type User from "@/entities/user";
import type Album from "@/entities/album";
import type Label from "./label";
import type BandStatus from "./bandStatus";
import DBEntity from "./base/DBEntity";

class Band extends DBEntity {
  name!: string;
  genre!: string;
  country!: Country;
  user!: User;
  participations!: Album[];
  themes!: string[];
  label!: Label;
  info!: string;
  band_status!: BandStatus;
  location!: string;
  additional_notes!: string;
  score!: number;
}

export default Band;
