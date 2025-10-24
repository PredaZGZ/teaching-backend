import express from 'express';

import ENV from './utils/envLoader.js';
//import fileRouter from './routers/file.router.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Cloud!');
});

//app.use('/cloud', fileRouter)

app.listen(ENV.PORT, () => {
    console.log('Server is running on port: ' + ENV.PORT);
});