// Middleware para loggear peticiones
// Export permite importarlo en otros ficheros

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.socket.remoteAddress} `);
    next();
}

export default logger;