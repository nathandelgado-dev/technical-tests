const { repeatedCities } = require('./repeated-cities');

describe('Tests of repeated-cities', () => {
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
        const resultFunction = repeatedCities(5, cities);
        expect(typeof(resultFunction)).toBe('object');
    });

    test('should be 3 object length', () => {
        const resultFunction = repeatedCities(3, cities);
        expect(resultFunction.length).toBe(3);
    });

    test('should return sort by repeat times', () => {
        const resultFunction = repeatedCities(5, cities);
        expect(resultFunction).toEqual([ { city: 'Mexico', times: 4 },
        { city: 'United States', times: 3 },
        { city: 'Montserrat', times: 2 },
        { city: 'Netherlands', times: 2 },
        { city: 'Panama', times: 2 } ]);
    });

    test('The first argument should be a number', () => {
        const resultFunction = repeatedCities('5', cities);
        console.log(resultFunction);
        expect(resultFunction).toThrow('The first values should be a number and second an array');
    });
    test('The second argument should be an array', () => {
        const resultFunction = repeatedCities(5, 'cities');
        console.log(resultFunction);
        expect(resultFunction).toThrow(TypeError);
    });
});