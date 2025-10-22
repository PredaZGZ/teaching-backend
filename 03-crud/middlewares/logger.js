import fs from 'fs';
// import path from 'path';
// Middleware para loggear peticiones
// Export permite importarlo en otros ficheros

const logger = (req, res, next) => {

    const string = `[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} `
    console.log(string);
    
    fs.appendFile('./logs/requests.log', 
        string + '\n',
        (error) => {
            if (error) {
                console.log(error);
            }
        }
    );
    
    next();
}

export default logger;