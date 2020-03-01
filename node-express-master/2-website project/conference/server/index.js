//navigate to 2-website project\conference\server
//node server

const express = require('express');
const app = express();

//routes file import 
const routes = require('./routes');

//settng up middleware
app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
});


app.use('/', routes());


app.listen(3000);

module.export = app;

