const { isAnagram } = require('./anagram');

describe('Test of anagram', () => {
    test('should be two arguments string', () => {
        const result = isAnagram( 1, 1);
        
        expect(result).toBe(false);
    });

    test('should compare words and senteces', () => { 
        const result = isAnagram('dormitory', 'dirty room');

        expect(result).toBe(true);
     });

    test('should be insensitive case', () => {
        const result = isAnagram('DoRmiTorY', 'dIrTy roOM');

        expect(result).toBe(true);
    });
    
    test('should return false if is not anagram', () => { 
        const result = isAnagram('DoRmiTorYy', 'dIrTy roOM');

        expect(result).toBe(false);
    });
});
