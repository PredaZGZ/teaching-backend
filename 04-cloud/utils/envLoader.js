import fs from "fs";

const REQUIRED_ENV_VARS = [
  "PORT",
];

function validateEnvVars() {
    const required = REQUIRED_ENV_VARS;
    const missingVars = required.filter((varName) => !process.env[varName]);

    // alternativa for loop
    /* const missingVars = []; 
    for (let i = 0; i < required.length; i++) {
        const varName = required[i];
        if (!process.env[varName]) {
            missingVars.push(varName);
        }
    } */

    return missingVars;

}

function validateEnvFile() {
    if (!fs.existsSync(".env") || fs.statSync(".env").size === 0) {
        console.log("Creando el archivo .env.");
        let str = "";
        REQUIRED_ENV_VARS.forEach((varName) => {
            str = str + varName +'=\n';
        });
        fs.writeFileSync(".env", str);
    }
}


validateEnvFile();
const missingVars = validateEnvVars();
missingVars.forEach((missingVar) => {
    console.warn(`Warning: Missing required environment variable: ${missingVar}`);
});