const express = require ('express');
const app = express ();

//endpoints
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/api/courses', (req, res) =>{
    res.send(['javascript', 'java', 'c++']);
})

//PORT dynamic assignemnet
const port = process.env.PORT || 30000;

app.listen(port, () =>{
    console.log(`my port is ${port}`)
})

