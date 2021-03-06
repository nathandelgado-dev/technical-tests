function repeatedWords(listUpTo, arr) {
    if(typeof(listUpTo) !== 'number' || typeof(arr) !== 'object') throw new Error('The first values should be a number and second an array');

    const citiesCount = {};    
    arr.forEach(city => {
        citiesCount[city] ? citiesCount[city] += 1: citiesCount[city] = 1; 
    });

    const citiesArr = Object.keys(citiesCount);

    const totalCities = [];
    citiesArr.forEach(city => {
        totalCities.push({
            city: city,
            times: citiesCount[city]
        })    
    })
        
    const orderedCities = totalCities.sort((a, b) => b.times - a.times);

    const listCities = orderedCities.slice(0, listUpTo);

    return listCities;
}
