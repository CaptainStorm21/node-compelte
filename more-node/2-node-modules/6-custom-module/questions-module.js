
const collectAnswers = require ("./questions");

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
