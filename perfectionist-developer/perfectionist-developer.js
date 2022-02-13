function perfectionistDeveloper(arr) {
    const result = [];

    for(let situation of arr) {
        const [D, T, F, R] = situation;

        const totalFunctions = ((F - R) * (D -1)) + F;
        console.log(totalFunctions)
        totalFunctions >= T ? result.push(true) : result.push(false);
    }
    
    return result;
}

console.log(perfectionistDeveloper([[2, 40, 20, 5], [5, 110, 30, 10]]));