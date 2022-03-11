const { debt } = require('./debt');

describe('Test of Debt', () => {
    test('should be argument array', () => {
        let result = debt('I am not array');
        expect(result).toBe(false);
        
        result = debt(3546);
        expect(result).toBe(false);
        
        result = debt({ howAmI: 'I am an Array!'});
        expect(result).toBe(false);
    });

    test('should be argument not empty array', () => {
        const result = debt([]);

        expect(result).toBe(false);
    });

    test('should return an array', () => { 
        let result = debt([15]);
        result = Array.isArray(result);

        expect(result).toBe(true);
     });

    test('should return an array with numbers', () => { 
      let result = debt([15, 16, 100]);
      result = result.every(num => Number.isInteger(num));

      expect(result).toBe(true);
     });

    test('should return correct values', () => {
      const result = debt([15, 16, 45]);

      expect(result).toEqual([4, 5, 6]);
    });  
});
