const express = require('express');
var bodyParser = require('body-parser');
var env = require('./config/readenv.js');

const router = require('./router/router.js');

const port = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
    console.log('Server is up and running in ', port);
});

