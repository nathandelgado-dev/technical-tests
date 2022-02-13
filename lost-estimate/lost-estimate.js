function lostEstimate (arr) {
    const result = [];

    for(let team of arr) {
        const [N, R, T] = team;
        const totalHours = N * R;
        let bigTaskHours = 0;        
        const smallsTaksHours = T * (N -1);

        while (smallsTaksHours + bigTaskHours !== totalHours) {
            bigTaskHours += 1;
        }
        
        result.push(bigTaskHours);
    }
    return result;
}

console.log(lostEstimate([[2, 4, 2],[3, 16, 8]]));