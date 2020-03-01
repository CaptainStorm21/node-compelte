console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

//add first name and last name 
//node 3-argument-var-process_argv alex animalia

const [,,firstName, lastName ] = process.argv;
console.log(`First name ${firstName} ${lastName}`)
//output
/*
C:\node-microservices\1-Node-Globals>node 3-argument-var-process_argv alexa animalia
6024
12.13.1
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\node-microservices\\1-Node-Globals\\3-argument-var-process_argv',
  'alexa',
  'animalia'
]
*/

//node 3-argument-var-process_argv  --user ned --greeting "Good morning"
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\node-microservices\\1-Node-Globals\\3-argument-var-process_argv',
  '--user',
  'ned',
  '--greeting',
  'Good morning'
]
*/

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab ("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`)