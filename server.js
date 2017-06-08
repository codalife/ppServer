const express = require('express')
const http = require('http');
const cors = require('cors');

const router = require('./router');

const app = express();

app.use(cors());
router(app);

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
console.log("Server is listening on " + port);
