
const Joi = require ('joi')
const express = require ('express');
const app = express ();

//adding middleware
app.use(express.json())

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
  res.status(400).send('Name is required');
   return;
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
   const result =  Joi.validate(req.body, schema);
    console.log(result);

    if(!req.body.name || req.body.name.length < 3){
        //400 bad request
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);

});


// app.get('/api/posts/:year/:month', (req, res) => {
// //     res.send(req.query)
// // })



//PORT dynamic assignemnet
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`my port is ${port}`)
})
