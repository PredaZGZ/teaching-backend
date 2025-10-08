
import { getAlumnosFromDb } from '../services/alumnos.service.js';

export const getAlumnos = () => {

    const alumnos = getAlumnosFromDb();

    // Poner nombres en mayuscula
    for (let i = 0; i < alumnos.length; i++) {
        alumnos[i].name = alumnos[i].name.toUpperCase();
    }

    return alumnos;
}