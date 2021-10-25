import { ucase, escapeHtml } from './text';

describe('ucase', () => {
    let value = 'this paragraph is long';
    let expectedValue = 'THIS PARAGRAPH IS LONG';

    it(`should return "${expectedValue}"`, () => {
        expect(expectedValue).toEqual(ucase(value));
    });

    value = 'Give me an Answer';
    expectedValue = 'GIVE ME AN ANSWER';

    it(`should return "${expectedValue}"`, () => {
        expect(expectedValue).toEqual(ucase(value));
    });
    
});


describe('escapeHtml', () => {
    let value = '<h1>The Title</h1>';
    let expectedValue = '&lt;h1&gt;The Title&lt;/h1&gt;';

    it(`should return "${expectedValue}"`, () => {
        expect(expectedValue).toEqual(escapeHtml(value));
    });

    value = 'if (a == b && c == d)';
    expectedValue = 'if (a == b &amp;&amp; c == d)';

    it(`should return "${expectedValue}"`, () => {
        expect(expectedValue).toEqual(escapeHtml(value));
    });
    
});