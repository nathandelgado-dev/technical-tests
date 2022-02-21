function repeatedWords(listUpTo, arr) {
    if(typeof(listUpTo) !== 'number' || typeof(arr) !== 'array') throw new Error('The first values should be a number and second an array');

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

module.exports = { repeatedWords };

const cities = [
    'Grenada',    
    'Haiti',
    'Honduras',
    'Jamaica',
    'Mexico',
    'Mexico',
    'Mexico',
    'Mexico',
    'Montserrat',
    'Montserrat',
    'Netherlands',
    'Netherlands',
    'Panama',
    'Panama',
    'United States',
    'United States',
    'United States',
];

const result = repeatedWords('5', 'cities');

console.log(typeof(result))