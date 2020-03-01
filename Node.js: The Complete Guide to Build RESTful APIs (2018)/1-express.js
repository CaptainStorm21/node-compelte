const express = require ('express');
const app = express ();

// app.get();
// app.post();
// app.put();
// app.delete();

//endpoints
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/api/courses', (req, res) =>{
    res.send(['javascript', 'java', 'c++']);
})
//end of endpoints

app.listen(3000, () =>{
    console.log('rooting')
})

/*
Express.js is a modular web framework for Node.js
It is used for easier creation of web applications and services
Express.js simplifies development and makes it easier to write secure, modular and fast applications. You can do all that in plain old Node.js, but some bugs can (and will) surface, including security concerns (eg. not escaping a string properly)
Redis is an in-memory database system known for its fast performance. No, but you can use it with Express.js using a redis client
*/