
import { alumnos } from "../db/memory.js";

// En un servicio real, 
// aquí irían las llamadas a la base de datos
// Las consultas a la base de datos son operaciones asíncronas
// por lo que normalmente devolverían una promesa
// y habría que usar async/await

export const getAlumnosFromDb = () => {

    // SELECT * FROM users;
    return alumnos;
}