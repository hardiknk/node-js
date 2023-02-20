
const express = require('express');
const router = require('./routers/men');
const app = express();
const port = 8005;

//export the connection for database 
require('../src/db/connect');

//export the model 
app.use(express.json());
app.use(router);

app.listen(port);