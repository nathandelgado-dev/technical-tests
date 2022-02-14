function isPalindrome(str) {
    if(typeof(str) !== 'string') return false;
    const strRight = str.toLowerCase()
        .replace(/\s/g, '');
    
    const strLeft = str.toLocaleLowerCase()
        .replace(/\s/g, '')
        .split('')
        .reverse()
        .join('')
    
    if(strRight === strLeft) return true;
    return false;
}

console.log(isPalindrome('level'));
console.log(isPalindrome('Borrow or rob'));