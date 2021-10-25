import { cube, factorial } from './math';

describe('Cube', () => {
    let value = 5;
    let expectedValue = 125;

    it(`should return ${expectedValue}`, () => {
        expect(expectedValue).toEqual(cube(value));
    });

    value = 4;
    expectedValue = 64;

    it(`should return ${expectedValue}`, () => {
        expect(expectedValue).toEqual(cube(value));
    });
    
});

describe('Factorial', () => {
    let value = 5;
    let expectedValue = 120;

    it(`should return ${expectedValue}`, () => {
        expect(expectedValue).toEqual(factorial(value));
    });

    value = 4;
    expectedValue = 24;

    it(`should return ${expectedValue}`, () => {
        expect(expectedValue).toEqual(factorial(value));
    });
    
});