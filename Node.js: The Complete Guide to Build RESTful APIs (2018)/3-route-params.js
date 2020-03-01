const express = require ('express');
const app = express ();

//endpoints
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/api/courses', (req, res) =>{
    res.send(['javascript', 'java', 'c++']);
})

//endpoint  app.get('/api/courses/1')
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
} );

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
})


//PORT dynamic assignemnet
const port = process.env.PORT || 30000;

app.listen(port, () =>{
    console.log(`my port is ${port}`)
})
