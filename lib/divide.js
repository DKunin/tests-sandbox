module.exports = function divide(a, b) {
    if (a === 0) {
        return 0;
    }
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};
