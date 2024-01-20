import type Album from "./album";
import DBEntity from "./base/DBEntity";
import type User from "./user";

class Review extends DBEntity {
  title!: string;
  rating!: number;
  date!: string;
  content!: string;
  status!: string;
  album!: Album;
  user!: User;
}

export default Review;
