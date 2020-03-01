const questions = [
    "What is your name?",
    "What is your fav thing to do?",
    "What programming language you like?"
]

const ask = ( i = 0 ) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `)
}

ask();

// will run and exit after 1st answer
// process.stdin.on('data', data=>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
//     process.exit();
// })



const answers = [];
process.stdin.on('data', data=>{
    answers.push(data.toString().trim());

    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit();
    }

})

process.on('exit', ()=> {
    const [name, activity, lang] = answers;
    console.log(`
        Thank you for participating!
        Go ${activity}, ${name} you can like ${lang} code later!
    `)
})