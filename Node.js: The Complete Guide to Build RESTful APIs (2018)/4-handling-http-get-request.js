const express = require ('express');
const app = express ();


const courses = [
    {
        id: 1,
        course: 'Javascript'
    },
    {
        id: 2,
        course: 'C++'
    },
    {
        id: 3,
        course: 'C#'
    }
]


app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/api/courses', (req, res) =>{
    res.send(courses);
})

//endpoint  app.get('/api/courses/1')
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c =>c.id === parseInt(req.params.id) );
  if(!course) res.status(404).send("course was not found");
  res.send(course);

});


//PORT dynamic assignemnet
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`my port is ${port}`)
})




// app.get('/api/posts/:year/:month', (req, res) => {
// //     res.send(req.query)
// // })