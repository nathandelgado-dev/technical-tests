function isAnagram(str1, str2) {
    if(typeof(str1) !== 'string' && typeof(str2) !== 'string') return false;

    const firstWord = str2.replace(/\s/g, '')
        .toLowerCase()        
        .split('')
        .sort()
        .join('');
    const secondWord = str1.replace(/\s/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');  

    if(firstWord !== secondWord) return false;
    return true;
}
