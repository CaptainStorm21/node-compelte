
const collectAnswers = require ("./8-eventemitter");

const questions = [
  "What is Node? ",
  "What is javascript? ",
  "who is learning JS? "
];

// collectAnswers(questions);
  

collectAnswers(questions, answers => {
  console.log("thank you for your answers");
  console.log(answers);
  process.exit();
});
