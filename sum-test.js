const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expects(sum(1,3)).tobe(4);
})