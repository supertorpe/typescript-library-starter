import { sayHello } from './utils';

describe('Say Hello to Peter', () => {
    const value = 'Peter';
    const expectedValue = 'Hello Peter';

    it(`should return "${expectedValue}"`, () => {
        expect(expectedValue).toEqual(sayHello(value));
    });

});