import express from 'express';
import fs from 'fs';

import ENV from './utils/envLoader.js';
import fileRouter from './routers/file.router.js';

const app = express();

app.use(express.json());

if (!fs.existsSync(ENV.CLOUD_STORAGE_PATH)) {
    fs.mkdirSync(ENV.CLOUD_STORAGE_PATH, { recursive: true }); // mkdir -p
}

app.get('/', (req, res) => {
  res.send('Hello, Cloud!');
});

app.use('/cloud', fileRouter)

app.listen(ENV.PORT, () => {
    console.log('Server is running on port: ' + ENV.PORT);
});