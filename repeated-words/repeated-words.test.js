const { repeatedWords } = require('./repeated-words');

describe('Tests of repeated-words', () => {
    const cities = [
        'Grenada',    
        'Haiti',
        'Honduras',
        'Jamaica',
        'Mexico',
        'Mexico',
        'Mexico',
        'Mexico',
        'Montserrat',
        'Montserrat',
        'Netherlands',
        'Netherlands',
        'Panama',
        'Panama',
        'United States',
        'United States',
        'United States',
    ];    
    
    test('should return an object', () => {
        const resultFunction = repeatedWords(5, cities);
        expect(typeof(resultFunction)).toBe('object');
    });

    test('should be 3 object length', () => {
        const resultFunction = repeatedWords(3, cities);
        expect(resultFunction.length).toBe(3);
    });

    test('should return sort by repeat times', () => {
        const resultFunction = repeatedWords(5, cities);
        expect(resultFunction).toEqual([ { city: 'Mexico', times: 4 },
        { city: 'United States', times: 3 },
        { city: 'Montserrat', times: 2 },
        { city: 'Netherlands', times: 2 },
        { city: 'Panama', times: 2 } ]);
    });

    test('The first argumrnt should be a number an second an array', () => {
        const resultFunction = repeatedWords('5', 'cities');
        expect(repeatedWords('5', cities)).is().toThrow();
    });
});