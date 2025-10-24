import fs from 'fs';
import path from 'path';
// Middleware para loggear peticiones
// Export permite importarlo en otros ficheros

const logger = (req, res, next) => {
    const startTime = Date.now();
    const today = new Date();
    const date = today.toISOString().slice(0,10);
    
    // Listen for when the response is finished
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        const string = `[${today.toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} - ${duration}ms`;
        console.log(string);
        
        let logPath = path.resolve('./logs/');
        
        if(!fs.existsSync(logPath)) {
            fs.mkdirSync(logPath);
        }    

        logPath = path.join(logPath, date + '.log');

        fs.appendFile(logPath, 
            string + '\n',
            (error) => {
                if (error) {
                    console.log(error);
                }
            }
        );
    });
    
    next();
}

export default logger;