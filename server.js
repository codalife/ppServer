const express = require('express')
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.json());

router(app);

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
console.log("Server is listening on " + port);
