const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timeFinished = () => console.log('done');

setTimeout(timeFinished, waitTime);