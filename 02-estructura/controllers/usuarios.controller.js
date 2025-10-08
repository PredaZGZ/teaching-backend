
import { getUsuariosFromDb } from '../services/usuarios.service.js';

export const getUsuarios = () => {

    const usuarios = getUsuariosFromDb();

    // Poner nombres en mayuscula
    for (let i = 0; i < usuarios.length; i++) {
        usuarios[i].name = usuarios[i].name.toUpperCase();
    }

    return usuarios;
}