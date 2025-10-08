
import { users } from "../db/memory.js";

export const getUsuariosFromDb = () => {

    // SELECT * FROM users;
    return users;
}