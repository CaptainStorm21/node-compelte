const express = require('express');
const app = express();

//middleware
app.use((req, res, next) => {
    res.setHeader('x-server-date', new Date());
    return next();
});


//error handling
//http://localhost:3000/throw
//check dev tools network => throw
//Status Code: 500 Internal Server Error 
    app.get('/throw', (req, res, next) => {
        throw new Error('Something is wrong!')
    });

//more errors
app.get('/next', (res, req, next) => {
    setTimeout(() => {
        next(new Error('Something is wrong!'));
    }, 1000);
});

app.get('/', (req, res, next) => {
    return res.send('Hello, This is webserver!')
})

app.get('/time', (req, res, next) => {
    return res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
    if (!req.query.name) {
        return res.status(400).end();
    }
    return res.send(`Good morning from ${req.query.name}`);
});


app.get('/user/:name', (req, res, next) => {
    return res.send(`User profile of ${req.params.name}`);
});

app.listen(3000);