import DBEntity from "./base/DBEntity";

class User extends DBEntity {
  email!: string;
  first_name!: string;
}

export default User;
