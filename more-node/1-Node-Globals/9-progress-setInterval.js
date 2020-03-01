const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0; 

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor(( currentTime / waitTime ) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

console.log(`setting a ${waitTime / 1000} second delay`);

const timeFinished = () => {
    clearInterval(interval);
    console.log('done');
}

//setInterval
const interval = setInterval (incTime, waitInterval);
//times out after set time 
setTimeout(timeFinished, waitTime);
