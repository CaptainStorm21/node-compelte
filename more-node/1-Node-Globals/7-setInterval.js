const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0; 

const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting time is ${currentTime/1000} seconds`);
}

console.log(`setting a ${waitTime / 1000} second delay`);

const timeFinished = () => console.log('done');

//non stop 
setInterval (incTime, waitInterval);
//times out after set time 
setTimeout(timeFinished, waitTime);
