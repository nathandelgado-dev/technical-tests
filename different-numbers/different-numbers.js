function differentNumbers(arr) {
    let result = 0;
    const unrepeatNumbers = [];

    arr.forEach(num => {
        if (!unrepeatNumbers.includes(num)) unrepeatNumbers.push(num); 
    });
    result = unrepeatNumbers.length;

    return result;
}

console.log(differentNumbers([5, 3, 5, 2, 5]));