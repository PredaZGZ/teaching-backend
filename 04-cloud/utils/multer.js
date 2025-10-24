import multer from 'multer';
import path from 'path';
import ENV from './envLoader.js';

//

const storage = multer.diskStorage({

    // Define el directorio donde se guarden los ficheros
    // cb = function cb(error, dato);
    destination: ENV.CLOUD_STORAGE_PATH,
    
    filename: (_req, file, cb) => {

        // basename: '../../etc/passwd.conf' => 'passwd.conf'
        const safeName = path.basename(file.originalname)
        cb(null, safeName)
    }
});

export const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: ENV.MAX_FILE_SIZE_MB * 1024 * 1024, // MB
    }
});