const Calculator = require('./test.js');

// FILE: test.test.js

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should add a positive number', () => {
        calc.add(5);
        expect(calc.getResult()).toBe(5);
    });

    test('should add a negative number', () => {
        calc.add(-3);
        expect(calc.getResult()).toBe(-3);
    });

    test('should add zero', () => {
        calc.add(0);
        expect(calc.getResult()).toBe(0);
    });

    test('should chain add operations', () => {
        calc.add(2).add(3);
        expect(calc.getResult()).toBe(5);
    });
});