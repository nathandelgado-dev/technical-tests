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
    console.log(secondWord)

    if(firstWord === secondWord) return true;
}

console.log(isAnagram('Dormitory', 'Dirty room')); 