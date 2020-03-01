// module.exports = "I am being exported"

const job = "export "
let count = 0;
const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
    inc, 
    dec,
    getCount,
};