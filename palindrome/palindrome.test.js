const { isPalindrome } = require('./palindrome');

describe('Test of anagram', () => {
    test('should be one argument string', () => {
        const result = isPalindrome(1);
        
        expect(result).toBe(false);
    });

    test('should compare a sentece', () => { 
        const result = isPalindrome('Borrow or rob');

        expect(result).toBe(true);
     });

    test('should compare a word', () => { 
        const result = isPalindrome('level');

        expect(result).toBe(true);
     });

    test('should be insensitive case', () => {
        const result = isPalindrome('lEVeL');

        expect(result).toBe(true);
    });
    
    test('should return false if is not palindrome', () => { 
        const result = isPalindrome('Dormitory');

        expect(result).toBe(false);
    });
});
