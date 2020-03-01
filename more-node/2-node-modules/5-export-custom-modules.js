// const counter = require ('./app');

// counter.inc();
// counter.inc();
// counter.inc();


// console.log(counter.getCount())

const { inc, dec, getCount } = require ('./app');

inc();
inc();
inc();
dec();

console.log(getCount())