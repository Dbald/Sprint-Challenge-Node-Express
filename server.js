const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const actionsRouter = require('./Actions/actionsRouter.js');
const projectRouter = require('./Projects/projectRouter.js');
const server = express();
const port = 3000;

function logger(req, res, next) {
    console.log('body:', req.body);

    next();
}

//Middleware
server.use(logger);
server.use(morgan());
server.use(cors());
server.use('/api/actions', actionsRouter);
server.use('/api/project', projectRouter);


//Endpoint
server.get('/', (req, res) => {
    res.json({ Success: `API Running on port ${ port }`});
})

server.listen(port);