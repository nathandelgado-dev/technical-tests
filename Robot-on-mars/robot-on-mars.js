function robotOnMars (arr) {
    const instructions = arr;
    const directions = {
        'R': 1,
        'L': -1,
        'U': 1,
        'D': -1
    };
    let result = [];

    for(let order of instructions) {
        let steps = 0;
        let cardinalPoint = {
            x: 0,
            y: 0
        }
        const orderArr = order.toUpperCase().split('');
        for(let direction of orderArr) {
            if(direction === 'R') cardinalPoint.x += directions[direction];
            if(direction === 'L') cardinalPoint.x += directions[direction];
            if(direction === 'U') cardinalPoint.y += directions[direction];
            if(direction === 'D') cardinalPoint.y += directions[direction];
            
            const tempSteps = Math.abs(cardinalPoint.x) + Math.abs(cardinalPoint.y);
            if(tempSteps > steps) steps = tempSteps;
        };
        result.push(steps)
    };
    return result;
}

console.log(robotOnMars(['RUULLLDDDR', 'UUU']));