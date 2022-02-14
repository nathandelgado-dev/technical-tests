function isAnagram(str1, str2) {
    const firstWord = str1.toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .sort((a,b) => { a - b })
        .join('');
    const secondWord = str1.toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .sort((a,b) => { a - b })
        .join('');  

    if(firstWord === secondWord) return true;
    return false;
}

console.log(isAnagram('Dormitory', 'Dirty room')); 